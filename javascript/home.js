let slideIndex = 0;

// Function to show slides automatically
function showSlides() {
  let slides = document.querySelector('.slides');
  let totalSlides = slides.children.length;

  slideIndex++;

  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }

  slides.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';

  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Start the slideshow
showSlides();