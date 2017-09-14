$("form").on("submit", function(e){
  e.preventDefault()
  console.log($("#first-name").val())
  console.log($("#last-name").val())
  var check = $("#confirmed").is(':checked') ? $("#confirmed").val() : ""
  $(".table").append("<tr><td>"+ $("#first-name").val() +"</td><td>"+ $("#last-name").val() +"</td><td>"+ $("#mobile-number").val() +"</td><td>"+ check +"</td></tr>")
  $('form')[0].reset();
  $('#new-guest').modal('hide');
})