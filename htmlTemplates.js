function renderFirstQuestion() {
    document.getElementById('whole-card').innerHTML = `
    <div class="card-img">Vegan Quiz</div>
    <div class="progress">
        <div class="progress-bar" id="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="25"
            aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="card-body quiz-card">
        <h5 class="card-title" id="questiontext">Frage</h5>

        <div class="card mb-2 background-hover">
            <div class="card-body" id="answer1" onclick="answer('answer1')">
                Antwort 1
            </div>
        </div>

        <div class="card mb-2 background-hover">
            <div class="card-body" id="answer2" onclick="answer('answer2')">
                Antwort 2
            </div>
        </div>

        <div class="card mb-2 background-hover">
            <div class="card-body" id="answer3" onclick="answer('answer3')">
                Antwort 3
            </div>
        </div>

        <div class="card mb-2 background-hover">
            <div class="card-body" id="answer4" onclick="answer('answer4')">
                Antwort 4
            </div>
        </div>

        <div class="card-bottom">
            <div><b id="currentQuestion"></b> von <b id="amountQuestions"></b> Fragen</div>
            <div id="endQuiz">
                <button href="#" class="btn btn-primary" id="next-button" onclick="nextQuestion()" disabled>Nächste Frage</button>
            </div>
        </div>
    </div>`
}

function renderFirstQuestionEN() {
    document.getElementById('whole-card').innerHTML = `
    <div class="card-img">Vegan Quiz</div>
    <div class="progress">
        <div class="progress-bar" id="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="25"
            aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="card-body quiz-card">
        <h5 class="card-title" id="questiontext">Frage</h5>

        <div class="card mb-2 background-hover">
            <div class="card-body" id="answer1" onclick="answerEN('answer1')">
                Answer 1
            </div>
        </div>

        <div class="card mb-2 background-hover">
            <div class="card-body" id="answer2" onclick="answerEN('answer2')">
                Answer 2
            </div>
        </div>

        <div class="card mb-2 background-hover">
            <div class="card-body" id="answer3" onclick="answerEN('answer3')">
                Answer 3
            </div>
        </div>

        <div class="card mb-2 background-hover">
            <div class="card-body" id="answer4" onclick="answerEN('answer4')">
                Answer 4
            </div>
        </div>

        <div class="card-bottom">
            <div><b id="currentQuestion"></b> of <b id="amountQuestions"></b> Questions</div>
            <div id="endQuiz">
                <button href="#" class="btn btn-primary" id="next-button" onclick="nextQuestionEN()" disabled>Next Question</button>
            </div>
        </div>
    </div>`
}

function showEnterNameTemplate() {
    language.push(german);
    document.getElementById('whole-card').innerHTML = `
    <div class="card-img">Vegan Quiz</div>
    <div class="card-body quiz-card">
    <h5 class="card-title" id="questiontext">Bitte gib deinen Namen ein und beginne mit "Quiz starten"!</h5>
   <div class="card mb-2">
        <input placeholder="Name eingeben:" name="name" id="nameInput">
        </div>
        <div class="card-bottom">
        <div></div>
        <button href="#" class="btn btn-primary" id="next-button" onclick="startGame()">Quiz Starten</button>
        </div>
    </div>`
}

function showEnterNameENTemplate() {
    document.getElementById('whole-card').innerHTML = `
    <div class="card-img">Vegan Quiz</div>
    <div class="card-body quiz-card">
    <h5 class="card-title" id="questiontext">Enter your Name and start with "Start Quiz"!</h5>
 <div class="card mb-2">
        <input placeholder="Enter Name:" name="name" id="nameInput">            
        </div>
        <div class="card-bottom">
        <div></div>
        <button href="#" class="btn btn-primary" id="next-button" onclick="startGameEN()">Start Quiz</button>
        </div>
    </div>`
}

function selectLanguage() {
    document.getElementById('whole-card').innerHTML = `
    <div class="card-img">Vegan Quiz</div>
    <h5 class="text-center mt-2" id="questiontext">Sprache Auswählen ! / Select Language !</h5>
    <div class="selectLanguage">
            <img src="img/de.png" class="img-language" onclick="showEnterName()">
            <img src="img/us.png" class="img-language" onclick="showEnterNameEN()">
    </div>`
}