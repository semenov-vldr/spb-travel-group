new Swiper('.event-header__slider', {
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // Откл функционала, если слайдов меньше, чем нужно
  watchOverflow: true,

  //centeredSlides: true,

  slidesPerView: 1,

  effect: "fade",

  // Отступ между слайдами
  spaceBetween: 16,

  //slideClass: 'event-header__slide',

  // Стартовый слайд
  initialSlide: 0,

  loop: true,



});
