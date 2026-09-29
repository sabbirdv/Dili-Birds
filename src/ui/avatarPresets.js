import character2Url from '../assets/character-2.png';
import character3Url from '../assets/character-3.png';
import character1Url from '../assets/character.png';
import subChar1Url from '../assets/sub-character.png';
import subChar2Url from '../assets/sub-character-2.png';
import subChar3Url from '../assets/sub-character-3.png';

/**
 * Default selectable profile picture presets loaded directly from src/assets/.
 */
export const AVATAR_PRESETS = [
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
