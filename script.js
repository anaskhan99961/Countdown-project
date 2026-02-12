let time = 10;
let timer;

function updateTimer() {
    document.getElementById("timer").innerHTML = time;

    if (time === 0) {
        clearInterval(timer);
        alert("Time's up!");
        return;}
    time--;}
function startCountdown() {
    time = 10;
    timer = setInterval(updateTimer, 1000);}
