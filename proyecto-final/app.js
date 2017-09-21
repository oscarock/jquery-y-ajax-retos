var val = Math.floor(1000 + Math.random() * 9000);
console.log(val)
var number_load = val.toString().split("") 
// console.log(number_load)
 // console.log($.inArray("2", number_load)); //devuelve 2)
// number.forEach(function(element,index){
// console.log(index + " ---> " + element);

$("form").on("submit", function(e){
  e.preventDefault()
  var number_input = $("#number").val().split("")
  // console.log(number_load)
  // console.log(number_input)
  // var iguales = 0
 //  for(var i=0;i<number_load.length;i++)
	// {
	// 	for(var j=0;j<number_input.length;j++)
	// 	{
	// 		if(number_load[i]==number_input[j]){
	// 			console.log(iguales++);
			
	// 		}
	// 	}
	// }
	// var goodUsers = ["someuser1", "someuser2", "someuser3"];
	// var storedUsers = ["someuser1", "user", "user3"];
	// for(var numbers in number_load){
	//     if(number_input.indexOf(number_load[numbers])>-1){
	//        console.log('Se repite el numero : ' + number_load[numbers])
	//     }
	// }
	var sum_input_picas = 0
	var sum_input_fijas = 0
	// for(var numbers in number_load){
	//     if(number_input.indexOf(number_load[numbers])>-1){
	//     	// sum_input_picas - sum_input_fijas
	//     	sum_input_picas += number_load[numbers].length 
	//        	// sconsole.log('Se repite el numero : ' + number_load[numbers])
	//        	if(number_input.indexOf(number_load[numbers]) == 
	//        		number_load.indexOf(number_load[numbers])){
	//        		sum_input_picas = 0
	//        		sum_input_fijas += number_load[numbers].length 
	//        		// console.log("Fijas" + number_load[numbers]);
	//     	}
	//     }
	// }

	for(var i = 0; i < number_load.length; i++){
    for(var j = 0; j < number_input.length; j++){
        if(number_load[i] == number_input[j])
            if(i == j)
            	sum_input_fijas += number_load[i].length
                // console.log('Se repite el numero : ' + number_load[i] + ' en la posición '+ (i + 1))
            else
            	sum_input_picas += number_load[i].length
            	// console.log('Se repite el numero : ' + number_load[i] + ' pero su posicion no coincide ')
    }
 }
	console.log("Picas: " + sum_input_picas)
	console.log("Fijas: " + sum_input_fijas)
})