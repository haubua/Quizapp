function renderStartPage() {
    document.getElementById('whole-card').innerHTML = `<img src="img/pencil.jpg" class="card-img" alt="">
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
            <button href="#" class="btn btn-primary" id="next-button" onclick="nextQuestion()" disabled>Nächste
                Frage</button>
        </div>
    </div>`
}