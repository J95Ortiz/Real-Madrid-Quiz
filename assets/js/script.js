console.log("Hello from the console");

//Creates an array with all the questions and answers
//50 questions stored, but only 10 displayed per game
//The answers array in each question will hold the options and whether they're right or wrong
let questions = [
  {
    question:
      "Which Player was the only spanish player signed by Florentino in his first period as president?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "2 Who has won more Champions League titles?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "3 Player was the only spanish player signed by Florentino in his first period as president?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "4 Who has won more La Liga Titles?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "5 Who has made more competitive appearances for Madrid?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "6 Who was Real Madrid captain for longer",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "7 Who scored more Champions League goals?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "8 Real Madrid has played its home matches in which stadium since 1947?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "9 What is Madrid's most common nickname?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "10 Real Madrid played home matches for the 2019–20 season at which small venue whilst their regular stadium was being renovated?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "11 Which British football manager took charge of Real Madrid from July 1989 to November 1990?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "12 Cristiano Ronaldo is the all-time leading goalscorer with how many goals in all competitions?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "13 Which player spent 16 years of his career playing for Real Madrid and scored 323 goals during his career at the club?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "14 Can you name the oldest player to ever play for Real Madrid?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "15 As of 2024, how many European Cups/Champions Leagues have Real Madrid won?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "16 In July 2000, who made a surprising 62 million Euros move to Real Madrid?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "17 Which player is the oldest member in the current squad?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "18 Which Argentine born player was instrumental in the domination of the European Cup and La Liga during the 1950s?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "19 Gareth Bale was signed for 101 million Euros in which year?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "20 Gareth Bale was signed for 101 million Euros from which Club?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "21 What number shirt did David Beckham wear, citing his admiration of basketball player Michael Jordan who also wore this number shirt?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "22 What name is given to any match between rivals FC Barcelona and Real Madrid?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "23 Which legendary Brazilian left back scored 68 goals in 527 appearances for Madrid between 1996 and 2007?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "24 What word was once used to describe expensive Real Madrid football players and is now often used for a select list of football superstars in any team??",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "25 On 22 May 2012, who signed a new four-year contract to remain as Real Madrid manager through to 2016?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "26 In the 2018 UEFA Champions League Final what was the score between Real Madrid and Liverpool?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "27 David Beckham was the third Englishman to play for Real Madrid, who was the first?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "28 David Beckham was the third Englishman to play for Real Madrid, who was the second?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "29 Which goalkeeper made his debut in 1999 and went on to make 725 appearances for Madrid?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "30 Which player made his debut on 22 September 2005 when he famously scored an own goal before being sent off against Athletic Bilbao?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "31 In which year was Real Madrid founded?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "32 Who is the current Real Madrid Manager?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "33 What is the name of theReal Madrid youth academy?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "34 How many Copa del Rey titles has Real Madrid won?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "35 Who was the first foreign manager at Real Madrid?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "36 What is the name of the women's football team?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "37 Who was Real Madrid's first ever Ballon d'Or winner?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "38 Who was Real Madrid’s last Ballon d’or winner?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "39 Which manager won 3 successive Champions Leagues with Real Madrid?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "40 Who are Real Madrid’s main kit manufacturer?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "41 What is the record attendance for a Real Madrid match?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "42 How many la liga titles have Madrid won?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "43 Which ex Real Madrid manager went on to win a world cup and the euros with the Spanish National Team?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "44 In which year did Cristiano Ronaldo sign for Madrid?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "45 Which ex Real Madrid defender is 41 and still plays in Portugal?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "46 What position did Sergio Ramos play in before he was moved to central defense?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "47 Which player became the 7th Brit to play for the club in 2023?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "48 Who is the current president at Real Madrid?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "49 Which manager was sacked by the Spanish Federation after he agreed to coach Real before the 2018 World Cup?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "50 Which ex Real Madrid Midfielder went on to win the German Bundesliga with Bayer Leverkusen?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
];

//Variable quizQuestion will display the question text in #question h2
let quizQuestion = document.getElementById("question");

//Variable quizAnswers will display the potential answers in the .option buttons
let quizAnswers = document.getElementById("option");

//Variable nextBtn will apply to the next button
//Ideally this should be hidden untildisplayed question is answered
let nextBtn = document.getElementById("next-btn");

//Sets the score as 0 when the user starts the quiz and increases if question is answered correctly
let score = 0;
