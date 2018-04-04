// This is my array of objects, every question has its own object
var trivia = [
    {questions:"What is the capital of Azerbijan?",
    answers:{a: "Baku", b:"Dushanbe", c:"Astana", d:"Khiva"}, correct: "a"},
    
    {questions:"What is the capital of the Central African Republic?",
    answers:{a: "Lagos", b:"Braazerville", c:"Bangui", d:"Sibut"}, correct: "c"},
    
   {questions: "What is the capital of Kosovo?", answers:{a: "Belgrade", b:"Saraveijo",c:"Prisine", d:"Zagreb"}, correct: "c"}
]; 
// This is the countdown clock
let time= 30;

var intervaleId;
   
   
console.log(trivia.length);

console.log(trivia[0].questions);

function timer(){
    intervaleId = setInterval(count, 1000);
    reset()
    console.log(intervaleId);
}

function count(){
    time --;
    document.getElementById("timer").innerHTML= time;
}

function reset(){
    if (time === 0){
        clearInterval(intervaleId);
        time = 30;
    }
}

function hideShow(){
    
    // This hides the jumbotron
    document.getElementById("temo").style.display = "none";

    // This shows the quiz questions
    document.getElementById("quiz").style.display = "block";
};


// This is a for loop for displaying the question and the answer in new elements while at the same time getting a value for the button
function qaLoop(){
    for (var i = 0; i < 3; i++){
        $("#quiz").append("<p>" + trivia[i].questions + "</p> <br>");
        $("#quiz").append("<input type='button' value=" +trivia[i].answers.a +">" + "<input type='button' value=" +trivia[i].answers.b +">" + "<input type='button' value=" +trivia[i].answers.c +">" + "<input type='button' value=" +trivia[i].answers.d +">");
    };
};

function quizlayOut(){

    hideShow();
    
    qaLoop();

    timer()

    
    
};


$("input").click(function(){
    var userguess = [];
    userguess.push(this.value);        
    console.log(userguess);
    
});

$("#start").click(quizlayOut);

