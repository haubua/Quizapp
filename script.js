let questions = [
    {
        'question': 'Wie viel % landwirtschalftlich genutzte Fläche könnte man einsparen wenn die Menschheit auf tiereische Produkte verzichten würde?',
        'answer1': '15%',
        'answer2': '37%',
        'answer3': '59%',
        'answer4': '83%',
        'correctAnswer': 'answer4'
    },
    {
        'question': 'Wie viele "Nutztiere" gibt es zirka Weltweit?',
        'answer1': '~31 Mrd.',
        'answer2': '~64 Mrd.',
        'answer3': '~82 Mrd.',
        'answer4': '~103 Mrd.',
        'correctAnswer': 'answer3'
    },
    {
        'question': 'Was ist nicht in Pflanzlichen Produkten enthalten?',
        'answer1': 'Protein',
        'answer2': 'Vitamin B12',
        'answer3': 'Eisen',
        'answer4': 'Alle drei sind enthalten!',
        'correctAnswer': 'answer4'
    },
    {
        'question': 'Wie viel % geringer ist der Co2-Fußabdruck einer Vegane Ernärung gegenüber einer Omivoren Ernährung?',
        'answer1': '22%',
        'answer2': '45%',
        'answer3': '73%',
        'answer4': '90%',
        'correctAnswer': 'answer3'
    },
    {
        'question': 'In welchen Land leben die meisten Veganer?',
        'answer1': 'Indien',
        'answer2': 'Japan',
        'answer3': 'Thailand',
        'answer4': 'Israel',
        'correctAnswer': 'answer4'
    },
    {
        'question': 'Wie viel % der Menschheit ernährt sich vegan?',
        'answer1': '0,5%',
        'answer2': '3,2%',
        'answer3': '5,1%',
        'answer4': '7,6%',
        'correctAnswer': 'answer2'
    },
    {
        'question': 'Welchs vegane Lebensmittel hat den höchsten Eiweißgehalt?',
        'answer1': 'Erdnüsse',
        'answer2': 'Sojabohnen',
        'answer3': 'Lupinen',
        'answer4': 'Kichererbsen',
        'correctAnswer': 'answer3'
    },
    {
        'question': 'Wie viel Eiweiß sollte ein Veganer im vergleich zu einem Omnivore zu sich nehmen?',
        'answer1': 'doppelt so viel!',
        'answer2': 'gleich viel!',
        'answer3': 'dreimal so viel!',
        'answer4': 'die Hälfte!',
        'correctAnswer': 'answer2'
    },
]

let curretQuestion = 0;
let correctAnswers = [0];
let Audio_success = new Audio ('Audio/success.mp3');
let Audio_fail = new Audio ('Audio/fail.mp3');

function init() {
    renderStartPage();
    document.getElementById('amountQuestions').innerHTML = questions.length;
    document.getElementById('currentQuestion').innerHTML = curretQuestion + 1;
    showCurrentQuestion()
}

function showCurrentQuestion() {
    if (curretQuestion >= questions.length) {
        quizFinished();
    } else {
        document.getElementById('questiontext').innerHTML = `<div>${questions[curretQuestion]['question']}</div>`;
        document.getElementById('answer1').innerHTML = `<div>${questions[curretQuestion]['answer1']}</div>`;
        document.getElementById('answer2').innerHTML = `<div>${questions[curretQuestion]['answer2']}</div>`;
        document.getElementById('answer3').innerHTML = `<div>${questions[curretQuestion]['answer3']}</div>`;
        document.getElementById('answer4').innerHTML = `<div>${questions[curretQuestion]['answer4']}</div>`;
    }
    if (curretQuestion == 0) {
    } else {
        showProgressStart()
    }
}

function answer(selection) {
    let answeredRight = document.getElementsByClassName('background-green');

    if (answeredRight.length > 0) {
            alert('Es wurde bereits eine Antwort gewählt!')
        }
    else {
        if (selection == questions[curretQuestion]['correctAnswer']) {
            document.getElementById(selection).parentNode.classList.add('background-green')
            Audio_success.play();
            correctAnswers++;
        } else {
            document.getElementById(selection).parentNode.classList.add('background-red')
            document.getElementById(questions[curretQuestion]['correctAnswer']).parentNode.classList.add('background-green')
            Audio_fail.play();
        }
        document.getElementById('next-button').disabled = false;
        showProgress();
    }}

function nextQuestion() {
    curretQuestion++;
    resetAnswers();
    document.getElementById('next-button').disabled = true;
    init();
}

function resetAnswers() {
    document.getElementById('answer1').parentNode.classList.remove('background-green');
    document.getElementById('answer2').parentNode.classList.remove('background-green');
    document.getElementById('answer3').parentNode.classList.remove('background-green');
    document.getElementById('answer4').parentNode.classList.remove('background-green');
    document.getElementById('answer1').parentNode.classList.remove('background-red');
    document.getElementById('answer2').parentNode.classList.remove('background-red');
    document.getElementById('answer3').parentNode.classList.remove('background-red');
    document.getElementById('answer4').parentNode.classList.remove('background-red');
}


function quizFinished() {
    document.getElementById('whole-card').innerHTML = `<div class="ScoreCard">
                                                            <img src="img/brainResult.png" class="ScoreCardElements">
                                                            <span class="ScoreCardElements"><h2>VEGAN QUIZ<br>Beendet!</h2></span>
                                                            <div class="ScoreCardElements"><div class="font-orange">DEIN SCORE</div> <div><b>${correctAnswers} / ${questions.length}</b></div></div>
                                                            <button href="#" class="btn btn-primary" id="restart-button" onclick="restart()">Neu Starten</button>
                                                        </div>`
}

function showProgressStart() {
    let progress = `${Math.round((100 / questions.length) * (curretQuestion))}`
        document.getElementById('progress-bar').innerHTML = `${progress}%`;
        document.getElementById('progress-bar').style = `width: ${progress}%`;
}

function showProgress() {
    let progress = `${Math.round((100 / questions.length) * (curretQuestion + 1))}`
    document.getElementById('progress-bar').innerHTML = `${progress}%`;
    document.getElementById('progress-bar').style = `width: ${progress}%`;

}

function restart() {
    curretQuestion = 0;
    correctAnswers = 0;
    init()


}