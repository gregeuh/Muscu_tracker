// On donne un nom à notre cache
const cacheName = 'muscu-pro-v1';

// On liste les ressources à garder en mémoire (optionnel mais recommandé)
const assets = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap'
];

// Installation du Service Worker
self.addEventListener('install', e => {
  console.log('SW installé !');
});

// Interception des requêtes pour le mode offline
self.addEventListener('fetch', event => {
  // Pour l'instant, on laisse passer les requêtes normalement
  // Mais la simple présence de ce bloc permet l'installation PWA
});
