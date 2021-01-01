var start = document.getElementById("start-btn");
var questionElement = document.getElementById("question");
var answerElement = document.getElementById("answers");
var questionText = document.getElementById("question");
var answerBtn = document.getElementById("answer-buttons");

let shuffleQuestions, currentQuestion;

start.addEventListener("click", startQuiz);

function startQuiz() {
  start.classList.add("hide");
  shuffleQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestion = 0;
  questionElement.classList.remove("hide");
  answerElement.classList.remove("hide");
  nextQuestion();
  console.log("Initiate first question");
}

function nextQuestion() {
  nextQuestion();
}

function nextQuestion() {
  showQuestion(shuffleQuestions[currentQuestion]);
}

function showQuestion(questions) {
  questionText.innertext = questions.question;
}

function answerSelect() {}

var questions = [
  {
    question: "What does DC stand for?",
    answerBtn: [
      { text: "Delta Comics", correct: false },
      { text: "Detective Comics", correct: true },
      { text: "Dirty Comics", correct: false },
      { text: "Driving Comics", correct: false },
    ],
  },
  {
    question: "What year did Superman make his first appearance?",
    answerBtn: [
      { text: "1924", correct: false },
      { text: "1938", correct: true },
      { text: "1945", correct: false },
      { text: "1959", correct: false },
    ],
  },
  {
    question: "What Colour was the Hulk in his first appearance?",
    answerBtn: [
      { text: "Green", correct: false },
      { text: "Red", correct: false },
      { text: "Grey", correct: true },
      { text: "Blue", correct: false },
    ],
  },
  {
    question: "Which Batman villain broke batmans back?",
    answerBtn: [
      { text: "The Joker", correct: false },
      { text: "Two face", correct: false },
      { text: "Deathstroke", correct: false },
      { text: "Bane", correct: true },
    ],
  },
  {
    question: "Who is the fastest superhero?",
    answerBtn: [
      { text: "Quicksilver", correct: false },
      { text: "Superman", correct: false },
      { text: "The Flash", correct: true },
      { text: "Iron Man", correct: false },
    ],
  },
  {
    question:
      "How much was a near perfect copy of Action Comics #1 sold for recently?",
    answerBtn: [
      { text: "$365,000", correct: false },
      { text: "$860,000", correct: false },
      { text: "$1,900,000", correct: false },
      { text: "$3,200,000", correct: true },
    ],
  },
];
