const butInstall = document.getElementById('buttonInstall');

// Event handler for 'beforeinstallprompt'
window.addEventListener('beforeinstallprompt', (event) => {
  console.log('beforeinstallprompt event triggered');
  event.preventDefault();
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

// Install button click event
butInstall.addEventListener('click', async () => {
  console.log('Install button clicked');
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle('hidden', true);
});

// Event handler for 'appinstalled'
window.addEventListener('appinstalled', (event) => {
  console.log('App successfully installed!', event);
  window.deferredPrompt = null;
});
