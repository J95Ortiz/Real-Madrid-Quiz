//Creates an array with all the questions and answers
//50 questions stored, but only 10 displayed per game
//The answers array in each question will hold the options and whether they're right or wrong
let questions = [
  {
    rank: 1,
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
    rank: 2,
    question: "Who has won more Champions League titles?",
    answers: [
      { text: "Iker Casillas", correct: false },
      { text: "Gareth Bale", correct: true },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    rank: 3,
    question: "Which Manager made a surprise return to Madrid from Everton?",
    answers: [
      { text: "Zidane", correct: false },
      { text: "Julen Lopetegui", correct: false },
      { text: "Carlo Ancelotti", correct: true },
      { text: "Frank Lampard", correct: false },
    ],
  },
  {
    rank: 4,
    question: "Who has won more La Liga Titles?",
    answers: [
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
      { text: "Cristiano Ronaldo", correct: true },
    ],
  },
  {
    rank: 5,
    question: "Who has made more competitive appearances for Madrid?",
    answers: [
      { text: "Sergio Ramos", correct: false },
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Iker Casillas", correct: true },
      { text: "Gareth Bale", correct: false },
    ],
  },
  {
    rank: 6,
    question: "Who was Real Madrid captain for longer",
    answers: [
      { text: "Iker Casillas", correct: false },
      { text: "Sergio Ramos", correct: true },
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Gareth Bale", correct: false },
    ],
  },
  {
    rank: 7,
    question: "Who scored more Champions League goals?",
    answers: [
      { text: "Zidane", correct: false },
      { text: "Eden Hazard", correct: false },
      { text: "Sergio Ramos", correct: true },
      { text: "Gareth Bale", correct: false },
    ],
  },
  {
    rank: 8,
    question:
      "Real Madrid has played its home matches in which stadium since 1947?",
    answers: [
      { text: "Santiago Bernabeu", correct: true },
      { text: "Montjuic", correct: false },
      { text: "Civitas Metropolitano", correct: false },
      { text: "Estadio Sanchez Pizjuan", correct: false },
    ],
  },
  {
    rank: 9,
    question: "What is Madrid's most common nickname?",
    answers: [
      { text: "Los Rallados", correct: false },
      { text: "Los Tigres", correct: false },
      { text: "Los Blaugrana", correct: false },
      { text: "Los Blancos", correct: true },
    ],
  },
  {
    rank: 10,
    question:
      "Real Madrid played home matches for the 2019/20 season at which small venue while their regular stadium was being renovated?",
    answers: [
      { text: "Montjuic Stadium", correct: false },
      { text: "Estadio de la Cartuja", correct: false },
      { text: "El Madrigal", correct: false },
      { text: "Alfredo di Stefano Stadium", correct: true },
    ],
  },
  {
    rank: 11,
    question:
      "Which British football manager took charge of Real Madrid from July 1989 to November 1990?",
    answers: [
      { text: "John Toshack", correct: true },
      { text: "Zidane", correct: false },
      { text: "Steve Bruce", correct: false },
      { text: "Neil Warnock", correct: false },
    ],
  },
  {
    rank: 12,
    question:
      "Cristiano Ronaldo is the all-time leading goalscorer with how many goals in all competitions?",
    answers: [
      { text: "323", correct: false },
      { text: "450", correct: true },
      { text: "101", correct: false },
      { text: "523", correct: false },
    ],
  },
  {
    rank: 13,
    question:
      "Which player spent 16 years of his career playing for Real Madrid and scored 323 goals during his career at the club?",
    answers: [
      { text: "Zidane", correct: false },
      { text: "Eden Hazard", correct: false },
      { text: "Sergio Ramos", correct: true },
      { text: "Gareth Bale", correct: false },
    ],
  },
  {
    rank: 14,
    question: "Can you name the oldest player to ever play for Real Madrid?",
    answers: [
      { text: "Luka Modric", correct: false },
      { text: "Alfredo di Stefano", correct: true },
      { text: "Pepe", correct: false },
      { text: "Marcelo", correct: false },
    ],
  },
  {
    rank: 15,
    question:
      "As of 2024, how many European Cups/Champions Leagues have Real Madrid won?",
    answers: [
      { text: "11", correct: false },
      { text: "14", correct: true },
      { text: "10", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    rank: 16,
    question:
      "In July 2000, who made a surprising 62 million Euros move to Real Madrid?",
    answers: [
      { text: "Luis Figo", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Sergio Ramos", correct: false },
    ],
  },
  {
    rank: 17,
    question: "Which player is the oldest member in the current squad?",
    answers: [
      { text: "Sergio Ramos", correct: false },
      { text: "Luka Modric", correct: true },
      { text: "Toni Kroos", correct: false },
      { text: "Marcelo", correct: false },
    ],
  },
  {
    rank: 18,
    question:
      "Which Argentine born player was instrumental in the domination of the European Cup and La Liga during the 1950s?",
    answers: [
      { text: "Julian Alvarez", correct: false },
      { text: "Santiago Solari", correct: false },
      { text: "Carlo Ancelotti", correct: false },
      { text: "Alfredo di Stefano", correct: true },
    ],
  },
  {
    rank: 19,
    question: "Gareth Bale was signed for 101 million Euros in which year?",
    answers: [
      { text: "2012", correct: false },
      { text: "2013", correct: true },
      { text: "2010", correct: false },
      { text: "2014", correct: false },
    ],
  },
  {
    rank: 20,
    question: "Gareth Bale was signed for 101 million Euros from which Club?",
    answers: [
      { text: "Tottenham", correct: true },
      { text: "Chelsea", correct: false },
      { text: "Southampton", correct: false },
      { text: "Arsenal", correct: false },
    ],
  },
  {
    rank: 21,
    question:
      "What number shirt did David Beckham wear, citing his admiration of basketball player Michael Jordan who also wore this number shirt?",
    answers: [
      { text: "5", correct: false },
      { text: "10", correct: false },
      { text: "7", correct: false },
      { text: "23", correct: true },
    ],
  },
  {
    rank: 22,
    question:
      "What name is given to any match between rivals FC Barcelona and Real Madrid?",
    answers: [
      { text: "Der Klassiker", correct: false },
      { text: "El Derby", correct: false },
      { text: "The Old Firm", correct: false },
      { text: "El Clasico", correct: true },
    ],
  },
  {
    rank: 23,
    question:
      "Which legendary Brazilian left back scored 68 goals in 527 appearances for Madrid between 1996 and 2007?",
    answers: [
      { text: "Marcelo", correct: false },
      { text: "Roberto Carlos", correct: true },
      { text: "Fabio Coentrao", correct: false },
      { text: "Dani Alves", correct: false },
    ],
  },
  {
    rank: 24,
    question:
      "What word was once used to describe expensive Real Madrid football players and is now often used for a select list of football superstars in any team??",
    answers: [
      { text: "Las Estrellas", correct: false },
      { text: "Los de Florentino", correct: false },
      { text: "Los Galacticos", correct: true },
      { text: "Los Merengues", correct: false },
    ],
  },
  {
    rank: 25,
    question:
      "On 22 May 2012, who signed a new four-year contract to remain as Real Madrid manager through to 2016?",
    answers: [
      { text: "Jose Mourinho", correct: true },
      { text: "Julen Lopetegui", correct: false },
      { text: "Carlo Ancelotti", correct: false },
      { text: "Zidane", correct: false },
    ],
  },
  {
    rank: 26,
    question:
      "In the 2018 UEFA Champions League Final what was the score between Real Madrid and Liverpool?",
    answers: [
      { text: "3-1", correct: true },
      { text: "1-0", correct: false },
      { text: "2-0", correct: false },
      { text: "4-1", correct: false },
    ],
  },
  {
    rank: 27,
    question:
      "David Beckham was the third Englishman to play for Real Madrid, who was the first?",
    answers: [
      { text: "Steve McManaman", correct: false },
      { text: "Jonathan Woodgate", correct: false },
      { text: "Laurie Cunningham", correct: true },
      { text: "Gareth Bale", correct: false },
    ],
  },
  {
    rank: 28,
    question:
      "David Beckham was the third Englishman to play for Real Madrid, who was the second?",
    answers: [
      { text: "Laurie Cunningham", correct: false },
      { text: "Jonathan Woodgate", correct: false },
      { text: "Steve McManaman", correct: true },
      { text: "Gareth Bale", correct: false },
    ],
  },
  {
    rank: 29,
    question:
      "Which goalkeeper made his debut in 1999 and went on to make 725 appearances for Madrid?",
    answers: [
      { text: "Thibault Courtois", correct: false },
      { text: "Iker Casillas", correct: true },
      { text: "Diego Lopez", correct: false },
      { text: "Unai Simon", correct: false },
    ],
  },
  {
    rank: 30,
    question:
      "Which player made his debut on 22 September 2005 when he famously scored an own goal before being sent off against Athletic Bilbao?",
    answers: [
      { text: "Laurie Cunningham", correct: false },
      { text: "Steve McManaman", correct: false },
      { text: "Jonathan Woodgate", correct: true },
      { text: "Gareth Bale", correct: false },
    ],
  },
  {
    rank: 31,
    question: "In which year was Real Madrid founded?",
    answers: [
      { text: "1957", correct: false },
      { text: "1939", correct: false },
      { text: "1935", correct: false },
      { text: "1891", correct: true },
    ],
  },
  {
    rank: 32,
    question: "Who is the current Real Madrid Manager?",
    answers: [
      { text: "Zidane", correct: false },
      { text: "Julen Lopetegui", correct: false },
      { text: "Carlo Ancelotti", correct: true },
      { text: "Santiago Solari", correct: false },
    ],
  },
  {
    rank: 33,
    question: "What is the name of the Real Madrid youth academy?",
    answers: [
      { text: "La Fabrica", correct: true },
      { text: "La Masia", correct: false },
      { text: "La Casa", correct: false },
      { text: "El Bernabeu", correct: false },
    ],
  },
  {
    rank: 34,
    question: "How many Copa del Rey titles has Real Madrid won?",
    answers: [
      { text: "18", correct: true },
      { text: "16", correct: false },
      { text: "21", correct: false },
      { text: "13", correct: false },
    ],
  },
  {
    rank: 35,
    question: "Who was the first foreign manager at Real Madrid?",
    answers: [
      { text: "Carlo Ancelotti", correct: false },
      { text: "Zidane", correct: false },
      { text: "John Toshack", correct: true },
      { text: "Jose Mourinho", correct: false },
    ],
  },
  {
    rank: 36,
    question: "What is the name of the women's football team?",
    answers: [
      { text: "Real Femenino", correct: false },
      { text: "Real Madrid Femeni", correct: false },
      { text: "Real Madrid CF Femenino", correct: true },
      { text: "La Real", correct: false },
    ],
  },
  {
    rank: 37,
    question: "Who was Real Madrid's first ever Ballon d'Or winner?",
    answers: [
      { text: "Luka Modric", correct: false },
      { text: "Raul", correct: false },
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Alfredo di Stefano", correct: true },
    ],
  },
  {
    rank: 38,
    question: "Who was Real Madrid’s last Ballon d’or winner?",
    answers: [
      { text: "Alfredo di Stefano", correct: false },
      { text: "Luka Modric", correct: true },
      { text: "Raul", correct: false },
      { text: "Cristiano Ronaldo", correct: false },
    ],
  },
  {
    rank: 39,
    question:
      "Which manager won 3 successive Champions Leagues with Real Madrid?",
    answers: [
      { text: "John Toshack", correct: false },
      { text: "Carlo Ancelotti", correct: false },
      { text: "Jose Mourinho", correct: false },
      { text: "Zidane", correct: true },
    ],
  },
  {
    rank: 40,
    question: "Who are Real Madrid’s main kit manufacturer?",
    answers: [
      { text: "New Balance", correct: false },
      { text: "Adidas", correct: true },
      { text: "Nike", correct: false },
      { text: "Puma", correct: false },
    ],
  },
  {
    rank: 41,
    question: "What is the record attendance for a Real Madrid match?",
    answers: [
      { text: "129,690", correct: true },
      { text: "87,800", correct: false },
      { text: "95,015", correct: false },
      { text: "57,591", correct: false },
    ],
  },
  {
    rank: 42,
    question: "How many la liga titles have Madrid won?",
    answers: [
      { text: "45", correct: false },
      { text: "30", correct: false },
      { text: "33", correct: false },
      { text: "35", correct: true },
    ],
  },
  {
    rank: 43,
    question:
      "Which ex Real Madrid manager went on to win a world cup and the euros with the Spanish National Team?",
    answers: [
      { text: "Carlo Ancelotti", correct: false },
      { text: "Luis Aragones", correct: false },
      { text: "Vicente del Bosque", correct: true },
      { text: "Julen Lopetegui", correct: false },
    ],
  },
  {
    rank: 44,
    question: "In which year did Cristiano Ronaldo sign for Madrid?",
    answers: [
      { text: "2008", correct: true },
      { text: "2007", correct: false },
      { text: "2009", correct: false },
      { text: "2010", correct: false },
    ],
  },
  {
    rank: 45,
    question:
      "Which ex Real Madrid defender is 41 and still plays in Portugal?",
    answers: [
      { text: "Sergio Ramos", correct: false },
      { text: "Iker Casillas", correct: false },
      { text: "Pepe", correct: true },
      { text: "Roberto Carlos", correct: false },
    ],
  },
  {
    rank: 46,
    question:
      "What position did Sergio Ramos play in before he was moved to central defense?",
    answers: [
      { text: "Left Back", correct: false },
      { text: "Right Back", correct: true },
      { text: "Striker", correct: false },
      { text: "Goalkeeper", correct: false },
    ],
  },
  {
    rank: 47,
    question: "Which player became the 7th Brit to play for the club in 2023?",
    answers: [
      { text: "Jude Bellingham", correct: true },
      { text: "Marcus Rashford", correct: false },
      { text: "Jonathan Woodgate", correct: false },
      { text: "Gareth Bale", correct: false },
    ],
  },
  {
    rank: 48,
    question: "Who is the current president at Real Madrid?",
    answers: [
      { text: "Daniel Levy", correct: false },
      { text: "Joan Laporta", correct: false },
      { text: "Ryan Reynolds", correct: false },
      { text: "Florentino Perez", correct: true },
    ],
  },
  {
    rank: 49,
    question:
      "Which manager was sacked by the Spanish Federation after he agreed to coach Real before the 2018 World Cup?",
    answers: [
      { text: "Luis Aragones", correct: false },
      { text: "Julen Lopetegui", correct: true },
      { text: "Vicente del Bosque", correct: false },
      { text: "Luis Enrique", correct: false },
    ],
  },
  {
    rank: 50,
    question:
      "Which ex Real Madrid Midfielder went on to win the German Bundesliga with Bayer Leverkusen?",
    answers: [
      { text: "Iker Casillas", correct: false },
      { text: "Xavi", correct: false },
      { text: "Xabi Alonso", correct: true },
      { text: "Isco", correct: false },
    ],
  },
];
