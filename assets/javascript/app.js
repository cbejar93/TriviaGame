$(document).ready(function(){

// This is my array of objects, every question has its own object
var trivia = [
    {questions:"What is the capital of Azerbijan?",
    answers:["Baku","Dushanbe","Astana", "Khiva"], correct: "Baku"},
    
    {questions:"What is the capital of the Central African Republic?",
    answers:["Lagos","Braazerville", "Bangui", "Sibut"], correct: "Bangui"},
    
   {questions: "What is the capital of Kosovo?", answers:[ "Belgrade", "Saraveijo","Prisine", "Zagreb"], correct: "Prisine"}
]; 
// This is the countdown clock
let time= 30;

var intervaleId;
   
   
console.log(trivia.length);

console.log(trivia[0].questions);

function timer(){
    intervaleId = setInterval(count, 1000);
    
    console.log(intervaleId);
}

function count(){
    time --;
    document.getElementById("timer").innerHTML= time;
    if(time===0){
        stop()
    }
};

function stop(){
  
        clearInterval(intervaleId);
        let time = 30;

    };


function hideShow(){
    
    // This hides the jumbotron
    document.getElementById("temo").style.display = "none";

    // This shows the quiz questions
    document.getElementById("quiz").style.display = "block";

    document.getElementById("enter").style.display = "block";
};

function submit(){
    $("#results").append("<input type='button' value='submit'>");
   
}


// This is a for loop for displaying the question and the answer in new elements while at the same time getting a value for the button
function qaLoop(){
    for (var i = 0; i < 3; i++){
        $("#quiz").append("<p>" + trivia[i].questions + "</p> <br>");
        // $("#quiz").append("<input type='button' class='temo' value=" +trivia[i].answers.a +">" + "<input type='button' class='temo' value=" +trivia[i].answers.b +">" + "<input type='button' value=" +trivia[i].answers.c +">" + "<input type='button' value=" +trivia[i].answers.d +">");
        for (var j = 0; j< 4 ; j++){
    
            $("#quiz").append("<input type ='button' name='question'"+i+" value="+trivia[i].answers[j]+">");
        
        };
    
    };
};



function quizlayOut(){

    hideShow();
    
    qaLoop();

    timer();

    submit();

    
    
};
var guess =[];

$("#quiz").on("click", 'input', function(){
           
    
    
    guess.push(this.value);
    console.log(guess);
    
});

$("#start").click(quizlayOut);

$("#enter").on("click", function(){
    $("#results").append()
   

});

});
