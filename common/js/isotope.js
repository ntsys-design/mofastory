alert('ddd')
$grid.isotope({filter:'.fb'})

$('.new_tab ul li').click( function(e) {
  alert('ddd')
e.preventDefault()
$('.new_tab ul li').removeClass('on')
$(this).addClass('on')      

let filterValue = $(this).find('a').attr('data-filter');
$grid.isotope({ filter: filterValue });



// let idx=$(this).index()
// $('.drink ul li').removeClass('on')
// $('.drink ul li').eq(idx).addClass('on')
});
