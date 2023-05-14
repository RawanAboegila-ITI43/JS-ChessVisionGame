////
// Elements & Global Variables 
////

var score = document.getElementById("scoreValue");
var startBtn = document.getElementById("startBTN");
var timer = document.getElementById("timerValue");
var position = document.getElementById("positionValue");
var chessboard = document.getElementById("board");
let points, timerCount, alph, num, randomPos;

////
// Helper Functions 
////
function initialize() {
    points = 0;
    score.value = `${points}`;
    timerCount = 30;
    alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    num = [1, 2, 3, 4, 5, 6, 7, 8];


    for (const element of document.getElementsByClassName('box')) {
        element.style.cursor = "pointer";
    }

}
function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
}
function setRandomPos() {
    randomPos = `${alph[getRandomIndex(alph.length)]}${num[getRandomIndex(num.length)]}`;
    position.value = `${randomPos}`;
}
function reset() {
    chessboard.removeEventListener("click", choiceHandler);
    startBtn.innerHTML = "Start";
    for (const element of document.getElementsByClassName('box')) {
        element.style.cursor = "default";
    }
    position.classList.remove("correct");
    position.classList.remove("wrong");
    position.value = "";

}

////
// Main Functions 
////

function choiceHandler(event) {
    if (randomPos === event.target.id) {
        console.log(event.target.id);
        points += 5;
        score.value = points;
        position.classList.remove("wrong");
        position.classList.add("correct");
        setRandomPos();
    }
    else {
        console.log("wrong");
        position.classList.remove("correct");
        position.classList.add("wrong");
    }
};
function gameTimer() {
    startBtn.innerHTML = "Restart";
    let counter = setInterval(() => {

        timer.value = ` ${timerCount} Seconds`;

        timerCount--;

        if (timerCount <= 0) {
            timer.value = "Timeout";
            clearInterval(counter);
            reset();

        }
    }, 1000);

}

function startGame() {

    initialize();
    chessboard.addEventListener("click", choiceHandler);
    gameTimer();
    setRandomPos();



}

////
// Events Attachments 
////

startBtn.addEventListener("click", startGame)
