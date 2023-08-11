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