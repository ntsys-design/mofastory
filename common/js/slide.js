// 인기 콘텐츠 슬라이드
// 0317 루프 삭제
var swiper = new Swiper(".swiper.pop_content", {
    slidesPerView: 2.2,
    spaceBetween: 15.3,
  
    // loop: true,
    // loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      501: {
        slidesPerView: 3.5,
        spaceBetween: 15.3,
      },
  
      721: {
        slidesPerView: 4,
        spaceBetween: 15.3,
      },
  
  
  
      1080: {
        slidesPerView: 5,
        spaceBetween: 32,
      },
  
    }
  });

  // 이달의 우수사례 
 // 모바일에서만 슬라이드
 var ww = $(window).width();
 var swiperAw = undefined;

 function initSwiper() {

   if (ww <= 720 && swiperAw == undefined) {
     swiperAw = new Swiper(".monthly_swiper", {
       slidesPerView: 1.2,
       spaceBetween: 16,
       watchSlidesProgress: true, setWrapperSize: true,
      
       // pagination: {
       //     el: '.monthly_swiper .swiper-pagination',
       //     clickable: true,
       // },
       // navigation: {
       //     prevEl: '.swiper-button-prev',
       //     nextEl: '.swiper-button-next',
       // },
       breakpoints: {
        401: {
          slidesPerView: 1.5,
          spaceBetween: 16,
        },
        501: {
          slidesPerView: 1.8,
          spaceBetween: 16,
        },

      }
     });
   } else if (ww > 720 && swiperAw != undefined) {
     swiperAw.destroy();
     swiperAw = undefined;
   }
 }

 initSwiper();

 $(window).on('resize', function () {
   ww = $(window).width();
   initSwiper();
 });

 // 공관소개페이지 이미지 슬라이드
var swiper2 = new Swiper(".office_slide", {

    navigation: {
      nextEl: ".slide_btn .swiper-button-next",
      prevEl: ".slide_btn .swiper-button-prev",
    },
  
  });