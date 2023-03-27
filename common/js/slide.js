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

  
 // 공관소개페이지 이미지 슬라이드
var swiper2 = new Swiper(".office_slide", {
  pagination: {
    el: ".office_slide .swiper-pagination",
  },
    navigation: {
      nextEl: ".slide_btn .swiper-button-next",
      prevEl: ".slide_btn .swiper-button-prev",
    },
  
  });
  
// 모바일 공관소개페이지 이미지 슬라이드
var swiper3 = new Swiper(".m_office_slide", {
  pagination: {
    el: ".slide_pg .swiper-pagination",
  },
    navigation: {
      nextEl: ".slide_btn .swiper-button-next",
      prevEl: ".slide_btn .swiper-button-prev",
    },
  
  });