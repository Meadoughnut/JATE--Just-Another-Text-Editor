const butInstall = document.getElementById('buttonInstall');

// Listen for the 'beforeinstallprompt' event to trigger the install prompt
window.addEventListener('beforeinstallprompt', (event) => {
  console.log('beforeinstallprompt event triggered');
  event.preventDefault();
  window.deferredPrompt = event;  // Save the event for later use
  butInstall.classList.toggle('hidden', false); // Show the install button
});

// Handle the install button click event
butInstall.addEventListener('click', async () => {
  console.log('Install button clicked');
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }

  // Show the install prompt to the user
  promptEvent.prompt();
  window.deferredPrompt = null; // Reset the deferred prompt
  butInstall.classList.toggle('hidden', true); // Hide the install button
});

// Listen for the 'appinstalled' event to confirm installation
window.addEventListener('appinstalled', (event) => {
  console.log('App successfully installed!', event);
  window.deferredPrompt = null;  // Clear the deferred prompt
});
