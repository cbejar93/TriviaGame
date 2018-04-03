// This is my array of objects, every question has its own object
var trivia = [
    {questions:"What is the capital of Azerbijan?",
    answers:{a: "Baku", b:"Dushanbe", c:"Astana", d:"Khiva"}, correct: "a"},
    
    {questions:"What is the capital of the Central African Republic?",
    answers:{a: "Lagos", b:"Braazerville", c:"Bangui", d:"Sibut"}, correct: "c"},
    
   {questions: "What is the capital of Kosovo?", answers:{a: "Belgrade", b:"Saraveijo",c:"Prisine", d:"Zagreb"}, correct: "c"}
]; 
   
   
console.log(trivia.length);

console.log(trivia[0].questions);

// This is a for loop for displaying the question and the answer in new elements while at the same time getting a value for the button
function quizlayOut(){
    for (var i = 0; i < 3; i++){
        $("#quiz").append("<p>" + trivia[i].questions + "</p> <br>");
        $("#quiz").append("<input type='button' value=" +trivia[i].answers.a +">" + "<input type='button' value=" +trivia[i].answers.b +">" + "<input type='button' value=" +trivia[i].answers.c +">" + "<input type='button' value=" +trivia[i].answers.d +">");
    };
};

quizlayOut();

$("input").click(function(){
    var userguess = [];
    userguess.push(this.value);        
    console.log(userguess);
    
});

