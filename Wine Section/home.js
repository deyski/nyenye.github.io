let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

setInterval(function() {
    var text = document.querySelector('.color-changing-text');
    var styles = window.getComputedStyle(text);
    var color = styles.getPropertyValue('color');

    // Check the current color and set the next color
    if (color === 'rgb(255, 0, 0)') {
      text.style.color = 'rgb(0, 128, 0)'; // Green
    } else if (color === 'rgb(0, 128, 0)') {
      text.style.color = 'rgb(0, 0, 255)'; // Blue
    } else {
      text.style.color = 'rgb(255, 0, 0)'; // Red
    }
  }, 3000);