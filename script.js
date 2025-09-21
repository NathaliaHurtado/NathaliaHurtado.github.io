// Simple auto-scroll carousel
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  if (carousel) {
    let scrollAmount = 0;
    setInterval(() => {
      scrollAmount += 270;
      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
      }
      carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }, 3000);
  }
});
