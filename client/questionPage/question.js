
let temp = [
    {
        "id": 1,
        "question": "Who's that pokemon? (hint: it's a Jigglypuff)",
        "answers": ["1", "2", "3", "4"],
        "correct": "3"
        }
    ]

console.log(temp)

function addQuestion() {
    
    const card = document.createElement('div')
    card.classList.add('card')
    card.classList.add('question')

    const question = document.createElement('div')
    question.classList.add('question')
    question.innerText = temp[0].question

    const answers = document.createElement('div')
    answers.classList.add('answers')

    const answer1 = document.createElement('div')
    answer1.classList.add('answer')
    answer1.innerText = temp[0].answers[0]

    const answer2 = document.createElement('div')
    answer2.classList.add('answer')
    answer2.innerText = temp[0].answers[1]

    const answer3 = document.createElement('div')
    answer3.classList.add('answer')
    answer3.innerText = temp[0].answers[2]

    const answer4 = document.createElement('div')
    answer4.classList.add('answer')
    answer4.innerText = temp[0].answers[3]

    answers.appendChild(answer1)
    answers.appendChild(answer2)
    answers.appendChild(answer3)
    answers.appendChild(answer4)

    card.appendChild(question)
    card.appendChild(answers)

    document.getElementById('question').appendChild(card)

}


addQuestion()
