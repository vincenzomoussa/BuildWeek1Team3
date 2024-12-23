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
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Science: Computers",
      "question": "Which computer hardware device provides an interface for all other connected devices to communicate?",
      "correct_answer": "Motherboard",
      "incorrect_answers": [
        "Central Processing Unit",
        "Hard Disk Drive",
        "Random Access Memory"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Science: Computers",
      "question": "What does GHz stand for?",
      "correct_answer": "Gigahertz",
      "incorrect_answers": [
        "Gigahotz",
        "Gigahetz",
        "Gigahatz"
      ]
    },
    {
      "type": "boolean",
      "difficulty": "easy",
      "category": "Science: Computers",
      "question": "The Windows 7 operating system has six main editions.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Science: Computers",
      "question": "What is the domain name for the country Tuvalu?",
      "correct_answer": ".tv",
      "incorrect_answers": [
        ".tu",
        ".tt",
        ".tl"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Science: Computers",
      "question": "Is JavaScript case-sensitive?",
      "correct_answer": "true",
      "incorrect_answers": [
        "false"
      ]
    },
    {
      "type": "boolean",
      "difficulty": "easy",
      "category": "Science: Computers",
      "question": "The Windows ME operating system was released in the year 2000.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Science: Computers",
      "question": "What does the computer software acronym JVM stand for?",
      "correct_answer": "Java Virtual Machine",
      "incorrect_answers": [
        "Java Vendor Machine",
        "Java Visual Machine",
        "Just Virtual Machine"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Science: Computers",
      "question": "Inside which HTML element do we put the JavaScript?",
      "correct_answer": "<script>",
      "incorrect_answers": [
        "<javascript>",
        "<js>",
        "<scripting>"
      ]
    },
    {
      "type": "boolean",
      "difficulty": "easy",
      "category": "Science: Computers",
      "question": "In most programming languages, the operator ++ is equivalent to the statement &quot;+= 1&quot;.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Science: Computers",
      "question": "How many kilobytes in one gigabyte (in decimal)?",
      "correct_answer": "1000000",
      "incorrect_answers": [
        "1024",
        "1000",
        "1048576"
      ]
    }
  ]

// Inizializzo l'indice della domanda corrente, il tempo, il punteggio e l'intervallo del timer
let currentQuestionIndex = 0;
let time = 60;
let score = 0;
let noScore = 0;
let timerInterval;
let totalQuestions = parseInt(localStorage.getItem('numQuestions')) || 10;


//Gestiamo il cambio di difficoltà
document.addEventListener('DOMContentLoaded', function() {
    const numQuestionsSelect = document.querySelector('#num-questions');
    numQuestionsSelect.addEventListener('change', function() {
        const numQuestions = parseInt(numQuestionsSelect.value, 10);
        // Salva il numero di domande selezionate nel localStorage
        localStorage.setItem('numQuestions', numQuestions);
    });
});
// Array per tenere traccia delle domande visualizzate
let usedQuestions = [];

// Seleziono gli elementi dal DOM
const section = document.querySelector("section");
const questionContainer = document.querySelector('#domanda');
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
// const options = document.querySelectorAll('.risposta, .risposta1');
const timerEl = document.querySelector('#time');
const questionCountEl = document.querySelector('#question');
const options = [];

//Button per le risposte
let btn1 = document.createElement("button");
btn1.classList.add('hover-effect')
let btn2 = document.createElement("button");
btn2.classList.add('hover-effect')
let btn3 = document.createElement("button");
btn3.classList.add('hover-effect')
let btn4 = document.createElement("button");
btn4.classList.add('hover-effect')


//Funzione per far accettare obbligatoriamente Termini e Condizioni
function page1() {

    const checkbox = document.querySelector("#check")
    const button = document.querySelector(".bottoni")

    button.addEventListener('click', (event) => {
        if (!checkbox.checked) {
            alert('Devi accettare Termini e Condizioni!');
        } else {
            event.preventDefault()
            window.location.href = "./Benchmark.html";
            
        }
    });
}
if (document.location.pathname === "/WelcomePage.html") {
    page1()
}
//Funzione per il bottone di index3 
function page3() {
    const button2 = document.querySelector("#bottone3")
    button2.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.href = "./Feedback.html";
    }
    )
}

if (document.location.pathname === "/Score.html") {
    page3()
}
//Funzione per il bottone di index4

function page4() {
    const button3 = document.querySelector(".bottoni")
    button3.addEventListener('click', (event) => {
        event.preventDefault()
        window.open('https://epicode.com/it/?utm_source=adwords&utm_campaign=Brand&utm_adgroup=brandphrase&utm_term=epicode&utm_medium=ppc&hsa_acc=1246633295&hsa_cam=11897141170&hsa_grp=115607542316&hsa_ad=639941754622&hsa_src=g&hsa_tgt=kwd-1083842420783&hsa_kw=epicode&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiA34S7BhAtEiwACZzv4UfJd98I-u7uRZliuXsVMj--n4Cyblftux0gS-riLEmufJutDWyTehoCc6IQAvD_BwE');
    }
    )
}

if (document.location.pathname === "/Feedback.html") {
    page4()
}

// Funzione per caricare una domanda casuale che non sia già stata usata
    function loadQuestion() {
    if (usedQuestions.length === totalQuestions) { // Se tutte le domande sono state caricate, termina il quiz
        finishQuiz();
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

    // Rimuovo i bottoni precedenti
    div1.innerHTML = '';
    div2.innerHTML = '';
    options.length = 0;

    // Imposto le opzioni di risposta
    const allAnswers = [...currentQuestion.incorrect_answers];
    allAnswers.splice(Math.floor(Math.random() * (allAnswers.length + 1)), 0, currentQuestion.correct_answer);
    

    if (allAnswers.length === 2) {
        div1.appendChild(btn1);
        div1.appendChild(btn2);
        section.appendChild(div1);
        options.push(btn1, btn2);
    } else if (allAnswers.length === 4) {
        div1.appendChild(btn1);
        div1.appendChild(btn2);
        div2.appendChild(btn3);
        div2.appendChild(btn4);
        section.appendChild(div1, div2);
        options.push(btn1, btn2, btn3, btn4);
    }

    options.forEach((button, index) => {
        if (allAnswers[index]) {
            button.textContent = allAnswers[index];
            button.style.backgroundColor = ''; // Reset colore per feedback
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

    const buttons = document.querySelectorAll('button.hover-effect'); 
    buttons.forEach(button => { 
        button.classList.remove('hover-effect');
        setTimeout(() => { button.classList.add('hover-effect'); }, 500)
    });

    //Feedback utente
    options.forEach(button => {
        if (button.textContent === correctAnswer) {
            button.style.backgroundColor = 'green'; // Evidenzia la risposta corretta in verde
       } else if (button.textContent === selectedAnswer && selectedAnswer !== correctAnswer) {
         button.style.backgroundColor = 'red'; // Evidenzia la risposta sbagliata in rosso
       
    }})

    // Aggiorno il punteggio
    if (selectedAnswer === correctAnswer) {
        score++;
    } else {
        noScore++;
    }

    // Attendo un momento prima di passare alla domanda successiva
    setTimeout(nextQuestion, 500);
  
}
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion();  // Carica la domanda successiva
    } else {
        finishQuiz();  // Se tutte le domande sono state completate, termina il quiz
    }
}
// Funzione per avviare il timer
function startTimer() {
    loadQuestion();
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
    restartAnimation();                    /*funzione per avviare l'animazione del timer ad ogni domanda */
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
// Funzione per riavviare l'animazione del timer
function restartAnimation() {
    const timerProgress = document.querySelector('.circle');
    timerProgress.style.animation = 'none';
    timerProgress.offsetHeight;  /* forzo il riavvio dell'animazione*/
    timerProgress.style.animation = '';
    timerProgress.style.animation = 'countdown-animation 60s linear forwards';
 }

// Funzione per aggiornare il contatore delle domande
function updateQuestionCount() {
    questionCountEl.textContent = "QUESTION " + (currentQuestionIndex + 1);
}

//genero le domande casuali
if (document.location.pathname === "/Benchmark.html") {
    loadQuestion();

}

function finishQuiz() {
    result()
}

//rating index4

const stars = document.querySelectorAll(".stars svg path");

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        })
    })
    star.addEventListener("mouseover", () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add("hover") : star.classList.remove("hover");
        })
    });
    star.addEventListener("mouseout", () => {
        stars.forEach((star) => {
            star.classList.remove("hover");
        });
    });
});

//Calcolo del risultato in prcentuale
const risposteEsatte = parseInt(localStorage.getItem("score"))
const risposteErrate = parseInt(localStorage.getItem("noScore"))
let totale = risposteEsatte + risposteErrate;
let percentualeTotale = function () {
    const percentualeEsatte = (risposteEsatte / totale) * 100;
    const percentualeErrate = (risposteErrate / totale) * 100;
    localStorage.setItem("percentualeEsatte", percentualeEsatte)
    localStorage.setItem("percentualeErrate", percentualeErrate)

    const riepilogo = {
        scoreRisposte: totale,
        esatte: risposteEsatte,
        errate: risposteErrate,
        percentualeEsatte: percentualeEsatte.toFixed(1),
        percentualeErrate: percentualeErrate.toFixed(1)
    }
    return riepilogo
};

//Funzione per gestire lo score nella pagina dei risultati
function result() {
    localStorage.setItem("score", score);
    localStorage.setItem("noScore", noScore);

    window.location.href = "./Score.html"

}

const riepilogo = percentualeTotale(totale);
if (document.location.pathname === "/Score.html") {


    const ctx = document.querySelector("#graficoTorta");
    let graficoCiambella = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'answers',
                data: [riepilogo.percentualeErrate, riepilogo.percentualeEsatte],
                borderWidth: 0,
                backgroundColor: ["#C2128D", "#00FFFF"]
            }]
        },
        options: {
            cutout: '70%',
        }
    });
    console.log("Ecco il risultato del tuo test:");
    console.log(`Totale domande: ${riepilogo.scoreRisposte}`);
    console.log(`Esatte: ${riepilogo.esatte} (${riepilogo.percentualeEsatte}%)`);
    console.log(`Errate: ${riepilogo.errate} (${riepilogo.percentualeErrate}%)`);


    if(riepilogo.percentualeEsatte >= 60) {
        document.getElementById("primaFrase").innerText = "Congratulations!";
        document.getElementById("secondaFrase").innerText = "You passed the exam.";
        document.getElementById("terzaFrase").innerText = "We'll send you the certificate in a few minutes.Check your email (including promotions / spam folder)";
    } else {
        document.getElementById("primaFrase").innerText = "We're sorry!";
        document.getElementById("secondaFrase").innerText = "You didn't pass the exam.";
        document.getElementById("terzaFrase").innerText = "You can contact your teacher and ask him how to try this again.";
    };
}
//Mostro il grafico in console

//Mostro il risultato all'interno del grafico a torta



