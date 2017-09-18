$("#load-cars").on("click", function(){
  $.getJSON("https://s3.amazonaws.com/makeitreal/cars.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      var turbo = (val.turbo === true) ? "Si" : "No"
      $(".cars").append("<div class='row car'>"+
        "<div class='col-sm-5 col-md-4'><img src='"+ val.imageUrl +"' class='img-responsive img-thumbnail'></div>" +
          "<div class='col-sm-7 col-md-8'>" +
            "<h3>"+ val.name +"<small> "+ val.released +"</small></h3>"+
            "<div class='row specs'>"+
              "<div class='col-xs-3 text-center'>" +
                "<span class='spec-value'>"+ val.power +" hp</span>" +
                "<span class='spec-label'>Potencia</span>" +
              "</div>" +
              "<div class='col-xs-3 text-center'>" +
                "<span class='spec-value'>"+ val.weight +" kg</span>" +
                "<span class='spec-label'>Peso</span>" +
              "</div>" +
              "<div class='col-xs-3 text-center'>" +
                "<span class='spec-value'>"+ turbo +"</span>" +
                "<span class='spec-label'>Turbo</span>" +
              "</div>" +
              "<div class='col-xs-3 text-center'>" +
                "<span class='spec-value'>"+ val.speed +" km/h</span>" +
                "<span class='spec-label'>Velocidad Max</span>" +
              "</div>" +
            "</div>"
          + "</div>"  
        + "</div>")
    });
  });
  $(this).hide()  
})
