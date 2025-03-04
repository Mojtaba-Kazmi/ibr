// adsInterval.js (inside the ads folder)
export function setupAdsRotation() {
  const ads = document.querySelectorAll(".ads .card");
  let currentIndex = 0;

  function changeAd() {
    ads[currentIndex].classList.remove("fadeIn");
    ads[currentIndex].classList.add("fadeOut");

    currentIndex = (currentIndex + 1) % ads.length;

    ads[currentIndex].classList.remove("fadeOut");
    ads[currentIndex].classList.add("fadeIn");
  }

  setInterval(changeAd, 5000);
}
