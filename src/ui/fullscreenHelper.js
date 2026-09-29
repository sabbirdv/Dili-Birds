/**
 * Cross-browser Fullscreen helper for mobile and desktop browsers.
 * Supports standard Fullscreen API, webkit (Safari / iOS web views), moz, and ms.
 */
export function isFullscreen() {
  return Boolean(
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  );
}

export async function requestFullscreen() {
  const el = document.documentElement;
  try {
    if (el.requestFullscreen) {
      await el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      await el.webkitRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      await el.mozRequestFullScreen();
    } else if (el.msRequestFullscreen) {
      await el.msRequestFullscreen();
    }
  } catch (err) {
    console.debug('Fullscreen request deferred or unsupported:', err);
  }
}

export async function exitFullscreen() {
  try {
    if (document.exitFullscreen) {
      await document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      await document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      await document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      await document.msExitFullscreen();
    }
  } catch (err) {
    console.debug('Exit fullscreen error:', err);
  }
}

export async function toggleFullscreen() {
  if (isFullscreen()) {
    await exitFullscreen();
    return false;
  } else {
    await requestFullscreen();
    return true;
  }
}
