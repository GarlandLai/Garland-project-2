//this code will run after everything loads
$(document).ready(function(){
  $("form#survey").submit(function(event));
  event.preventDefault();
  var hoursInput = $("#hours").val();

});
