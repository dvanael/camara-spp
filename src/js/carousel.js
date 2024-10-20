document.addEventListener('DOMContentLoaded', function () {
  const carouselList = document.querySelector('.carousel-list');
  const nextBtn = document.querySelector('.next-carousel');
  const prevBtn = document.querySelector('.prev-carousel');

  function scrollNext() {
    carouselList.scrollBy({
      left: carouselList.clientWidth,
      behavior: 'smooth'
    });
  }

  function scrollPrev() {
    carouselList.scrollBy({
      left: -carouselList.clientWidth,
      behavior: 'smooth'
    });
  }

  nextBtn.addEventListener('click', scrollNext);
  prevBtn.addEventListener('click', scrollPrev);
});