import { AVATAR_PRESETS, processUploadedAvatarFile } from './avatarPresets.js';

const RANDOM_CALLSIGNS = [
  'CrimsonWing',
  'FalconStrike',
  'SolarTalon',
  'VoltFeather',
  'ApexHawkeye',
  'NovaPlume',
  'ShadowBeak',
  'SkyVanguard',
  'ThunderCrest',
  'BlazeRaptor'
];

/**
 * Manages the sleek Dili-Birds User Profile Setup Screen (<dialog> modal).
 * Includes:
 * - Prominent username input with :user-valid / :user-invalid & ARIA sync
 * - Camera icon button on the profile picture to upload a custom image
 * - 6 signature Dili-Birds character avatars loaded from src/assets/
 */
export class ProfileModal {
  constructor(storage, onProfileUpdated, onProgressReset) {
    this.storage = storage;
    this.onProfileUpdated = onProfileUpdated;
    this.onProgressReset = onProgressReset;

    this.dialog = document.getElementById('profile-dialog');
    this.form = document.getElementById('profile-form');
    this.closeBtn = document.getElementById('btn-close-profile');

    // Username inputs & helpers
    this.usernameInput = document.getElementById('username-input');
    this.charCountEl = document.getElementById('username-char-count');
    this.randomBtn = document.getElementById('btn-random-username');

    // Avatar preview, camera upload button & presets from src/assets
    this.avatarPreviewImg = document.getElementById('profile-avatar-preview');
    this.avatarCameraBtn = document.getElementById('btn-avatar-camera');
    this.avatarFileInput = document.getElementById('avatar-upload-input');
    this.uploadStatusEl = document.getElementById('avatar-upload-status');
    this.presetsGridEl = document.getElementById('avatar-presets-grid');

    // Live preview labels
    this.previewCallsignEl = document.getElementById('preview-callsign');
    this.previewRankEl = document.getElementById('preview-rank-badge');

    this.resetBtn = document.getElementById('btn-reset-progress');

    // Working avatar state inside the modal
    this.selectedAvatarUrl = this.storage.getAvatarUrl();
    this.selectedPresetId = this.storage.getAvatarPresetId();

    this.renderAvatarPresets();
    this.initEvents();
  }

  renderAvatarPresets() {
    if (!this.presetsGridEl) return;
    this.presetsGridEl.innerHTML = '';

    AVATAR_PRESETS.forEach((preset) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `avatar-preset-btn ${
        this.selectedPresetId === preset.id ? 'selected' : ''
      }`;
      btn.dataset.presetId = preset.id;
      btn.title = preset.name;
      btn.setAttribute('aria-label', `Select ${preset.name} Avatar`);
      btn.setAttribute('aria-pressed', this.selectedPresetId === preset.id ? 'true' : 'false');

      btn.innerHTML = `
        <img src="${preset.url}" alt="${preset.name}" />
        <span class="preset-check" aria-hidden="true">✓</span>
      `;

      btn.addEventListener('click', () => {
        this.selectAvatar(preset.url, preset.id);
        this.uploadStatusEl?.classList.add('hidden');
      });

      this.presetsGridEl.appendChild(btn);
    });
  }

  selectAvatar(url, presetId = 'custom') {
    this.selectedAvatarUrl = url;
    this.selectedPresetId = presetId;

    if (this.avatarPreviewImg) {
      this.avatarPreviewImg.src = url;
    }

    if (this.presetsGridEl) {
      const buttons = this.presetsGridEl.querySelectorAll('.avatar-preset-btn');
      buttons.forEach((btn) => {
        const isMatch = btn.dataset.presetId === presetId;
        btn.classList.toggle('selected', isMatch);
        btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
      });
    }
  }

  showUploadStatus(text, type = 'success') {
    if (!this.uploadStatusEl) return;
    this.uploadStatusEl.textContent = text;
    this.uploadStatusEl.className = `upload-status ${type}`;
    this.uploadStatusEl.classList.remove('hidden');
  }

  async handleFileSelection(file) {
    if (!file) return;
    try {
      this.showUploadStatus('Updating photo...', 'info');
      const croppedDataUrl = await processUploadedAvatarFile(file);
      this.selectAvatar(croppedDataUrl, 'custom');
      this.showUploadStatus('Custom photo selected!', 'success');
    } catch (err) {
      this.showUploadStatus(err.message || 'Could not load image.', 'error');
    }
  }

  syncAriaInvalid(input) {
    if (!input) return;
    const isValid = input.checkValidity() && input.value.trim().length >= 2;
    if (!isValid) {
      input.setAttribute('aria-invalid', 'true');
      input.classList.add('user-invalid-fallback');
    } else {
      input.removeAttribute('aria-invalid');
      input.classList.remove('user-invalid-fallback');
    }
  }

  updateLivePreview() {
    const val = (this.usernameInput?.value || '').trim();
    const len = val.length;
    if (this.charCountEl) {
      this.charCountEl.textContent = `${len} / 24`;
    }
    if (this.previewCallsignEl) {
      this.previewCallsignEl.textContent = val || 'Commander';
    }
    if (this.previewRankEl) {
      const lvl = this.storage.getUnlockedLevel();
      const coins = this.storage.getCoins();
      this.previewRankEl.textContent = `LVL ${lvl} • ${coins.toLocaleString()} COINS`;
    }
  }

  initEvents() {
    if (!this.dialog) return;

    // Fallback for browsers without <dialog closedby="any"> support
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      this.dialog.addEventListener('click', (event) => {
        if (event.target !== this.dialog) return;
        const rect = this.dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;

        if (!isDialogContent) {
          this.dialog.close();
        }
      });
    }

    this.closeBtn?.addEventListener('click', () => {
      if (this.dialog.open) {
        this.dialog.close();
      }
    });

    // Live character counter & ARIA state sync on username input
    this.usernameInput?.addEventListener('input', () => {
      this.updateLivePreview();
      if (this.usernameInput.checkValidity() && this.usernameInput.value.trim().length >= 2) {
        this.usernameInput.removeAttribute('aria-invalid');
        this.usernameInput.classList.remove('user-invalid-fallback');
      }
    });

    this.usernameInput?.addEventListener(
      'blur',
      () => {
        if (this.usernameInput.value.length > 0) {
          this.syncAriaInvalid(this.usernameInput);
        }
      },
      true
    );

    // Random Callsign Generator button
    this.randomBtn?.addEventListener('click', () => {
      const pick = RANDOM_CALLSIGNS[Math.floor(Math.random() * RANDOM_CALLSIGNS.length)];
      const suffix = Math.floor(10 + Math.random() * 89);
      this.usernameInput.value = `${pick}${suffix}`;
      this.usernameInput.removeAttribute('aria-invalid');
      this.usernameInput.classList.remove('user-invalid-fallback');
      this.updateLivePreview();
      this.usernameInput.focus();
    });

    // Camera Icon Overlay button (& clicking the avatar preview image) triggers hidden file input
    this.avatarCameraBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.avatarFileInput?.click();
    });

    this.avatarPreviewImg?.addEventListener('click', () => {
      this.avatarFileInput?.click();
    });

    // File input change
    this.avatarFileInput?.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) {
        this.handleFileSelection(file);
      }
      e.target.value = '';
    });

    // Form Submission
    this.form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const rawUsername = (this.usernameInput?.value || '').trim();
      if (rawUsername.length < 2) {
        this.syncAriaInvalid(this.usernameInput);
        this.usernameInput?.focus();
        return;
      }

      const isFirstProfileSetup = !this.storage.isProfileConfigured() || !this.storage.getServerRowId();
      const previousUsername = this.storage.getUsername();

      const username = this.storage.setUsername(rawUsername);
      const avatarUrl = this.storage.setAvatar(this.selectedAvatarUrl, this.selectedPresetId);

      if (this.dialog.open) {
        this.dialog.close();
      }
      this.onProfileUpdated?.({ username, avatarUrl, previousUsername, isFirstProfileSetup });
    });

    if (this.resetBtn) {
      this.resetBtn.addEventListener('click', () => {
        this.storage.resetProgress();
        this.updateLivePreview();
        this.onProgressReset?.();
        if (this.dialog.open) {
          this.dialog.close();
        }
      });
    }
  }

  open() {
    if (!this.dialog) return;

    this.usernameInput.value = this.storage.hasUsername() ? this.storage.getUsername() : '';
    this.usernameInput.removeAttribute('aria-invalid');
    this.usernameInput.classList.remove('user-invalid-fallback');

    this.selectAvatar(this.storage.getAvatarUrl(), this.storage.getAvatarPresetId());
    this.uploadStatusEl?.classList.add('hidden');
    this.updateLivePreview();

    if (!this.dialog.open) {
      this.dialog.showModal();
    }

    requestAnimationFrame(() => {
      if (this.usernameInput) {
        this.usernameInput.focus();
        this.usernameInput.select();
      }
    });
  }
}
