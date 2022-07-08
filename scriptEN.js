function startGameEN() {
    let name = document.getElementById('nameInput').value;
    submittedName.push(name);
    renderGameEN();
}

function renderGameEN() {
    renderFirstQuestionEN();
    document.getElementById('amountQuestions').innerHTML = questions.length;
    document.getElementById('currentQuestion').innerHTML = curretQuestion + 1;
    showCurrentQuestionEN();
}

function showCurrentQuestionEN() {
    if (quizIsFinished()) {
        quizFinishedEN();
    } else {
        updateNextQuestionEN();
    }
    if (curretQuestion == 0) {
    } else {
        showProgressStart()
    }
}

function updateNextQuestionEN() {
    document.getElementById('questiontext').innerHTML = `<div>${questionsEN[curretQuestion]['question']}</div>`;
    document.getElementById('answer1').innerHTML = `<div>${questionsEN[curretQuestion]['answer1']}</div>`;
    document.getElementById('answer2').innerHTML = `<div>${questionsEN[curretQuestion]['answer2']}</div>`;
    document.getElementById('answer3').innerHTML = `<div>${questionsEN[curretQuestion]['answer3']}</div>`;
    document.getElementById('answer4').innerHTML = `<div>${questionsEN[curretQuestion]['answer4']}</div>`;
}

function answerEN(selection) {
    let answerSelected = document.getElementsByClassName('background-green');

    if (answerSelected.length > 0) {
        alert('You have alredy selected your Answer!')
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

function nextQuestionEN() {
    if (curretQuestion < (questions.length -2)) {
        nextQuestionTemplateEN();
    } else {
        nextQuestionTemplateEN();
        document.getElementById('endQuiz').innerHTML = `
        <button href="#" type="button" class="btn btn-primary" id="next-button" onclick="quizFinishedEN()">End Quiz</button>`
}}

function nextQuestionTemplateEN() {
    curretQuestion++;
    resetAnswers();
    document.getElementById('next-button').disabled = true;
    renderGameEN();
}

function quizFinishedEN() {
    quizFinishedENTemplate();
}

function restartEN() {
    curretQuestion = 0;
    correctAnswers = 0;
    renderGameEN()
}