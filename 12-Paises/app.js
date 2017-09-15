var countries = '[{ "code": "CO", "name": "Colombia", "flag_url": "https://s3.amazonaws.com/makeitreal/co.gif" },' +
  '{ "code": "PE", "name": "Perú", "flag_url": "https://s3.amazonaws.com/makeitreal/pe.gif" },' +
  '{ "code": "EC", "name": "Ecuador", "flag_url": "https://s3.amazonaws.com/makeitreal/ec.gif" },' +
  '{ "code": "BO", "name": "Bolivia", "flag_url": "https://s3.amazonaws.com/makeitreal/bo.gif" }]';

$(".wrapper").on("click", function(){
	var response = $.parseJSON(countries);
	$(".wrapper").append("<table border='1'><tr><th>Code</th><th>Name</th><th>Flag</th></tr></table>")
    $.each(response, function(i, item) {
        var tr = $('<tr>').append(
        	$('<td>').text(item.code),
            $('<td>').text(item.name),
            $('<td><img src="'+ item.flag_url +'">')
        );
        console.log(tr.html());
        // $tr.wrap('.wrapper').html();
        $(".wrapper").append(tr)
        $(".wrapper button").hide()
    });
})

