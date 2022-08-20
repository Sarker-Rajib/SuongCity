// codes for banner slider
{
  let swiper = new Swiper(".bannerSwiper", {
    loop: true,
    centeredslide: true,
    allowSlideNext: true,
    allowSlidePrev: true,
    allowTouchMove: true,
    autoplay: true,
    speed: 1500,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
// codes for house slider
{
  let swiper = new Swiper(".HouseSwiper", {
    loop: true,
    centeredslide: true,
    allowTouchMove: true,

    //  autoplay: true,
    slidesPerView: 3,
    spaceBetween: 60,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {

      320: {
        slidesPerView: 1,
        spaceBetween: 50
      },

      767: {
        slidesPerView: 2,
        spaceBetween: 50
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }
  });
}

// slider for houses page banner sectone
{
  let swiper = new Swiper(".tab-nav", {
    // loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {

      320: {
        slidesPerView: 2,
        // spaceBetween: 50
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 50
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 50
      }
    }
  });
  let swiper4s = new Swiper(".display-part", {
    loop: true,
    spaceBetween: 10,
    autoplay: true,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
}

// testimonial slider
{
  let swiper = new Swiper(".testimonialSlider", {
    slidesPerView: 4,
    spaceBetween: 40,

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {

      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      767: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });
}

// client say slider
{
  let swiper = new Swiper(".client-swiper", {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    allowTouchMove: true,
    speed: 1000,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {

      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      767: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
  });
}