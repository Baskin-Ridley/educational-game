
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
    window.location.href="test-page.html";
}


module.exports = {
    gameOne,
    userRecord,
    leaderBoard
}
