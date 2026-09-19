// 최소한의 서비스워커입니다. 단가표 데이터는 항상 최신이어야 하므로 별도로 캐싱하지 않고,
// PWA "설치 가능" 조건을 만족시키기 위한 용도로만 존재합니다.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", () => {
  // 캐싱 없이 그대로 네트워크로 통과시킵니다.
});
