$('.tabmenu h3').click(function(e){
let idx=$(this).index()
e.preventDefault()
$('.tabmenu h3').removeClass('on')
$(this).addClass('on')
$('.content_wrap').hide()
$('.content_wrap').eq(idx).show()



})

var swiper = new Swiper(".pop_content", {
  slidesPerView: 5,
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
});





$(document).ready(function() {

  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    // layoutMode: 'fitRows',
    masonry: {
      gutter: 8
    },
    
  });

  // filter functions
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

  // bind filter button click
  $('#filters').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $container.isotope({
      filter: filterValue
    });
  });


  // change is-checked class on buttons
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
  var initShow = 5; //number of items loaded on init & onclick load more button
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

$(window).scroll(function () {
  let scrTop = $(this).scrollTop()
  $('.element-item').click(function(){
  $('.modal').fadeIn()
  $('.modal').css({'top' : scrTop + 'px'})
  $('body').css({'overflow' : 'hidden'})
  })
  
  $('.close').click(function(){
  $('.modal').fadeOut()
  $('body').css({'overflow' : 'scroll'})
  })
})
  
