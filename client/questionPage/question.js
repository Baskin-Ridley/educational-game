let score = 0
let questionNumber = 0
let clickable = true

function displayScore() {

    let scoreDisplay = document.getElementById('scoreDisplay');



    if(scoreDisplay){
        scoreDisplay.innerText = score;
    }
}
function displayQuestionNumber() {
    let questionNumberDisplay = document.getElementById('questionNumberDisplay');
    if(questionNumberDisplay){
        questionNumberDisplay.innerText = questionNumber;
    }
}

function addQuestion() {
    fetch('http://localhost:3000/questions/random')
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

            data.answers.forEach(answer => {
                const ans = document.createElement('div')
                ans.classList.add('answer')
                ans.innerText = answer.text
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
                    if(questionNumber === 5) {
                        navigateToResults()
                    }
                }, 1000); 
            }
        })
    })
}

function navigateToResults() { 

    window.location.href = `../../client/resultPage/results.html?score=${score}`;
}

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
