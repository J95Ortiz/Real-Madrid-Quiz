//Variable quizQuestion will display the question text in #question h2
let quizQuestion = document.getElementById("question");

//Relates to the ans-area div, NOT THE BUTTONS!!!!
let answerChoices = document.getElementById("ans-area");

//Variable nextBtn will apply to the next button
//Ideally this should be hidden until displayed question is answered with resetState() fn
//Will also be used to start quiz once all questions are answered
let nextBtn = document.getElementById("next-btn");

//Sets the score as 0 when the user starts the quiz and increases if question is answered correctly
let score = 0;

//Variable which will run through the questins in quizArray
let currentQuestionNumber = 0;

//creates a blank array where the quiz random numbers will go
let randomNumbers = [];

//creates the array where the questions selected by the random number thing will go into
let quizArray = [];

/**
 * Sets up the quiz by adding 10 random numbers to questionNumbers Array.
 * Then another array is created which will hold the quiz questions for this game.
 */
function setupQuiz() {
  //Adds 10 random numbers between 0 & 49 to the array
  for (let i = 0; i < 10; i++) {
    //10 random numbers created
    randomNumbers[i] = Math.floor(Math.random() * 49);

    //These are pushed into the quiz array
    //Links the array with the relevant Q's and their answers
    quizArray.push(questions[randomNumbers[i]]);
  }
  startGame();
}

/**
 * Function created to run through the quiz once setupQuiz fn has ran
 */
function startGame() {
  //Need the fn to make currentQuestion = 0 each time the quiz starts,
  //so that the 1st question displayed is the 1st one in the array
  currentQuestionNumber = 0;
  score = 0;

  //Added below so that when user finishes, it will say replay
  nextBtn.innerHTML = "Next";

  //Calls nextQuestion fn which will display the question and the answer options.
  nextQuestion();
}

/**
 * Function created to load up the next question.
 * This applies the parameters from quizArray & currentQuestionNumber
 */
function nextQuestion() {
  //Calls the resetState function at the start so that the buttons in HTML are hidden when the new ones are created and added
  resetState();
  let displayedQuestion = quizArray[currentQuestionNumber];
  quizQuestion.innerText =
    currentQuestionNumber +
    1 +
    "/" +
    quizArray.length +
    " " +
    displayedQuestion.question;
  //Once question is shown I want to create a button for each answer for the user to choose.
  //Will then populate the new buttons with the answer options & give them the class .answer so they refer to the options in HTML.
  displayedQuestion.answers.forEach((answer) => {
    let button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("answer-buttons");
    //Need to make the buttons created above go over the ones in the HTML &
    //will need to add whether the button content is = answer.correct or not, so will create fn for this (userChoice).
    answerChoices.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct; //Applies the correct part of the answers to the buttons created in ln 602
    }
    button.addEventListener("click", userChoice);
  });
}

/**
 * Function created to hide the next button until the question's been answered and for the buttons created above
 * to show on top of the buttons already in HTML (removeChild)
 */
function resetState() {
  nextBtn.style.display = "none";
  while (answerChoices.firstChild) {
    answerChoices.removeChild(answerChoices.firstChild);
  }
}

/**
 * This function will work out whether the User's choice is correct or incorrect
 * Does this by matching the answer to whether correct = True or False
 * Use "e" as the fn parameter here as "e" represents the event in nextQuestion, ln 611
 */
function userChoice(e) {
  let chosenAnswer = e.target;
  let correctAnswer = chosenAnswer.dataset.correct === "true";
  if (correctAnswer) {
    chosenAnswer.classList.add("correct"); //Class added which will change colour once User makes their choice
    //and increase the score
    score++;
  } else {
    chosenAnswer.classList.add("incorrect"); //Class added which will change colour once User makes their choice
  }
  //Now go through answerChoices and its children and add the class "correct" if correct = true in the answerChoices array.
  Array.from(answerChoices.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    //Now make the rest of the buttons unavailable for clicks
    button.disabled = true;
  });
  //Now we want the next button to show
  nextBtn.style.display = "block";
}

//Event Listener below and functions are so the computer works out if all the questions have been asked
// If currentQuestionNumber is less than the questions in the quizArray, next question will pop up.
// Otherwise message will show with score and "Next" is replaced with "Play Again".
function displayNext() {
  currentQuestionNumber++;
  if (currentQuestionNumber < quizArray.length) {
    nextQuestion();
  } else {
    gameScore();
  }
}

/**
 * Function to collate scores and show them on the screen
 */
function gameScore() {
  resetState();
  //display a message saying: `You scored ${score} out of 10`
  if (score <= 5) {
    quizQuestion.innerHTML =
      `Oh dear you scored less than Hazard! You're score is ${score} out of ${quizArray.length}!` +
      "</br>" +
      "To go back to the instructions page just click or tap the logo at the top of the screen.";
  } else if (score <= 7) {
    quizQuestion.innerHTML =
      `Not bad! You scored ${score} out of ${quizArray.length}!` +
      "</br>" +
      "To go back to the instructions page just click or tap the logo at the top of the screen.";
  } else {
    quizQuestion.innerHTML =
      `You're a true Galactico! You scored ${score} out of ${quizArray.length}!` +
      "</br>" +
      "To go back to the instructions page just click or tap the logo at the top of the screen.";
  }

  nextBtn.innerHTML = "Play again";
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionNumber < quizArray.length) {
    displayNext();
  } else {
    location.reload();
  }
});

setupQuiz();
