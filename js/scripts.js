//Business Logic
function getLanguage(answerInput, hoursInput, learnInput, animalInput, trueFalse) {
  if (answerInput === "yes" && hoursInput === "1" && learnInput === "visual" && animalInput === "dog" && trueFalse === "true"){
    return "good job!"
  } else if (answerInput === "yes" && hoursInput === "1" && learnInput === "visual" && animalInput === "dog" && trueFalse === "false"){
    return go.png
  } else if (answerInput === "yes" && hoursInput === "1" && learnInput === "visual" && animalInput === "cat" && trueFalse === "true"){
    return javascript.png
  } else if (answerInput === "yes" && hoursInput === "1" && learnInput === "text" && animalInput === "dog" && trueFalse === "true"){
    return python.jpg
  } else if (answerInput === "yes" && hoursInput === "2" && learnInput === "visual" && animalInput === "dog" && trueFalse === "true"){
    return ruby.jpg
  } else if (answerInput === "no" && hoursInput === "1" && learnInput === "visual" && animalInput === "dog" && trueFalse === "true"){
    return c.png
  }
}




  //   if (hoursInput === "1") {
  //     if (learnInput === "visual") {
  //       if (animalInput === "dog") {
  //         if (trueFalse === "True"){
  //           return C.png;
  //         } else {
  //           return javascript.png
  //         }
  //       } else if (animal === "cat"){
  //           return go.png
  //         }
  //         if (trueFalse === true) {
  //           return ruby.jpg
  //         } else { //trueFalse === false
  //           return python
  //         }
  //       } else if (learnInput === "text"){
  //         if (trueFalse === true) {
  //           return go.png
  //         }  else { //trueFalse === false
  //           return ruby.png
  //         }
  //       } else if (hoursInput === "2"){
  //           return javascript.jpg
  //         }
  //       if (trueFalse === true) {
  //         return go.png
  //         } else { //trueFalse === false
  //         return
  //
  //
  //       }if (answerInput === "no"){
  //       if (trueFalse === true) {
  //         return javascript.png
  //     } else { //trueFalse === false
  //   }
  //       }
  //     }
  //   }
  // }


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
