document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
  
    let currentIndex = 0;
  
    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }
  
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  });
  