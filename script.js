let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;
let display = document.querySelector('.display');

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.textContent = '00:00:00';
}

function updateTimer() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedHours = hours < 10 ? '0' + hours : hours;

    display.textContent = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
}
