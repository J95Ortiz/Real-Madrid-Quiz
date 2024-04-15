console.log("Hello from the console");

//Creates an array with all the questions and answers
//50 questions stored, but only 10 displayed per game 
//The answers array in each question will hold the options and whether they're right or wrong
let questions = []

//Variable quizQuestion will display the question text in #question h2
let quizQuestion = document.getElementById("question");

//Variable quizAnswers will display the potential answers in the .option buttons
let quizAnswers = document.getElementById("option");

//Variable nextBtn will apply to the next button
//Ideally this should be hidden untildisplayed question is answered
let nextBtn = document.getElementById("next-btn");

//Sets the score as 0 when the user starts the quiz and increases if question is answered correctly
let score = 0;

