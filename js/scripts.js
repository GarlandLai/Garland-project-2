

//User Interface Logic
$(document).ready(function(){
  $("form#survey").submit(function(event){
    var answerInput = $("inout:radio[name=answer]:checked").val();
    var hoursInput = $("#hours").val();
    var learnInput = $("#learning").val();
    var animalInput = $("input:radio[name=animal]:checked").val();
    var trueFalse = $("input:radio[name=trueFalse]:checked").val();
    var language = yourLanguage = (hoursInput, learnInput, animalInput, trueFalse )
    var image = "<img src='img/' + language + ''alt='A picture of your language'"


    event.preventDefault();
  });
});
