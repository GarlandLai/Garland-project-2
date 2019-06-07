//Business Logic
function getLanguage(answerInput, hoursInput, learnInput, animalInput, trueFalse) {
  if (answerInput === "yes") {
    if (hoursInput === "1") {
      if (learnInput === "visual") {
        if (animalInput === "dog") {
          if (trueFalse === "True"){
            return C.png;
          } else {
            return javascript.png
          }
        } else if (animal === "cat"){
          if ()
        }
        }
      }
    }
  }


//User Interface Logic
$(document).ready(function(){
  $("form#survey").submit(function(event){
    var answerInput =$("input:radio[name=answer]:checked").val();
    var hoursInput = $("#hours").val();
    var learnInput = $("#learning").val();
    var animalInput = $("input:radio[name=animal]:checked").val();
    var trueFalse = $("input:radio[name=trueFalse]:checked").val();
    var language = getLanguage(answerInput, hoursInput, learnInput, animalInput, trueFalse )
    var image = "<img src='img/' + language + ''alt='A picture of your language'"
    $("#yourLanguage").remove();
    $("#yourLanguage").append(image);
    event.preventDefault();
  });
});
