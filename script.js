function checkQuestion(fieldName) {
    //Setting the boolean variable 'correct' to false
    var correct = false;
    //Dictionary to hold our values (an answer key, if you will)
    var answers = {
        question1: "WashingMachine",
        question2: "Sour",
        question3: "Curtains",
        question4: "Pink",
        question5: "Hungry",
        question6: "Happy"
    };
    //Finding the field/question with JQuery and seeing what the user input was
    var value = $('input[name = ' + fieldName + ' ]:checked').val()
    //Checking if the fieldName param is valid as well as if the user input matches
    //the field name's correct value. If there is a match, correct is set to true
    for(let key in answers) {
        if(fieldName == key) {
            if(answers[fieldName] == value) {
                correct = true 
            }
        }
    }
    //Checks if correct is set to true and is prints the appropriate message
    if(correct == true) {
        alert("Correct")
    } else {
        alert("Incorrect")
    }
}