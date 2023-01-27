
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

// tests won't run unless the below is wrapped like this and I don't know why
document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("#retry").addEventListener("click", qPage);
    document.querySelector("#home").addEventListener("click", hPage);
    document.querySelector("#leader").addEventListener("click", lPage);
    displayScore();
})

function qPage() {
    window.location.href="/settings.html";
}
function hPage() {
    window.location.href="./index.html";
}
function lPage() {
    window.location.href="./leaderboard.html";
}
function displayScore () {
    const card = document.createElement("div")

    const score = urlParams.get('score')
    const name = urlParams.get("name")
    card.textContent = `${name} your score is ${score}`
    document.getElementById('scores').appendChild(card)
}


module.exports = {
    qPage,
    hPage,
    lPage,
    displayScore

}
