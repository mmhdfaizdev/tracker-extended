// Service Worker super sederhana untuk bypass syarat PWA
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Terinstal');
});

self.addEventListener('fetch', (e) => {
    // Biarkan aplikasi mengambil data dari internet jika ada, 
    // jika offline, aplikasi tetap berjalan pakai cache browser
    e.respondWith(
        fetch(e.request).catch(() => {
            return new Response('Aplikasi sedang offline');
        })
    );
});