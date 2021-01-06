// alert messagge when page opens explaining the game
alert(
  "Welcome to the superhero quiz. You have 60 seconds to answer 6 questions about the superhero genre. For every correct answer, you will gain 100 points. For every incorrect answer, you will lose 10 seconds off the timer count. The game ends when all questions are answered or the timer reaches 0. Enter name for high score leaderboard.  "
);

// list of start variables
const start = document.getElementById("start-btn");
const score = document.getElementById("score");
var scoreAmount = 0;
const questionElement = document.getElementById("questionSpot");
const answerElement = document.getElementById("answers");
const questionText = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
let shuffleQuestions, currentQuestions;

var timer;

// start button click event
start.addEventListener("click", startQuiz);

// first question page and start of game after start quiz is pushed
function startQuiz() {
  start.classList.add("hide");
  shuffleQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestions = 0;
  questionElement.classList.remove("hide");
  answerElement.classList.remove("hide");
  score.classList.remove("hide");
  timerElement.classList.remove("hide");
  console.log("gameStart");
  nextQuestion();
  startTimer();
}
// timer variables
var startingMinutes = 1;
var time = startingMinutes * 60;
var timerElement = document.getElementById("timer");

// start timer function
function startTimer() {
  timer = setInterval(countdown, 1000);
}
// couuntdown function
function countdown() {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;

  timerElement.innerText = `${minutes} : ${seconds}`;
  time--;
  console.log("countdown timer");
  if (time <= 0) {
    clearInterval(timer);
  }
}
// display next question
function nextQuestion() {
  if (currentQuestions >= questions.length) {
    console.log("no more questions");
    return;
  }
  resetState();
  showQuestion(shuffleQuestions[currentQuestions]);
  console.log("nextQuestion");
}
// showing questions and answers on page
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

function answerSelect(event) {
  console.log(event.currentTarget);
  console.log(event.currentTarget.dataset.correct);
  if (event.currentTarget.dataset.correct) {
    alert("correct");
    scoreAmount = scoreAmount + 100;
    score.innerHTML = " Score- " + scoreAmount;
  } else {
    time = time - 10;
    alert("Wrong");
  }
  currentQuestions++;
  nextQuestion();
}

//Element.classList.add("wrong")
// Element.addEventListener('click', () => {
// clearInterval(timer)
//  timerElement.innerhtml = -10
// timer = setinterval(time, 1000)

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
