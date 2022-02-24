/* #Header
  ======================================================= */
const header = document.querySelector('.header');
const body = document.querySelector('body');

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

/* #Search Popup
  ======================================================= */
const headerSearchBtn = document.querySelector('.header-search a');
const headerSearchClose = document.querySelector('.search-form .close');
const headerSearchInput = document.querySelector('.search-form input');

if (headerSearchBtn) {
  headerSearchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    header.classList.add('show-search');
    body.classList.add('no-scroll');
  });

  headerSearchClose.addEventListener('click', (e) => {
    e.preventDefault();

    header.classList.remove('show-search');
    body.classList.remove('no-scroll');
  });

  headerSearchInput.addEventListener('input', (e) => {
    if (headerSearchInput.value !== '') {
      header.classList.add('show-search-results');
    } else {
      header.classList.remove('show-search-results');
    }
  });
}

/* #Posts Slider
  ======================================================= */
const postsSliders = document.querySelectorAll('.posts-slider');

if (postsSliders) {
  postsSliders.forEach((postSlider) => {
    const sliders = postSlider.querySelectorAll('.slider');

    sliders.forEach((slider) => {
      const sliderEl = slider.querySelector('.swiper');
      const nextArrow = slider.querySelector('.next');
      const prevArrow = slider.querySelector('.prev');
  
      if (slider.classList.contains('posts-slider-regular')) {
        new Swiper(sliderEl, {
          breakpoints: {
            0: {
              slidesPerView: 1.25
            },
            1024: {
              slidesPerView: 4.6
            }
          },
          navigation: {
            nextEl: nextArrow,
            prevEl: prevArrow,
          },
        });
      } else {
        new Swiper(sliderEl, {
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
      }
    });


  });
}

/* #Favorites
  ======================================================= */
if (document.querySelector('.favorites .tab-navigation .swiper')) {
  new Swiper(".favorites .tab-navigation .swiper", {
    slidesPerView: "auto",
  });
}