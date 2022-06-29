let curretQuestion = 0;
let correctAnswers = [0];
let Audio_success = new Audio('Audio/success.mp3');
let Audio_fail = new Audio('Audio/fail.mp3');
let submittedName = [];
let language = []

function init() {
    selectLanguage();
}

function languageSelected() {
    showEnterEmail();
}

function showEnterName() {
    language.push('german');
    let languageAsText = JSON.stringify(languageStorage);
    localStorage.setItem('languageStorage', languageAsText);
    showEnterNameTemplate();
}

function showEnterNameEN() {
    language.push('english');
    let languageAsText = JSON.stringify(languageStorage);
    localStorage.setItem('languageStorage', languageAsText);
    showEnterNameENTemplate();
}

function startGame() {
    let name = document.getElementById('nameInput').value;
    submittedName.push(name);
    renderGame();
}

function renderGame() {
    renderFirstQuestion();
    document.getElementById('amountQuestions').innerHTML = questions.length;
    document.getElementById('currentQuestion').innerHTML = curretQuestion + 1;
    showCurrentQuestion();
}

function showCurrentQuestion() {
    if (quizIsFinished()) {
        quizFinished();
    } else {
        updateNextQuestion();
    }
    if (curretQuestion == 0) {
    } else {
        showProgressStart()
    }
}
function quizIsFinished() {
    return curretQuestion >= questions.length;
}


function updateNextQuestion() {
    document.getElementById('questiontext').innerHTML = `<div>${questions[curretQuestion]['question']}</div>`;
    document.getElementById('answer1').innerHTML = `<div>${questions[curretQuestion]['answer1']}</div>`;
    document.getElementById('answer2').innerHTML = `<div>${questions[curretQuestion]['answer2']}</div>`;
    document.getElementById('answer3').innerHTML = `<div>${questions[curretQuestion]['answer3']}</div>`;
    document.getElementById('answer4').innerHTML = `<div>${questions[curretQuestion]['answer4']}</div>`;
}

function answer(selection) {
    let answerSelected = document.getElementsByClassName('background-green');

    if (answerSelected.length > 0) {
        alert('Du hast bereits eine Antwort gewählt!')
    }
    else {
        if (answerIsCorrect(selection)) {
            answerisCorrectAnimation(selection);
        } else {
            answerisFalseAnimation(selection);
        }
        document.getElementById('next-button').disabled = false;
        showProgress();
    }
}

function answerIsCorrect(selection) {
    return selection == questions[curretQuestion]['correctAnswer'];
}

function answerisCorrectAnimation(selection) {
    document.getElementById(selection).parentNode.classList.add('background-green')
    Audio_success.play();
    correctAnswers++;
}

function answerisFalseAnimation(selection) {
    document.getElementById(selection).parentNode.classList.add('background-red')
    document.getElementById(questions[curretQuestion]['correctAnswer']).parentNode.classList.add('background-green')
    Audio_fail.play();
}

function nextQuestion() {
    if (curretQuestion < (questions.length - 2)) {
        nextQuestionTemplate();
    } else {
        nextQuestionTemplate()
        document.getElementById('endQuiz').innerHTML = `
        <form id="form" action="http://robert-hahn.developerakademie.net/send_mail.php" method="POST"> 
            <button type="button" class="btn btn-primary" id="next-button" onclick="quizFinished()">Quiz Beenden</button>
            <textarea class="d-none" name="name">${submittedName}</textarea>
       </form> 
        `
    }
}

function nextQuestionTemplate() {
    curretQuestion++;
    resetAnswers();
    document.getElementById('next-button').disabled = true;
    renderGame();
}

function resetAnswers() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer${i}`).parentNode.classList.remove('background-green');
        document.getElementById(`answer${i}`).parentNode.classList.remove('background-red');
    }
}


function quizFinished() {
    save();
    document.getElementById('form').submit();
   
}



function renderFinishedQuizPageDE() {
    document.getElementById('whole-card').innerHTML = `<div class="ScoreCard">
    <img src="img/brainResult.png" class="ScoreCardElements">
    <span class="ScoreCardElements"><h2>VEGAN QUIZ<br>Beendet!</h2></span>
    <div class="ScoreCardElements"><div class="font-orange">Gratuliere ${submittedName} <br>DEIN SCORE ist</div> <div><b>${correctAnswers} / ${questions.length}</b></div></div>
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
    renderGame()
}

function save() {
    let nameAsText = JSON.stringify(playername);
    let scoreAsText = JSON.stringify(playerscore);
    localStorage.setItem('playername', nameAsText);
    localStorage.setItem('playerscore', scoreAsText);
}