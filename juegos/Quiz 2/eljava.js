const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Madrid", "Londres", "París"],
        correct: 2
    },
    {
        question: "¿Cuántos planetas hay en el sistema solar?",
        options: [7, 8, 9],
        correct: 1
    },
    {
        question: "¿Cuál es el resultado de 2 + 2?",
        options: [3, 4, 5],
        correct: 1
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Amazonas", "Nilo", "Misisipi"],
        correct: 0
    },
    {
        question: "¿Quién escribió 'Don Quijote de la Mancha'?",
        options: ["Miguel de Cervantes", "Gabriel García Márquez", "William Shakespeare"],
        correct: 0
    },
    {
        question: "¿Cuál es el proceso por el cual las plantas fabrican su propio alimento?",
        options: ["Fotosíntesis", "Respiración", "Fermentación"],
        correct: 0
    },
    {
        question: "¿Quién fue el primer presidente de Estados Unidos?",
        options: ["Thomas Jefferson", "George Washington", "John Adams"],
        correct: 1
    },
    {
        question: "¿Cuál es la capital de Japón?",
        options: ["Pekín", "Seúl", "Tokio"],
        correct: 2
    },
    {
        question: "¿Qué famoso científico formuló la teoría de la relatividad?",
        options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein"],
        correct: 2
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        options: ["Océano Atlántico", "Océano Pacífico", "Océano Índico"],
        correct: 1
    },
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Madrid", "Londres", "París"],
        correct: 2
    },
    {
        question: "¿Cuántos planetas hay en el sistema solar?",
        options: [7, 8, 9],
        correct: 1
    },
    {
        question: "¿Cuál es el resultado de 2 + 2?",
        options: [3, 4, 5],
        correct: 1
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Amazonas", "Nilo", "Misisipi"],
        correct: 0
    },
    {
        question: "¿Quién escribió 'Don Quijote de la Mancha'?",
        options: ["Miguel de Cervantes", "Gabriel García Márquez", "William Shakespeare"],
        correct: 0
    },
    {
        question: "¿Cuál es el símbolo químico del oxígeno?",
        options: ["O", "O2", "O3"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;
let balloonPosition = 0;

const balloon = document.getElementById('balloon');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const scoreValueElement = document.getElementById('score-value');

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = `Pregunta: ${question.question}`;
    optionsElement.innerHTML = '';

    for (let i = 0; i < question.options.length; i++) {
        const optionButton = document.createElement('button');
        optionButton.textContent = question.options[i];
        optionButton.addEventListener('click', () => checkAnswer(i));
        optionsElement.appendChild(optionButton);
    }
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];

    if (selectedOption === question.correct) {
        resultElement.textContent = '¡Correcto!';
        score++;
        balloonPosition -= 20;
        balloon.style.transform = `translateY(${balloonPosition}px)`;
    } else {
        resultElement.textContent = 'Incorrecto. La respuesta correcta es: ' + question.options[question.correct];
    }

    scoreValueElement.textContent = score;
    currentQuestion++;

    if (score < 8 && currentQuestion < questions.length) {
        loadQuestion();
    } else {
        if (score >= 5) {
            questionElement.textContent = "¡Has ganado! Puntaje final: " + score;
        } else {
            questionElement.textContent = "¡Juego terminado! Puntaje final: " + score;
        }
        optionsElement.innerHTML = '';
    }
}
loadQuestion();