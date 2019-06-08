// Business Logic

function getLanguage(totalValue){
  if (totalValue === 1 || totalValue === 2){
    return "python.jpg"
  } else if (totalValue === 3 || totalValue === 4) {
      return "c.png"
  } else if (totalValue === 5 || totalValue === 6) {
      return "ruby.jpg"
  } else if (totalValue === 7 || totalValue === 8) {
      return "go.png"
  } else if (totalValue === 9 || totalValue === 10) {
      return "javascript.png"
    } else {
       return "shrug.png"
    }
}

// function getLanguage(answerInput, hoursInput, learnInput, animalInput, trueFalse) {
//   if (answerInput === "yes" && hoursInput === "1-7" && learnInput === "visual" && animalInput === "dog" && trueFalse === "true"){
//     return "go.png"
//     } else if (answerInput === "yes" && hoursInput === "1-7" && learnInput === "visual" && animalInput === "dog" && trueFalse === "false"){
//         return "C.png"
//     } else if (answerInput === "yes" && hoursInput === "1-7" && learnInput === "visual" && animalInput === "cat" && trueFalse === "true"){
//         return "javascript.png"
//     } else if (answerInput === "yes" && hoursInput === "1-7" && learnInput === "text" && animalInput === "dog" && trueFalse === "true"){
//         return "python.jpg"
//     } else if (answerInput === "yes" && hoursInput === "8+" && learnInput === "visual" && animalInput === "dog" && trueFalse === "true"){
//         return "Ruby.jpg"
//     } else if (answerInput === "no" && hoursInput === "1-7" && learnInput === "visual" && animalInput === "dog" && trueFalse === "true"){
//         return "C.png"
//     } else if (answerInput === "yes" && hoursInput === "1-7" && learnInput === "visual" && animalInput === "cat" && trueFalse === "false"){
//         return "go.png"
//     } else if (answerInput === "yes" && hoursInput === "1-7" && learnInput === "text" && animalInput === "cat" && trueFalse === "false"){
//         return "python.jpg"
//     } else if (answerInput === "yes" && hoursInput === "8+" && learnInput === "visual" && animalInput === "cat" && trueFalse === "false"){
//         return "C.png"
//     } else if (answerInput === "no" && hoursInput === "1-7" && learnInput === "visual" && animalInput === "cat" && trueFalse === "false"){
//         return "javascript.png"
//     } else if (answerInput === "yes" && hoursInput === "1-7" && learnInput === "visual" && animalInput === "cat" && trueFalse === "false"){
//         return "ruby.jpg"
//     } else if (answerInput === "yes" && hoursInput === "8+" && learnInput === "text" && animalInput === "cat" && trueFalse === "false"){
//         return "go.png"
//     } else if (answerInput === "no" && hoursInput === "1-7" && learnInput === "text" && animalInput === "cat" && trueFalse === "false"){
//         return "C.png"
//     } else if (answerInput === "no" && hoursInput === "8+" && learnInput === "text" && animalInput === "cat" && trueFalse === "false"){
//         return "go.png"
//     } else {
//         return "python.jpg"
//     }
//   }

//User Interface Logic
$(document).ready(function(){
  $("form#survey").submit(function(event){
    var nameInput = $("#name").val();
    console.log(nameInput)
    var answerInput = parseInt($("input:radio[name=answer]:checked").val());
    console.log(answerInput)
    var hoursInput =  parseInt($("#hours").val());
    console.log(hoursInput)
    var learnInput =  parseInt($("#learning").val());
    console.log(learnInput)
    var animalInput =  parseInt($("input:radio[name=animal]:checked").val());
    console.log(animalInput)
    var trueFalse =  parseInt($("input:radio[name=trueFalse]:checked").val());
    console.log(trueFalse)

    var totalValue = (answerInput + hoursInput + learnInput + animalInput + trueFalse);
    console.log(totalValue)

    var language = getLanguage(totalValue);
// console.log(language)
    var image = '<img src="img/' + language + '" alt="picture of your match">';
    console.log(image)


//Could not get name to remove with each submit..
    $("#yourLanguage").show();
    $("#yourLanguage img").remove();
    // $("#yourLanguage span").remove();
    $("span").append(nameInput);
    $("#yourLanguage h3").append(image);
    event.preventDefault();
  });
});
