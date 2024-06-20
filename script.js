document.addEventListener('DOMContentLoaded', () => {
  const carouselInner = document.querySelector('.carousel-inner');
  const items = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.dot');
  const prevButton = document.querySelector('.carousel-control.prev');
  const nextButton = document.querySelector('.carousel-control.next');
  let currentIndex = 0;

  const updateCarousel = (index) => {
      const offset = -index * 100; // Adjust the offset to match the current slide
      carouselInner.style.transform = `translateX(${offset}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
  };

  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
      updateCarousel(currentIndex);
  });

  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
      updateCarousel(currentIndex);
  });

  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          currentIndex = index;
          updateCarousel(currentIndex);
      });
  });

  updateCarousel(currentIndex); // Initialize carousel
});
