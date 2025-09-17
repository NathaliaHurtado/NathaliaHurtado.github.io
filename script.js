let slideIndex = 0;
function showSlides() {
  let slides = document.querySelectorAll('.carousel img');
  slides.forEach(slide => slide.classList.remove('active'));
  slideIndex++;
  if(slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex-1].classList.add('active');
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
window.addEventListener('load', showSlides);
