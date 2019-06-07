//Business Logic


//User Interface Logic
$(document).ready(function(){
  $("form#survey").submit(function(event){
    var answerInput = parseInt($("input:radio[name=answer]:checked").val());
    var hoursInput = parseInt($("#hours").val());
    var learnInput = parseInt($("#learning").val());
    var animalInput = parseInt($("input:radio[name=animal]:checked").val());
    var trueFalse = parseInt($("input:radio[name=trueFalse]:checked").val());
    var value = numValue(answerInput, hoursInput, learnInput, animalInput, trueFalse )
    var image = "<img src='img/' + language + ''alt='A picture of your language'"
    $("#yourLanguage").remove();
    $("#yourLanguage").append(image);
    event.preventDefault();
  });
});
