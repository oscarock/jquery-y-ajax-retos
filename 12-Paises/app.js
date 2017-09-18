var countries = '[{ "code": "CO", "name": "Colombia", "flag_url": "https://s3.amazonaws.com/makeitreal/co.gif" },' +
  '{ "code": "PE", "name": "Perú", "flag_url": "https://s3.amazonaws.com/makeitreal/pe.gif" },' +
  '{ "code": "EC", "name": "Ecuador", "flag_url": "https://s3.amazonaws.com/makeitreal/ec.gif" },' +
  '{ "code": "BO", "name": "Bolivia", "flag_url": "https://s3.amazonaws.com/makeitreal/bo.gif" }]';

$(".wrapper").on("click", function(){
	var response = $.parseJSON(countries);
  var $table = $('<table></table>');
	$table.append("<tr><th>Code</th><th>Name</th><th>Flag</th></tr>")
  $.each(response, function(i, item) {
      var tr = $('<tr>').append(
        $('<td>').text(item.code),
          $('<td>').text(item.name),
          $('<td><img src="'+ item.flag_url +'">')
      ); 
      $table.append(tr);
    });
    $(".wrapper").append($table)
    $(".wrapper button").hide()
})
