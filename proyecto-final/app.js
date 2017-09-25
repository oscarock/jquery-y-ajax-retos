var val = Math.floor(1000 + Math.random() * 9000);
console.log(val)
var number_load = val.toString().split("") 

$("form").on("submit", function(e){
	console.log($("#number").val().repeat(0))
  e.preventDefault()
  e.stopPropagation();

  if($("#number").val() === ""){
  	$("#number").addClass("is-invalid")
  	$(".error-text").show().text("El Campo no puede estar Vacio.")
  }else if($("#number").val().length > 4){
  	$("#number").addClass("is-invalid")
  	$(".error-text").show().text("No puedes ingresar mas de 4 numeros.")
  }else if($("#number").val().length < 4){
  	$("#number").addClass("is-invalid")
  	$(".error-text").show().text("No puedes ingresar menos de 4 numeros.")
  }else if($("#number").val().match(/^(.)\1+$/g)){
  	$("#number").addClass("is-invalid")
  	$(".error-text").show().text("No puedes repetir numeros.")			
  }else if($("#number").val().length === 4){
  	$("#number").removeClass("is-invalid").addClass("is-valid")
  	$(".error-text").hide()
  }

   // var expression = /[0-9]{4}/.exec($("#number").val())

   //  if(expression != null){
   //      return true
   //  }else{
   //      return false
   //  }
 //  var number_input = $("#number").val().split("")
	// var sum_input_picas = 0
	// var sum_input_fijas = 0

	// for(var i = 0; i < number_load.length; i++){
 //    for(var j = 0; j < number_input.length; j++){
 //      if(number_load[i] == number_input[j]){
 //        if(i === j){
 //        	sum_input_fijas += number_load[i].length
 //        	// result = "Fijas: " + sum_input_fijas
 //            // console.log('Se repite el numero : ' + number_load[i] + ' en la posición '+ (i + 1))
 //        }else{
 //        	sum_input_picas += number_load[i].length
 //        	// result = "Picas: " + sum_input_picas
 //        	// console.log('Se repite el numero : ' + number_load[i] + ' pero su posicion no coincide ')
	// 			}
 //  		}		
 //    }
 // 	}
 // 	// return result
	// console.log("Picas: " + sum_input_picas)
	// console.log("Fijas: " + sum_input_fijas)
	// if(sum_input_fijas === 4){
	// 	$('#Mymodal').modal()
	// }

	// $("#tabla-history").append("<tr><td>"+ $("#number").val() +"</td><td>"+ sum_input_picas +"</td><td>"+ sum_input_fijas +"</td></tr>")

	// $("#btn-play").on("click",function(){
	// 	window.location.reload()
	// })
})