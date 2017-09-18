$('ul.tabs li').click(function(){
  var tab_data = $(this).attr('data-tab')
  $('ul.tabs li').removeClass('active');
  $('.tabs-content div').removeClass('active');

  $(this).addClass('active');
  $("#" + tab_data).addClass('active');
})

//solucion plataforma
// jQuery.fn.tabs = function() {
//   this.on('click', '> li', function(e) {
//     e.preventDefault();

//     $('.tabs > li').removeClass('active');
//     $(this).addClass('active');

//     $('.tabs-content > div').removeClass('active');
//     var tabContent = $('> a', this).attr('href');
//     $(tabContent).addClass('active');
//   });
// }

// $('.tabs').tabs();