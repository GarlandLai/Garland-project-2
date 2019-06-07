//Business Logic
function getLanguage(answerInput, hoursInput, learnInput, animalInput, trueFalse) {
  if (answerInput === "yes" && hoursInput === "1-7" && learnInput === "visual" && animalInput === "dog" && trueFalse === "true"){
    return "go.png"
  } else if (answerInput === "yes" && hoursInput === "1-7" && learnInput === "visual" && animalInput === "dog" && trueFalse === "false"){
    return "C.png"
  } else if (answerInput === "yes" && hoursInput === "1-7" && learnInput === "visual" && animalInput === "cat" && trueFalse === "true"){
    return "javascript.png"
  } else if (answerInput === "yes" && hoursInput === "1-7" && learnInput === "text" && animalInput === "dog" && trueFalse === "true"){
    return "python.jpg"
  } else if (answerInput === "yes" && hoursInput === "8+" && learnInput === "visual" && animalInput === "dog" && trueFalse === "true"){
    return "Ruby.jpg"
  } else if (answerInput === "no" && hoursInput === "1" && learnInput === "visual" && animalInput === "dog" && trueFalse === "true"){
    return "C.png"
  }
}

//User Interface Logic
$(document).ready(function(){
  $("form#survey").submit(function(event){
    var nameInput =$("#name").val();
    console.log(nameInput)
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

    var image = '<img src="img/' + language + '" alt="picture of your match">';
    console.log(image)
    var name = '<span>' + nameInput + '</span>'

    $("#yourLanguage").show();
    $("#yourLanguage span").append(nameInput);
    $("#yourLanguage img").remove();
    $("#yourLanguage h3").append(image);

    event.preventDefault();
  });
});
