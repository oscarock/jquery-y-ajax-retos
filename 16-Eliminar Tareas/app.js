$(".todo").on("click", "li" ,function(){
	$(this).appendTo(".done")
})

$(".done").on("click", "li", function(){
	$(this).appendTo(".todo")
})

$(".delete").on("click", function(e){
	e.stopPropagation(); //evita que el evento se propague al elemento padre.
	$(this).parent().remove()
})