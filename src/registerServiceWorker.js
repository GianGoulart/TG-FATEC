
export default function register() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(function () {
        console.log('Service worker registered!');
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}


