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
    showEnterName();
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

function resetAnswers() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer${i}`).parentNode.classList.remove('background-green');
        document.getElementById(`answer${i}`).parentNode.classList.remove('background-red');
    }
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

function quizIsFinished() {
    return curretQuestion >= questions.length;
}