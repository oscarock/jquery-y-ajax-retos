$(document).keypress(function (e) {
  if (e.which == 13) {
  	e.preventDefault()
   	$(".todo").append("<li>"+ $("#new-task").val() +"</li>")
   	$("#new-task").val("")
  }
});
