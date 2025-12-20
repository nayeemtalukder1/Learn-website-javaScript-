var swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  speed: 500,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 6,
    },
    640: {
      slidesPerView: 12,
    }
  }
});
