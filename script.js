const start = document.getElementById("start-btn");
const score = document.getElementById("score");
const timer = document.getElementById("timer");
const questionElement = document.getElementById("questionSpot");
const answerElement = document.getElementById("answers");
const questionText = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");

let shuffleQuestions, currentQuestions;

start.addEventListener("click", startQuiz);

function startQuiz() {
  start.classList.add("hide");
  shuffleQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestions = 0;
  questionElement.classList.remove("hide");
  answerElement.classList.remove("hide");
  score.classList.remove("hide");
  timer.classList.remove("hide");
  console.log("gameStart");
  nextQuestion();
}

function nextQuestion() {
  resetState();
  showQuestion(shuffleQuestions[currentQuestions]);
  console.log("nextQuestion");
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answerBtn.forEach((answerBtn) => {
    const button = document.createElement("button");
    button.innerText = answerBtn.text;
    button.classList.add("btn");
    if (answerBtn.correct) {
      button.dataset.correct = answerBtn.correct;
    }
    button.addEventListener("click", answerSelect);
    answerElement.appendChild(button);
  });
}

function resetState() {
  while (answerElement.firstChild) {
    answerElement.removeChild(answerElement.firstChild);
  }
}

function answerSelect() {}

const questions = [
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
