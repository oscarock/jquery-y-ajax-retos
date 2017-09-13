$("#input").keyup(function(){
	// console.log($(this).val())
	if($(this).val() === ""){
		$("h1").text("¿Cómo te llamas?")
	}else{
		$("h1").text("Hola " + $(this).val() + "!");
	}
})