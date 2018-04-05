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
    document.getElementById("jumbo").style.display = "none";

    // This shows the quiz questions
    document.getElementById("quiz").style.display = "block";
    // This shows the submit questions
    document.getElementById("enter").style.display = "block";
};




// This is a for loop for displaying the question and the answer in new elements while at the same time getting a value for the button
function qaLoop(){
    for (var i = 0; i < 3; i++){
        $("#quiz").append("<p>" + trivia[i].questions + "</p> <br>");
     
        for (var j = 0; j< 4 ; j++){
    
            $("#quiz").append("<input type ='radio' name='question'"+i+" value="+trivia[i].answers[j]+"><span>"+trivia[i].answers[j]+"</span");
        
        };
    
    };
};



function quizlayOut(){

    hideShow();
    
    qaLoop();

    timer();

    

    
    
};
var guess =[];

$("#quiz").on("click", 'input', function(){
           
    
    
    guess.push(this.value);
    console.log(guess);
    
});

$("#start").click(quizlayOut);


// This is where all other elements are hidden and the user is able to go back to start area.
$("#enter").on("click", function(){
    // This is to show the final card where you can restart and the score 
    document.getElementById("card1").style.display = "block";
    
    // This is to head all the remaining element in the page.
    document.getElementById("quiz").style.display = "none";
    document.getElementById("enter").style.display = "none";
    document.getElementById("timer").style.display = "none";

   

});

});
