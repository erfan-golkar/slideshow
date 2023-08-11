let slideIndex = 1;
showSlide(slideIndex);

function changeSlides(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  let i, slides, slidesLen, bullets, bulletsLen;
  slides = document.getElementsByClassName("slide");
  slidesLen = slides.length;
  bullets = document.getElementsByClassName("bullet");
  bulletsLen = bullets.length;

  if (n > slidesLen) {slideIndex = 1}
  if (n < 1) {slideIndex = slidesLen}

  for (i = 0; i < slidesLen; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < bulletsLen; i++) {
    bullets[i].className = bullets[i].className.replace(" active-bullet", "");
  }

  slides[slideIndex-1].style.display = "block";
  bullets[slideIndex-1].className += " active-bullet";
}

// auto slideshow
let autoSlideIndex = 0;
autoSliding();

function autoSliding() {
  let i, slides, slidesLen, bullets, bulletsLen;
  slides = document.getElementsByClassName("slide");
  slidesLen = slides.length;
  bullets = document.getElementsByClassName("bullet");
  bulletsLen = bullets.length;

  autoSlideIndex++;
  
  if (autoSlideIndex > slidesLen) {autoSlideIndex = 1}
  
  for (i = 0; i < slidesLen; i++) {
    slides[i].style.display = "none";
    bullets[i].className = bullets[i].className.replace(" active-bullet", "");
  }
  
  slides[autoSlideIndex-1].style.display = "block";
  bullets[autoSlideIndex-1].className += " active-bullet";

  setTimeout(autoSliding, 5000);
}