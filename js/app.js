/* #Header
  ======================================================= */
const header = document.querySelector('.header');

// Scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header-white');
  } else {
    header.classList.remove('header-white');
  }
});

if (window.scrollY > 50) {
  header.classList.add('header-white');
} else {
  header.classList.remove('header-white');
}

/* #Posts Slider
  ======================================================= */
const postsSliders = document.querySelectorAll('.posts-slider');

if (postsSliders) {
  postsSliders.forEach((slider) => {
    const sliderEl = slider.querySelector('.swiper');
    const nextArrow = slider.querySelector('.next');
    const prevArrow = slider.querySelector('.prev');

    new Swiper(sliderEl, {
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1.25
        },
        1024: {
          slidesPerView: 4
        }
      },
      navigation: {
        nextEl: nextArrow,
        prevEl: prevArrow,
      },
    });
  });
}