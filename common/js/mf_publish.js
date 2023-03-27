// 메인 sns현황 대륙
$('.embassy_list ul li').on('click', function () {
  $('.embassy_list ul li').removeClass('on')
  $(this).addClass('on')
})

// window 720이하 지도 hide
$(window).resize(function(){
let win=$(this).width()
if(win<721){
  $('.embassy_list:first-child').hide()
  $('.embassy_list:last-child').show()
}else{
  if($('.list_tab ul li:first-child').hasClass('on')){
    $('.embassy_list:first-child').show()
    $('.embassy_list:last-child').hide()
  }else{
    $('.embassy_list:first-child').hide()
  }
  
}

})
//메인 sns현황 지도/목록 버튼
$('.list_tab ul li ').on('click', function (e) {
  let idx = $(this).index()
  e.preventDefault()
  $('.list_tab ul li').removeClass('on')
  $(this).addClass('on')
  $('.embassy_list').hide()
  $('.embassy_list').eq(idx).show()

})



// 메인 지도 Bg

$('.marker').mouseenter(function () {

  let bgImg = $(this).attr('data-bg');

  $('.map').css({ 'background': 'url(' + bgImg + ')', 'background-repeat': 'no-repeat', 'background-position': 'center', 'background-size': '76%' })
  $('.marker').removeClass('on')
  $(this).addClass('on')

})
$('.marker').mouseleave(function () {
  $('.map').css({ 'background': 'url(../common/images/sns_map.png)', 'background-repeat': 'no-repeat', 'background-position': 'center', 'background-size': '76%' })
})



// 메인 인기 콘텐츠 이달의 우수사례 탭
$('.tabmenu h3').on('click', function (e) {
  let idx = $(this).index()
  e.preventDefault()
  $('.tabmenu h3').removeClass('on')
  $(this).addClass('on')
  $('.content_wrap').hide()
  $('.content_wrap').eq(idx).show()

})



//  sns 탭메뉴 0309 수정
$('.sns_tab ul li').on('click', function () {
  $('.sns_tab ul li').removeClass('on')
  $(this).addClass('on')
})



// 최신 sns, 통합검색 상세 페이지 isotope
$(document).ready(function () {

  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    masonry: {
      gutter: 32,
    horizontalOrder: true,

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

  $('#filters').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    filterValue = filterFns[filterValue] || filterValue;
    $container.isotope({
      filter: filterValue
    });
  });


  $('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });

  //****************************
  // Isotope Load more button
  //****************************
  var initShow = 12;
  var counter = initShow;
  var iso = $container.data('isotope');

  loadMore(initShow);

  function loadMore(toShow) {
    $container.find(".hidden").removeClass("hidden");

    
    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function (item) {
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
  $("#load-more").click(function () {
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
  $("#filters").click(function () {
    $(this).data('clicked', true);

    loadMore(initShow);
  });

// element-item 개수가 12개 이하일때 더보기 버튼 hide
  var element=$('.isotope .element-item').length
  //console.log(element)
  if (element < 12) {
    $("#load-more").hide();
  } else {
    $("#load-more").show();
  };
});


$(document).ready(function(){
let wd=$(window).width()
console.log(wd)
  if(wd>721){
      $('.top_btn').removeClass('hide');
  }else{
    $('.top_btn').addClass('hide');
  }
})

// top버튼 모바일 hide
$(window).resize(function(){
  let wwd=$(this).width()
  console.log(wwd)
    if(wwd>721){
        $('.top_btn').removeClass('hide');
    }else{
      $('.top_btn').addClass('hide');
    }
  })
// top버튼 스크롤 200이상이면 show 200이하 hide
$(window).scroll(function () {
 
  let scrTop = $(this).scrollTop()
  if (scrTop > 200) {
    $('.top_btn').show();
  } else {
    $('.top_btn').hide();
  }
})


// top버튼 클릭시 맨위로 이동
$('.top_btn').click(function(e) {
  e.stopPropagation()
  $('html, body').animate({
      scrollTop : 0
  }, 400);
  return false;
});


//---------------------서브----------------------------

// 대륙별 sns 현황 셀렉트박스

$('.select_box li').on('click', function (e) {
  let idx = $(this).index()
  let active = $(this).children('button').hasClass('up_btn');
  e.stopPropagation()
  if (active) {
    $('.option_container .option_wrap').hide()
    $(this).children('button').removeClass('up_btn').attr('title','열기');
    $('.dim').removeClass('on')
  } else {
    $('.select_box li button').removeClass('up_btn')
    $(this).children('button').addClass('up_btn').attr('title','닫기')
    $('.option_container .option_wrap').hide()
    $('.option_container .option_wrap').eq(idx).show()
    $('.dim').addClass('on')  
  }
})

// 셀렉트박스 옵션 -대륙명
$('.continent_option .option li a').on('click', function (e) {
  e.stopPropagation()
  $('.continent_option .option li a').closest('li').removeClass('on')
  $(this).closest('li').addClass('on')
})
// 셀렉트박스 옵션 -공관명
$('.office_option .option li a').on('click', function (e) {
  e.stopPropagation()
  $('.office_option .option li a').closest('li').removeClass('on')
  $(this).closest('li').addClass('on')
})

// body 클릭시 옵션 닫힘
$('body').on('click',function(){
  let up_btn = $('.select_box li button').hasClass('up_btn');
  if(up_btn){
    $('.option_container .option_wrap').hide()
    $('.select_box li button').removeClass('up_btn').attr('title','열기');
    $('.dim').removeClass('on')
  }
})



// 통합검색 페이지 전체 탭 
$('.sch_sns_list').isotope({
  itemSelector: '.element-item',
  masonry: {
    gutter: 32,
    horizontalOrder: true,
  }
});


// 검색 결과 항목 선택
$('.sch_continent li').on('click', function () {
  $('.sch_continent li').removeClass('on')
  $(this).addClass('on')
  
})

// 모바일 통합검색 검색기간
$('ul.sch_period li button').on('click',function(){
  $('ul.sch_period li button').removeClass('on')
  $(this).addClass('on')
})
// 모바일 통합검색 정렬순서
$('ul.order li').on('click',function(){
  $('ul.order li').removeClass('on')
  $(this).addClass('on')
})

// 720 이하 옵션
$(window).resize(function(){
  let wwd=$(this).width()
  console.log(wwd)
    if(wwd>721){
      
    }else{
      $('.select_box li button').removeClass('up_btn')
      $('.option_container .option_wrap').hide();
      $('.dim').removeClass('on')
    }
  })