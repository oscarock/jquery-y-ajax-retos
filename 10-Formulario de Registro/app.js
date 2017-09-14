$('form').on('submit', function(e) {
  e.preventDefault(); // previene la acción por defecto (enviar el formulario)
   if ($("#username").val() === "") {
  	$(".username").addClass("has-error")
  	$(".username p").html("Campo usuario no pueder estar vacio.")
  }else if(/\s/.test($("#username").val())){
  	$(".username").addClass("has-error")
  	$(".username p").html("No puede tener espacio en blanco.")
  }else{
  	$(".username").removeClass("has-error")
  	$(".username p").html("")
  }

  if($("#password").val() === ""){
  	$(".password").addClass("has-error")
  	$(".password p").html("Campo password no pueder estar vacio.")
  }else if($("#password").val().length < 6 || $("#password").val().length > 40){
  	$(".password").addClass("has-error")
  	$(".password p").html("el numero de caracteres invalido (min:6 a max:40 caracteres).")
  }else{
  	$(".password").removeClass("has-error")
  	$(".password p").html("")
  }
 	
  if($("#terms").is(':checked') === false){
  	$(".terms-checkbox").addClass("has-error")
  }else{
  	$(".terms-checkbox").removeClass("has-error")
  }
});
