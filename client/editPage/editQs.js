const qList = document.getElementById("qList");

async function getQuestions(){
    const res = await fetch("http://localhost:3000/questions");
    const data = await res.json();

    data.forEach(q => {
        makeQuestionCard(q);
    });
}

function makeQuestionCard(q){
    const card = document.createElement("div");
    card.classList.add("card");

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

    card.appendChild(question);
    card.appendChild(answers);
    card.appendChild(category);

    qList.appendChild(card);
}
getQuestions();