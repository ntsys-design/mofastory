// 메인 sns현황 대륙
$('.embassy_list ul li').on('click',function(){
  $('.embassy_list ul li').removeClass('on')
  $(this).addClass('on')
  })

//메인 sns현황 지도/목록 버튼
$('.list_tab ul li ').on('click',function(e){
  let idx=$(this).index()
  e.preventDefault()
  $('.list_tab ul li').removeClass('on')
  $(this).addClass('on')
  $('.embassy_list').hide()
  $('.embassy_list').eq(idx).show()
  
  })

// 메인 지도 Bg

$('.marker').mouseenter(function(){

let bgImg=$(this).attr('data-bg');

$('.map').css({'background':'url('+bgImg+')','background-repeat':'no-repeat','background-position':'center','background-size':'76%'})
$('.marker').removeClass('on')
$(this).addClass('on')

})
$('.marker').mouseleave(function(){
  $('.map').css({'background':'url(../common/images/sns_map.png)','background-repeat':'no-repeat','background-position':'center','background-size':'76%'})
})



// 메인 인기 콘텐츠 이달의 우수사례 탭
$('.tabmenu h3').on('click',function(e){
let idx=$(this).index()
e.preventDefault()
$('.tabmenu h3').removeClass('on')
$(this).addClass('on')
$('.content_wrap').hide()
$('.content_wrap').eq(idx).show()

})



// 인기 콘텐츠 슬라이드
var swiper = new Swiper(".pop_content", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
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
      slidesPerView: 3,
      spaceBetween: 20,
    },
    
    721: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
   


    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    
  }
});

// 최신 sns 탭메뉴
$('.new_tab ul li').on('click',function(){
$('.new_tab ul li').removeClass('on')
$(this).addClass('on')
})



// 최신 sns
$(document).ready(function() {

  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    masonry: {
      gutter: 32
    },  
  });

  var filterFns = {
    // // show if number is greater than 50
    // numberGreaterThan50: function() {
    //   var number = $(this).find('.number').text();
    //   return parseInt(number, 10) > 50;
    // },
    // // show if name ends with -ium
    // ium: function() {
    //   var name = $(this).find('.name').text();
    //   return name.match(/ium$/);
    // }
  };

  $('#filters').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    filterValue = filterFns[filterValue] || filterValue;
    $container.isotope({
      filter: filterValue
    });
  });


  $('.button-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });

  //****************************
  // Isotope Load more button
  //****************************
  var initShow = 12; //number of items loaded on init & onclick load more button
  var counter = initShow; //counter for load more button
  var iso = $container.data('isotope'); // get Isotope instance

  loadMore(initShow); //execute function onload

  function loadMore(toShow) {
    $container.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
      return item.element;
    });
    $(hiddenElems).addClass('hidden');
    $container.isotope('layout');

    //when no more to load, hide show more button
    if (hiddenElems.length == 0) {
      jQuery("#load-more").hide();
    } else {
      jQuery("#load-more").show();
    };

  }

  //append load more button
  $container.after('<button id="load-more"> 더보기</button>');

  //when load more button clicked
  $("#load-more").click(function() {
    if ($('#filters').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $('#filters').data('clicked', false);
    } else {
      counter = counter;
    };

    counter = counter + initShow;

    loadMore(counter);
  });
  

  //when filter button clicked
  $("#filters").click(function() {
    $(this).data('clicked', true);

    loadMore(initShow);
  });

  
  
});

// 메인 모달
// $(window).scroll(function () {
//   let scrTop = $(this).scrollTop()
//   $('.element-item').click(function(){
//   $('.modal').fadeIn()
//   $('.modal').css({'top' : scrTop + 'px'})
//   $('body').css({'overflow' : 'hidden'})
//   })
  
//   $('.close').click(function(){
//   $('.modal').fadeOut()
//   $('body').css({'overflow-y' : 'scroll'})
//   })
// })

// top버튼
$(window).scroll(function () {
  let scrTop = $(this).scrollTop()
  if(scrTop >200){
    $('.top_btn').show();
  }else{
    $('.top_btn').hide();
  }
})
  
//---------------------서브----------------------------

// 대륙별 sns 현황 셀렉트박스

$('.select_box li').on('click',function(){
  let idx=$(this).index()
  let active=$(this).children('button').hasClass('up_btn');
  if(active){
    $('.option_container .option_wrap').hide()
    $(this).children('button').removeClass('up_btn');
    $('.dim').removeClass('on')
  }else{
$('.select_box li button').removeClass('up_btn')
  $(this).children('button').addClass('up_btn')
  $('.option_container .option_wrap').hide()
  $('.option_container .option_wrap').eq(idx).show()
  $('.dim').addClass('on')
  }
  
})

// 셀렉트박스 옵션 
$('.continent_option .option li a').on('click',function(){
  $('.continent_option .option li a').closest('li').removeClass('on')
  $(this).closest('li').addClass('on')


})
$('.office_option .option li a').on('click',function(){
  $('.office_option .option li a').closest('li').removeClass('on')
  $(this).closest('li').addClass('on')


})

// 공관소개 이미지 슬라이드
var swiper2 = new Swiper(".office_slide", {
  
  navigation: {
    nextEl: ".office_slide .swiper-button-next",
    prevEl: ".office_slide .swiper-button-prev",
  },
  
});