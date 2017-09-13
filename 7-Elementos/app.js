var element_cont = 0
$("#add").on("click",function(){
	$(".elements").append("<li>Element "+ element_cont++ + "</li>")
})	

$(".elements").on("click", "li" ,function(){
	if($(this).hasClass("marked")) {
		$(this).removeClass("marked")
	}else{
		$(this).addClass("marked")
	}
})