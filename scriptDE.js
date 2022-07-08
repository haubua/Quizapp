function startGameDE() {
    let name = document.getElementById('nameInput').value;
    submittedName.push(name);
    renderGameDE();
}

function renderGameDE() {
    renderFirstQuestionDE();
    document.getElementById('amountQuestions').innerHTML = questions.length;
    document.getElementById('currentQuestion').innerHTML = curretQuestion + 1;
    showCurrentQuestionDE();
}

function showCurrentQuestionDE() {
    if (quizIsFinished()) {
        quizFinishedDE();
    } else {
        updateNextQuestionDE();
    }
    if (curretQuestion == 0) {
    } else {
        showProgressStart()
    }
}

function updateNextQuestionDE() {
    document.getElementById('questiontext').innerHTML = `<div>${questions[curretQuestion]['question']}</div>`;
    document.getElementById('answer1').innerHTML = `<div>${questions[curretQuestion]['answer1']}</div>`;
    document.getElementById('answer2').innerHTML = `<div>${questions[curretQuestion]['answer2']}</div>`;
    document.getElementById('answer3').innerHTML = `<div>${questions[curretQuestion]['answer3']}</div>`;
    document.getElementById('answer4').innerHTML = `<div>${questions[curretQuestion]['answer4']}</div>`;
}

function answerDE(selection) {
    let answerSelected = document.getElementsByClassName('background-green');

    if (answerSelected.length > 0) {
       // document.getElementById('next-button').classList.add('animation-Button')
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

function nextQuestionDE() {
    if (curretQuestion < (questions.length -2)) {
        nextQuestionTemplateDE();
    } else {
        nextQuestionTemplateDE();
        document.getElementById('endQuiz').innerHTML = `
            <button type="button" class="btn btn-primary" id="next-button" onclick="quizFinishedDE()">Quiz Beenden</button>
        `
}}

function nextQuestionTemplateDE() {
    curretQuestion++;
    resetAnswers();
    document.getElementById('next-button').disabled = true;
    renderGameDE();
}

function quizFinishedDE() {
   quizFinishedDETemplate();
}

function restartDE() {
    curretQuestion = 0;
    correctAnswers = 0;
    init();
}