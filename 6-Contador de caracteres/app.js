// $("textarea").keyup(function(){
// 	$(".counter").html($(this).val().length)
// 	if($(this).val().length > 20){
// 		$(".counter").addClass("error")
// 		$(this).addClass("error-textarea")
// 	}
// })

$("textarea").keyup(function(){
	$(".counter").html($(this).val().length)
	if($(this).val().length > 80){
		$(".counter").addClass("error counter")
		$(this).addClass("error textarea")
	}
})