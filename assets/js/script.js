var questionArray = [{
        question: "What is the capital of California?",
        options: ["Hartford", "Pierre", "Sacramento", "Austin"],
        correctAnswer: "Sacramento",
    },
    {
        question: "What is the capital of Colorado?",
        options: ["Hartford", "Richmond", "Sacramento", "Denver"],
        correctAnswer: "Denver",
    },
    {
        question: "What is the capital of Texas?",
        options: ["Boise", "Pierre", "Honolulu", "Austin"],
        correctAnswer: "Austin",
    },
    {
        question: "What is the capital of Montana?",
        options: ["Jefferson City", "Helena", "Sacramento", "Cheyenne"],
        correctAnswer: "Helena",
    },
    {
        question: "What is the capital of Missouri?",
        options: ["Jefferson City", "Pierre", "Sacramento", "Austin"],
        correctAnswer: "Jefferson City",
    },
    {
        question: "What is the capital of Ohio?",
        options: ["Jefferson City", "Columbus", "Carson City", "Boston"],
        correctAnswer: "Columbus",
    },
    {
        question: "What is the capital of Alaska?",
        options: ["Juneau", "Pierre", "Salem", "Bismarck"],
        correctAnswer: "Juneau",
    },
    {
        question: "What is the capital of South Carolina?",
        options: ["Charleston", "Denver", "Sacramento", "Madison"],
        correctAnswer: "Charleston",
    },
    {
        question: "What is the capital of Michigan?",
        options: ["Lansing", "Tallahassee", "Santa Fe", "Raleigh"],
        correctAnswer: "Lansing",
    },
    {
        question: "What is the capital of Florida?",
        options: ["Lansing", "Tallahassee", "Santa Fe", "Raleigh"],
        correctAnswer: "Tallahassee",
    }
]

var startScreen = document.querySelector("#startScreen");


var timeEl = document.querySelector(".time");
var secondsLeft = 5;
var startButton = document.querySelector("#startButton");
var timerInterval;
var questionEl = document.querySelector("#question");
var answerOptions = document.querySelector("#options");
var questionScreen = document.querySelector("#questionScreen");


function setTime() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
        console.log("Game Over")
            //make game end

    }
}

function startQuiz() {
    //hide the start screen
    startScreen.setAttribute("class", "hide");
    //display the question screen
    questionScreen.removeAttribute("class", "hide");
    timerInterval = setInterval(setTime, 1000);
    timeEl.textContent = secondsLeft;

}









startButton.addEventListener("click", function(event) {
    event.preventDefault();
    startQuiz();
})