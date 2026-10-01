import character2Url from '../assets/character-2.png';
import character3Url from '../assets/character-3.png';
import character1Url from '../assets/character.png';
import subChar1Url from '../assets/sub-character.png';
import subChar2Url from '../assets/sub-character-2.png';
import subChar3Url from '../assets/sub-character-3.png';

export const DEFAULT_COMMANDER_AVATAR = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="cmdBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="cmdVisor" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#818cf8" />
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="48" fill="url(#cmdBg)" stroke="#38bdf8" stroke-width="2.5" />
  <circle cx="50" cy="38" r="18" fill="#1e293b" stroke="#94a3b8" stroke-width="2" />
  <path d="M36 36 C36 30, 64 30, 64 36 C64 43, 36 43, 36 36 Z" fill="url(#cmdVisor)" />
  <path d="M40 34 Q50 31 58 34" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.8" />
  <path d="M22 84 C22 60, 36 56, 50 56 C64 56, 78 60, 78 84" fill="#0369a1" stroke="#38bdf8" stroke-width="2.5" />
  <circle cx="50" cy="68" r="3.5" fill="#fbbf24" />
</svg>
`)}`;

/**
 * Default selectable profile picture presets loaded directly from src/assets/.
 */
export const AVATAR_PRESETS = [
  {
    id: 'commander-default',
    name: 'Flight Commander',
    url: DEFAULT_COMMANDER_AVATAR
  },
  {
    id: 'orb-blue',
    name: 'Aero Orb Blue',
    url: character2Url
  },
  {
    id: 'orb-magenta',
    name: 'Nova Orb Pink',
    url: character3Url
  },
  {
    id: 'dili-wing',
    name: 'Dili Wing',
    url: character1Url
  },
  {
    id: 'fluffy-blue',
    name: 'Fuzzy Heart',
    url: subChar1Url
  },
  {
    id: 'velvet-heart',
    name: 'Velvet Charm',
    url: subChar2Url
  },
  {
    id: 'chrome-magenta',
    name: 'Cyber Magenta',
    url: subChar3Url
  }
];

/**
 * Reads an uploaded image file from the camera icon picker, center-crops it to a square,
 * and scales it to 192x192 so it can be stored cleanly in LocalStorage.
 */
export function processUploadedAvatarFile(file) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith('image/')) {
      reject(new Error('Please select a valid image file (PNG, JPG, WEBP, GIF).'));
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Failed to read image file.'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Invalid image format.'));
      img.onload = () => {
        const size = 192;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        // Center-crop square
        const minSide = Math.min(img.width, img.height);
        const sx = (img.width - minSide) / 2;
        const sy = (img.height - minSide) / 2;

        ctx.drawImage(img, sx, sy, minSide, minSide, 0, 0, size, size);
        const dataUrl = canvas.toDataURL('image/webp', 0.88);
        resolve(dataUrl);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}
