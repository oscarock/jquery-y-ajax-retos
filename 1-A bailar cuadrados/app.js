$('h2').hide(); // oculta el mensaje de error

// agrega 80 divs con clase square
for (var i=0; i < 80; i++) {
  $('body').append('<div class="square"></div>');
}

// enlaza el evento mouseenter a la función onMouseEnter
$('.square').on('mouseenter', onMouseEnter);

function onMouseEnter(e) {
  // cambia el cuadrado de color
  var color = 'rgb(48, 48, 48)';
  if ($(this).css('background-color') == color) {
    color = "white"
  }
  $(this).css('background-color', color);

  // hace la animación con el alto del cuadradado
  $(this).animate({ height: '50px' }, 500, function() {
    $(this).animate({ height: '100px' }, 2000); 
  });
}