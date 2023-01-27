const qId = (new URLSearchParams(window.location.search)).get("id");
if (qId == null) { window.location.href = "/questionList.html" }
const url = `/questions/${qId}`;

populateForm();

async function populateForm() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    document.querySelector("input[name='question']").value = data.question;
    document.querySelector("input[name='answer1']").value = data.answers[0].text;
    document.querySelector("input[name='answer2']").value = data.answers[1].text;
    document.querySelector("input[name='answer3']").value = data.answers[2].text;
    document.querySelector("input[name='answer4']").value = data.answers[3].text;
    document.querySelector("input[name='isCorrect1']").checked = data.answers[0].correct;
    document.querySelector("input[name='isCorrect2']").checked = data.answers[1].correct;
    document.querySelector("input[name='isCorrect3']").checked = data.answers[2].correct;
    document.querySelector("input[name='isCorrect4']").checked = data.answers[3].correct;
    document.querySelector("input[name='category']").value = data.category;
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
            correct: e.target.isCorrect4.checked},
        ],
        category: e.target.category.value,
    };

    const options = {
        method: "PATCH",
        body: JSON.stringify(newQ),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }

    fetch(url, options)
        .then(res => res.json())
        .then(window.location.href = "/questionList.html")
        .catch(err => {
            console.log(err);
            alert("Something went wrong!");
        })

})