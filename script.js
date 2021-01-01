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
  console.log("Initiate");
  nextQuestion();
}

function nextQuestion() {
  showQuestion(shuffleQuestions[currentQuestion]);
}

function showQuestion(question) {
  questionText.innertext = questionText.question;
}

function answerSelect() {}

var questions = [
  {
    question: "What does DC stand for?",
    answerText: [
      { text: "Delta Comics", correct: false },
      { text: "Detective Comics", correct: true },
      { text: "Dirty Comics", correct: false },
      { text: "Driving Comics", correct: false },
    ],
  },
];
