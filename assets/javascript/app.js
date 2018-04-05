$(document).ready(function(){

// This is my array of objects, every question has its own object
var trivia = [
    {questions:"What is the capital of Azerbijan?",
    answers:["Baku","Dushanbe","Astana", "Khiva"], correct: "Baku"},
    
    {questions:"What is the capital of the Central African Republic?",
    answers:["Lagos","Braazerville", "Bangui", "Sibut"], correct: "Bangui"},
    
   {questions: "What is the capital of Kosovo?", answers:[ "Belgrade", "Saraveijo","Prisine", "Zagreb"], correct: "Prisine"},

   {questions: "What is the capital of Moldova?", answers:["Kiev", "Dontesk", "Chisinau", "Stavastapool"], correct:"Chisinau"},

   {questions: "What is the capital of Canada?", answers:["Toronto", "Ottowa", "Washington DC", "Edmonton"], correct: "Ottowa"}
]; 
// This is the countdown clock
let time= 30;

var intervaleId;
// This is to count the number of correct inputs
var correctA;
// This is to display the number of incorrect inputs
var incorrectA;
 
// This is where the users button presses values goes
var guess =[];

function timer(){
    intervaleId = setInterval(count, 1000);
    
    console.log(intervaleId);
}

function count(){
    time --;
    document.getElementById("timer").innerHTML= time;
    if(time===0){
        stop();
        endscreen();
        check();
    };
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
    for (var i = 0; i < 5; i++){
        $("#quiz").append("<p class='portal'>" + trivia[i].questions + "</p> <br>");
     
        // This for loop is to display the possible answers
        for (var j = 0; j< 4 ; j++){
    
            $("#quiz").append("<input type ='radio' name='question'"+i+" value="+trivia[i].answers[j]+"><span>"+trivia[i].answers[j]+"</span");
        
        };
    
    };
};

// This is my overall function where I put the functions to hide certain elements to produce the Qs and As
function quizlayOut(){

    hideShow();
    
    qaLoop();

    timer();
      
};


// The catalyst for the entire quiz events
$("#start").click(quizlayOut);

// This is to read the users button presses
$("#quiz").on("click", 'input', function(){
    
    guess.push(this.value);
    console.log(guess);
    
});

function endscreen(){
     // This is to show the final card where you can restart and the score 
     document.getElementById("card1").style.display = "block";
    
     // This is to hide all the remaining element in the page.
     document.getElementById("quiz").style.display = "none";
     document.getElementById("enter").style.display = "none";
     document.getElementById("timer").style.display = "none";
}



// This is where all other elements are hidden and the user is able to go back to start area.
$("#enter").on("click", function ender(){
    endscreen();
    check();

});

// This is supposed to check the answers 
function check(){
guess.forEach(function(index){
    
      if (index === trivia[index].correct){
          correctA++;
          $("#ca").append.correctA;
          console.log(correctA);
      }
      else{
          incorrectA++;
          $("#ica").append.incorrectA;
          console.log(incorrectA);
      }
    
  });
}

});

// This is the function to check the ansers
// function check() {
//     if ($("input[name=option]:checked").val() == all[currentQ].correct) {
//         correctA++;
//     }
// };