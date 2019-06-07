//this code will run after everything loads


//User Interface Logic
$(document).ready(function(){
  $("form#survey").submit(function(event){
    var hoursInput = $("#hours").val();
    var learnInput = $("#learning").val();
    var animalInput = $("input:radio[name=animal]:checked").val();
    var trueFalse Input = $("input:radio[name=trueFalse]:checked").val();

    
    event.preventDefault();
  });
});
