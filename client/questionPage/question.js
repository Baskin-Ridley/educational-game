let temp = [
    {
        "id": 1,
        "question": "Who's that pokemon? (hint: it's a Jigglypuff)",
        "answers": ["Voltorb", "Pokeball", "Electrode", "A jigglypuff seen from above"],
        "correct": "A jigglypuff seen from above"
        }
    ]

let score = 0

function displayScore() {
    document.getElementById('scoreDisplay').innerText = score
}



function addQuestion() {
    fetch('http://localhost:3000/questions/random')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const card = document.createElement('div')
            card.classList.add('card')
            card.classList.add('question')

            const question = document.createElement('div')
            question.classList.add('question')
            question.innerText = data.question

            const answers = document.createElement('div')
            answers.classList.add('answers')

            const answer1 = document.createElement('div')
            answer1.classList.add('answer')
            answer1.innerText = data.answers[0].text

            const answer2 = document.createElement('div')
            answer2.classList.add('answer')
            answer2.innerText = data.answers[1].text

            const answer3 = document.createElement('div')
            answer3.classList.add('answer')
            answer3.innerText = data.answers[2].text

            const answer4 = document.createElement('div')
            answer4.classList.add('answer')
            answer4.innerText = data.answers[3].text

            answers.appendChild(answer1)
            answers.appendChild(answer2)
            answers.appendChild(answer3)
            answers.appendChild(answer4)

            card.appendChild(question)
            card.appendChild(answers)

            document.getElementById('question').appendChild(card)
        })
        .catch(error => console.log(error))
}



function checkAnswer() {
    const answers = document.querySelectorAll('.answer')
    answers.forEach(answer => {
        answer.addEventListener('click', e => {
            if (e.target.innerText === temp[0].correct) {
                score++
                displayScore()
                console.log(score)
            }
        })
    })
}


addQuestion()
checkAnswer()
displayScore()
