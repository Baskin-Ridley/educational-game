let temp = [
    {
        "id": 1,
        "question": "Who's that pokemon? (hint: it's a Jigglypuff)",
        "answers": ["Voltorb", "Pokeball", "Electrode", "A jigglypuff seen from above"],
        "correct": "A jigglypuff seen from above"
        }
    ]

let score = 0
let clickable = true

function displayScore() {
<<<<<<< HEAD:client/questionPage/question.js
    let scoreDisplay = document.getElementById('scoreDisplay');
=======
    const scoreDisplay = document.getElementById('scoreDisplay');
>>>>>>> cameron:client/question.js
    if(scoreDisplay){
        scoreDisplay.innerText = score;
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
                    displayScore()
                }
                clickable = false   
                setTimeout(() => {
                    document.getElementById("question").innerHTML = "";
                    clickable = true
                    addQuestion();
                }, 1000); 
            }
        })
    })
}



addQuestion()
displayScore()

module.exports = {
    checkAnswer,
    addQuestion,
    displayScore,
    score
};
