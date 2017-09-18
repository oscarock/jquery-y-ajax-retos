$(".wrapper").on("click", function(){
  $.getJSON( "https://s3.amazonaws.com/makeitreal/countries.json", function( data ) {
    var items = [];
    var $table = $('<table></table>');
    $table.append("<tr><th>Code</th><th>Name</th><th>Flag</th></tr>")
    $.each(data, function(i, item) {
      var tr = $('<tr>').append(
        $('<td>').text(item.code),
          $('<td>').text(item.name),
          $('<td><img src="'+ item.flag_url +'">')
      ); 
      $table.append(tr);
    });
    $(".wrapper").append($table)
    $(".wrapper button").hide()
  });
})