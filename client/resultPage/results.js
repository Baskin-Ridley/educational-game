
let score = 0

function dispScore (){


const score = require("./question.js");
console.log(score);

document.querySelector("#retry").addEventListener("click", qPage);
function qPage() {
    window.location.href="questionPage.html";
}
document.querySelector("#home").addEventListener("click", hPage);
function hPage() {
    window.location.href="index.html";
}
document.querySelector("#leader").addEventListener("click", lPage);
function lPage() {
    window.location.href="questionPage.html";
}
function displayScore () {
    const card = document.createElement("div")
    card.textContent = score;
    document.getElementById('score').appendChild(card)
}
}

displayScore()
module.exports = {
    qPage,
    hPage,
    lPage,
    displayScore

}

