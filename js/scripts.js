//Business Logic
function getLanguage(answerInput, hoursInput, learnInput, animalInput, trueFalse) {
  if (answerInput === "yes" && hoursInput === "1-7" && learnInput === "visual" && animalInput === "dog" && trueFalse === "true"){
    return "You should learn Go!"
  } else if (answerInput === "yes" && hoursInput === "1-7" && learnInput === "visual" && animalInput === "dog" && trueFalse === "false"){
    return "You should learn C#!"
  } else if (answerInput === "yes" && hoursInput === "1-7" && learnInput === "visual" && animalInput === "cat" && trueFalse === "true"){
    return "You should learn javascript"
  } else if (answerInput === "yes" && hoursInput === "1-7" && learnInput === "text" && animalInput === "dog" && trueFalse === "true"){
    return "You should learn Python!"
  } else if (answerInput === "yes" && hoursInput === "8+" && learnInput === "visual" && animalInput === "dog" && trueFalse === "true"){
    return "You should learn Ruby!"
  } else if (answerInput === "no" && hoursInput === "1" && learnInput === "visual" && animalInput === "dog" && trueFalse === "true"){
    return "You should learn C#!"
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
    console.log(answerInput)
    var hoursInput = $("#hours").val();
    console.log(hoursInput)
    var learnInput = $("#learning").val();
    console.log(learnInput)
    var animalInput = $("input:radio[name=animal]:checked").val();
    console.log(animalInput)
    var trueFalse = $("input:radio[name=trueFalse]:checked").val();
    console.log(trueFalse)
    var language = getLanguage(answerInput, hoursInput, learnInput, animalInput, trueFalse);
    console.log(language)
    var image = "<img src='img/' + language + '''alt='A picture of your language'>"
    console.log(image)

    $("#yourLanguage").show($);
    $("#yourLanguage p").append(language);
    event.preventDefault();
  });
});
