/*
function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
	var correct = 0;

        if (question1 == "1") {
            correct++;
        }

        if (question2 == "2") {
            correct++;
        }
        if (question3 == "3") {
            correct++;
        }
        if (question4 == "4") {
            correct++;
        }
        if (question5 == "5") {
            correct++;
        }
        if (question6 == "6") {
            correct++;
        }
        if (question7 == "7") {
            correct++;
        }
        if (question8 == "8") {
            correct++;
        }
        if (question9 == "9") {
            correct++;
        }        
        if (question10 == "10") {
            correct++;
        }
           
var messages = ["Perfect Score", "Great Job!", "That's just okay", "You really need to do better"];
var pictures = ["img/perfect.gif", "img/almost_perfect.gif", "img/meh.gif", "img/sad.gif"];    
var range;

if (correct < 4){
        range = 3;
        }

        if (correct > 3 && correct < 9){
            range = 2;
        }

        if (correct > 7 && correct < 10){
            range = 1;
        }

        if (correct > 9){
            range = 0;
        }

document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct."; 
document.getElementById("picture").src = pictures[range];
	    
}
	