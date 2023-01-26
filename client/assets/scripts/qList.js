const qList = document.getElementById("qList");

async function getQuestions() {
    const res = await fetch("http://localhost:3000/questions");
    const data = await res.json();

    data.forEach(q => {
        makeQuestionCard(q);
    });
}

function makeQuestionCard(q) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = "c" + q.id;

    const question = document.createElement("h2");
    question.innerText = q.question;
    question.classList.add("question");

    const answers = document.createElement("ul");
    answers.classList.add("answers");

    q.answers.forEach(a => {
        const answer = document.createElement("li");
        answer.innerText = a.text;
        answer.classList.add("answer");
        if (a.correct) {
            answer.classList.add("correct");
        } else {
            answer.classList.add("incorrect");
        }
        answers.appendChild(answer);
    });

    const category = document.createElement("p");
    category.innerText = q.category;

    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.classList.add("edit");
    editButton.onclick = () => { window.location.href = `/editQuestion.html?id=${q.id}` }

    const delButton = document.createElement("button");
    delButton.innerText = "Delete";
    delButton.classList.add("delete");
    delButton.onclick = () => {
        fetch(`http://localhost:3000/questions/${q.id}`, {
            method: "DELETE"
        }).then(res => console.log(res));
        qList.innerHTML = "";
        getQuestions();
    }

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("buttons");
    buttonDiv.appendChild(editButton);
    buttonDiv.appendChild(delButton);

    card.appendChild(question);
    card.appendChild(answers);
    card.appendChild(category);
    card.appendChild(buttonDiv);

    qList.appendChild(card);
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const newQ = {
        question: e.target.question.value,
        answers: [
            {text: e.target.answer1.value,
            correct: e.target.isCorrect1.checked},
            {text: e.target.answer2.value,
            correct: e.target.isCorrect2.checked},
            {text: e.target.answer3.value,
            correct: e.target.isCorrect3.checked},
            {text: e.target.answer4.value,
            correct: e.target.isCorrect4.checked}
        ],
        category: e.target.category.value,
    };

    const options = {
        method: "POST",
        body: JSON.stringify(newQ),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }

    fetch("http://localhost:3000/questions", options)
        .then(res => res.json())
        .then(data => makeQuestionCard(data))
        .catch(err => {
            console.log(err);
            alert("Something went wrong!");
        });
    
    e.target.question.value = "";
    e.target.answer1.value = "";
    e.target.answer2.value = "";
    e.target.answer3.value = "";
    e.target.answer4.value = "";
    e.target.isCorrect1.checked = false;
    e.target.isCorrect2.checked = false;
    e.target.isCorrect3.checked = false;
    e.target.isCorrect4.checked = false;
    e.target.category.value = "";
    

})

getQuestions();