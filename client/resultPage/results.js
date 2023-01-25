const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
document.querySelector("#retry").addEventListener("click", qPage);
function qPage() {
    window.location.href="/questionPage/questionPage.html";
}
document.querySelector("#home").addEventListener("click", hPage);
function hPage() {
    window.location.href="/homePage/index.html";
}
document.querySelector("#leader").addEventListener("click", lPage);
function lPage() {
    window.location.href="/questionPage/questionPage.html";
}
function displayScore () {
        const card = document.createElement("div")

        const score = urlParams.get('score')
        const name = urlParams.get("name")
        card.textContent = `${name} your score is ${score}`
    document.getElementById('scores').appendChild(card)
}



 displayScore()
 module.exports = {
     qPage,
     hPage,
     lPage,
     displayScore

 }

