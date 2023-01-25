const { TestEnvironment } = require("jest-environment-jsdom");

function gameOne() {
    window.location.href="/homePage/test-page.html";
}

function userRecord() {
    window.location.href="/homePage/user-records.html";
}

function leaderBoard() {
    window.location.href="/homePage/leaderboard.html";
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
