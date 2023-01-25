const { TestEnvironment } = require("jest-environment-jsdom");

function gameOne() {
    document.querySelector("#gameOne").addEventListener("click", gameOne);
    window.location.href="test-page.html";
}

function userRecord() {
    document.querySelector("#userRecord").addEventListener("click", userRecord);
    window.location.href="test-page.html";
}

function leaderBoard() {
    document.querySelector("#leaderBoard").addEventListener("click", leaderBoard);
    window.location.href="leaderboard.html";
}

function heading() {
    // const h1 = document.createElement("h1");
    heading.textContent = "Brain Playground";
    document.getElementById("#heading").textContent("Brain Playground");
    h1.appendChild(h1);
}



module.exports = {
    gameOne,
    userRecord,
    leaderBoard,
    heading
}
