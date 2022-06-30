let curretQuestion = 0;
let correctAnswers = 0;
let Audio_success = new Audio('Audio/success.mp3');
let Audio_fail = new Audio('Audio/fail.mp3');
let submittedName = [];
let language = [];

function init() {
    loadLocalStorage();
    if (language.length == 1) {
        renderFinishedQuizPage();
    } else {
        deleteLocalStorage();
        document.getElementById('whole-card').innerHTML = `     
            <div class="card-img">Vegan Quiz</div>
            <h5 class="text-center mt-2" id="questiontext">Sprache Auswählen ! / Select Language !</h5>
            <div class="selectLanguage">             
                <img src="img/de.png" class="img-language" onclick="showEnterName()">             
                <img src="img/us.png" class="img-language" onclick="showEnterNameEN()">
            </div>`
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

function resetAnswers() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer${i}`).parentNode.classList.remove('background-green');
        document.getElementById(`answer${i}`).parentNode.classList.remove('background-red');
    }
}

function loadLocalStorage() {
        let languageAsText = localStorage.getItem('languageStorage');
        let playernameAsText = localStorage.getItem('playername');
        let playerscoreAsText = localStorage.getItem('playerscore');
    if (languageAsText && playernameAsText) {   
        language = JSON.parse(languageAsText);
        submittedName = JSON.parse(playernameAsText);
        correctAnswers = JSON.parse(playerscoreAsText);
    }
}

function deleteLocalStorage() {
    if (language && submittedName) {
        language.splice(0, 1);
        submittedName.splice(0, 1);
    } else { }
    correctAnswers = 0;
    //    let languageAsText = JSON.stringify(language);
    //    localStorage.setItem('languageStorage', languageAsText);
    save();
}

function renderFinishedQuizPage() {
    if (language[0] == 'german') {
        renderFinishedQuizPageDE();
    } else {
        renderFinishedQuizPageEN();
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

function save() {
    let nameAsText = JSON.stringify(submittedName);
    let scoreAsText = JSON.stringify(correctAnswers);
    localStorage.setItem('playername', nameAsText);
    localStorage.setItem('playerscore', scoreAsText);
}