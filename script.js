const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const slideWidth = slides[0].offsetWidth;
let slideIndex = 0;

function moveSlider() {
  slider.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

setInterval(() => {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  moveSlider();
}, 3000);
