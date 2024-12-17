// Array di domande e risposte
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// Inizializzo l'indice della domanda corrente, il tempo, il punteggio e l'intervallo del timer
let currentQuestionIndex = 0;
let time = 60;
let score = 0;
let timerInterval;

// Array per tenere traccia delle domande visualizzate
let usedQuestions = [];

// Seleziono gli elementi dal DOM
const questionContainer = document.querySelector('#domanda , h3')
const options = document.querySelectorAll('.risposta, .risposta1');
const timerEl = document.querySelector('#time');
const questionCountEl = document.querySelector('#question');

// Funzione per caricare una domanda casuale che non sia già stata usata
function loadQuestion() {
  if (usedQuestions.length === questions.length) {      //se le due lunghezze coincidono tutte le domande sono state caricate
    return; 
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * questions.length);       //qui continuo a caricare un indice casuale che non è presente in usedqustion
  } while (usedQuestions.includes(randomIndex));

  // Aggiungo l'indice della domanda usata all'array
  usedQuestions.push(randomIndex);

  const currentQuestion = questions[randomIndex];                                 
  
  // Imposto il testo della domanda casuale
  questionContainer.textContent = currentQuestion.question;
  
  // Imposto le opzioni di risposta
  const allAnswers = [...currentQuestion.incorrect_answers];
  allAnswers.splice(Math.floor(Math.random() * (allAnswers.length + 1)), 0, currentQuestion.correct_answer);

  options.forEach((button, index) => {
    if (allAnswers[index]) {
      button.textContent = allAnswers[index];
      button.onclick = () => selectAnswer(allAnswers[index], currentQuestion.correct_answer, currentQuestion.type);
    } 
  });
  
  // Aggiorno il contatore delle domande e avvio il timer
  updateQuestionCount();
  resetTimer();
  startTimer();
}

// Funzione per gestire la selezione della risposta
function selectAnswer(selectedAnswer, correctAnswer, type) {
  stopTimer();
  if (selectedAnswer === correctAnswer) {
    score++;
  }
  nextQuestion();
}

// Funzione per passare alla domanda successiva
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < 10) {
    loadQuestion();
  } 
}

// Funzione per avviare il timer
function startTimer() {
  timerInterval = setInterval(() => {
    time--;                                                   //decrementa di 1 sec
    document.getElementById('time').textContent = time;
    if (time <= 0) {
      clearInterval(timerInterval);
      selectAnswer(null, null, 'none'); // Passa alla prossima domanda se il tempo scade e se non viene data una risposta
    }
  }, 1000);
}


// Funzione per fermare il timer
function stopTimer() {
  clearInterval(timerInterval);
}

// Funzione per resettare il timer
function resetTimer() {
  stopTimer();
  time = 60;
  document.getElementById('time').textContent = time;
}


// Funzione per aggiornare il contatore delle domande
function updateQuestionCount() {
  questionCountEl.textContent = "QUESTION " + (currentQuestionIndex + 1);
}


// Carica la prima domanda all'avvio
loadQuestion();
