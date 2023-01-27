let score = 0
let questionNumber = 0
let clickable = true

function displayScore() {
    let scoreDisplay = document.getElementById('scoreDisplay');
    if(scoreDisplay){
        scoreDisplay.innerText = score;
    }
}

function setAmountOfQuestions() {
    const urlParams = new URLSearchParams(window.location.search);
    questions = urlParams.get("questions");
    if(questions == null || questions == undefined){
        questions = 5
    }
    let amountOfQuestions = document.getElementById('amountOfQuestions');
    if(amountOfQuestions) {
        amountOfQuestions.innerText =  "/" + questions;
    }
}

function displayQuestionNumber() {
    let questionNumberDisplay = document.getElementById('questionNumberDisplay');
    if(questionNumberDisplay){
        questionNumberDisplay.innerText = questionNumber;
    }
}

function addQuestion() {
    const urlParams = new URLSearchParams(window.location.search);
    fetch(`/questions/random?category=${urlParams.get("category")}`)
        .then(response => response.json())
        .then(data => {
            const card = document.createElement('div')
            card.classList.add('card')
            card.classList.add('question')

            const question = document.createElement('div')
            question.classList.add('question')

            question.innerText = data.question

            const answers = document.createElement('div')
            answers.classList.add('answers')

            const colors = ["Chartreuse", "rebeccapurple", "tomato", "deeppink"]; 
            const symbols = ["&#x2665;", "&#x2666;", "&#x2660;", "&#x2663;"]; 

            data.answers.forEach((answer, index) => {
                const ans = document.createElement('div')
                ans.classList.add('answer')
                ans.innerHTML = symbols[index] + " " + answer.text;
                ans.style.color = colors[index];
                if (answer.correct) {
                    ans.classList.add('correct-answer')
                }
                answers.appendChild(ans)
            });

            card.appendChild(question)
            card.appendChild(answers)

            document.getElementById('question').appendChild(card)

            checkAnswer()

        })
        .catch(error => console.log(error))
}



function checkAnswer() {
    const urlParams = new URLSearchParams(window.location.search);
    let questions = urlParams.get("questions");
    if (!questions){
        questions = 5
    }
    const answers = document.querySelectorAll('.answer')
    answers.forEach(answer => {
        answer.addEventListener('click', e => {
            if (clickable) {
                if (e.target.classList.contains('correct-answer')) {
                    score++
                    e.target.classList.add('correct')
                    displayScore()
                }
                else{
                    e.target.classList.add('incorrect')
                }
                clickable = false   
                setTimeout(() => {
                    document.getElementById("question").innerHTML = "";
                    clickable = true
                    addQuestion();
                    questionNumber++
                    displayQuestionNumber()
                    if(questionNumber == questions) {
                        navigateToResults()
                    }
                }, 1000); 
            }
        })
    })
}

function navigateToResults() { 
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");
    const category = urlParams.get("category");
    const questions = urlParams.get("questions");
    
    window.location.href = `./results.html?score=${score}&name=${name}&category=${category}&questions=${questions}`;
}

setAmountOfQuestions()
addQuestion()
displayScore()

module.exports = {
    checkAnswer,
    addQuestion,
    displayScore,
    navigateToResults,
    displayQuestionNumber,
    score,
    questionNumber
};
