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
    },
]

var startScreen = document.querySelector("#startScreen");
var timeEl = document.querySelector(".time");
var timerDiv = document.querySelector(".timer")
var startButton = document.querySelector("#startButton");
var questionEl = document.querySelector("#question");
var answerOptions = document.querySelector("#options");
var questionScreen = document.querySelector("#questionScreen");
var gameEndScreen = document.querySelector("#gameEndScreen");
var scoresList = document.querySelector("#scoresList");
var userScore = document.querySelector("#userScore");
var savedScores = JSON.parse(localStorage.getItem("score"));
var arrayNumber = 0;
var timerInterval;
var score = 0;
var secondsLeft = 30;


// listens for click on the start button
startButton.addEventListener("click", function(event) {
    //does not refresh the page when button is clicked
    event.preventDefault();
    // calls start quiz function
    startQuiz();
})


function setTime() {
    //subtracts from secondsLeft
    secondsLeft--;
    //sets text content of timeEL(html time span) to whatever value seconds left is at
    timeEl.textContent = secondsLeft;
    //if seconds left is 0 or less than 0, Game over will be logged and end quiz function will be called
    if (secondsLeft <= 0) {
        console.log("Game Over")
        endQuiz();
    }
}


function startQuiz() {
    //hide the start screen
    startScreen.setAttribute("class", "hide");
    //display the question screen
    questionScreen.removeAttribute("class", "hide");
    // sets interval for set Time function to be every second, staroes this in timerInterval variable
    timerInterval = setInterval(setTime, 1000);
    // calls function that will start shuffling through questions
    displayQuestion();

}


function displayQuestion() {
    // creates a variable called displayedQuestion that holds a certain array object(whatever arrayNumber is at) from the questionArray
    var displayedQuestion = questionArray[arrayNumber];
    //sets text content of the questionEl to question property of whatever is selected in displayedQuestion
    questionEl.textContent = displayedQuestion.question;
    // clears out text content from previous question each time
    answerOptions.textContent = "";
    //grabs options property from the displayedquestion and repeats this function for each item in the array, names parameter of function "answerOption"
    displayedQuestion.options.forEach(function(answerOption) {
        //creates a button on the document and stores it in the variable optionBtn
        var optionBtn = document.createElement("button");
        // sets the value of the button to one answer option so that it can be checked later to see if it is the correct answer
        optionBtn.setAttribute("value", answerOption);
        //gives the button a class so that it can be styled using css
        optionBtn.setAttribute("class", "optionButton");
        // sets the text of the button to one answer option
        optionBtn.textContent = answerOption;
        //places option button on the page in the answer options section
        answerOptions.appendChild(optionBtn);
        // if option button is clicked, checkanswer function will be called
        optionBtn.onclick = checkAnswer;
    });

};


function checkAnswer() {
    //if the value of the clicked box matches the value of the answer in the same object...
    if (this.value === questionArray[arrayNumber].correctAnswer) {
        //correct answer will be logged and...
        console.log("Correct Answer!");
        //the score value will be increased by one and..
        score += 1;
        //logged into the console
        console.log(score);
        //if the values do not match(the user chose the wrong answer) then..
    } else {
        // wrong answer will be logged in the console and...
        console.log("Wrong Answer:(");
        //5 seconds will be subtracted from the clock 
        secondsLeft -= 5;
    }
    //the array number will increase by 1 to pull the next question out and put it on the page
    arrayNumber++;
    // if the array number is the same as the length of the array then this means there are no more questions left and...
    if (arrayNumber === questionArray.length) {
        //the end quix function will be called to end the quiz
        endQuiz();
    } else {
        // if the array number is not the same number as the array length yet, then the displayquestion function will be called and display the next question since the array number has now increased by 1
        displayQuestion();
    }
}


//when the function is called to end the quiz...
function endQuiz() {
    //the timer interval will be cleared so that it stops counting and...
    clearInterval(timerInterval);
    // the question screen will be assigned the class of hide so that it is no longer visible and...
    questionScreen.setAttribute("class", "hide");
    // the hide class will be removed from the end game screen so that it is visible to the user
    gameEndScreen.removeAttribute("class", "hide");
    //the line that told the user how many seconds are left will be removed from the page
    timerDiv.textContent = "";
    //the user will be prompted to input their initials in order to save their score
    var initials = prompt("Enter your initials to save your score");
    //sets text in userScore span to whatever value the score is 
    userScore.textContent = score;
}