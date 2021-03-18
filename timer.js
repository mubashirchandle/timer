var TIMER_DURATION = 60;

function startTimer() {
    var timeLeft = TIMER_DURATION;

    var timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
        }

        document.getElementById("timer_text").innerHTML = timeLeft;
        timeLeft -= 1;

        if (!document.hasFocus()) {
            startTimer();
            timeLeft = 0;
        }
    }, 1000);
}

startTimer();
