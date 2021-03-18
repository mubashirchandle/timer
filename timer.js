// Multiply the required seconds by 10 to allow the timer to run in 100 ms intervals for better responsiveness in tab-change detection.
var TIMER_DURATION = 60 * 10;

function startTimer(callback) {
    var timeLeft = TIMER_DURATION;

    var timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            callback(0);
        }

        // As the time is multiplied by 10 for responsiveness, divide it by 10 again for accurate display in seconds.
        document.getElementById("timer_text").innerHTML = Math.ceil(timeLeft / 10);
        timeLeft -= 1;

        if (!document.hasFocus()) {
            clearInterval(timer);
            callback(Math.ceil(timeLeft / 10));
        }
    }, 100);
}

startTimer((timeLeft) => {
    document.getElementById("timer_text").hidden = true;

    if (timeLeft == 0) {
        document.getElementById("status").innerHTML = "Timer Finished!";
    } else {
        document.getElementById("status").innerHTML = "Timer Interrupted at " + timeLeft + "!";
        document.body.classList.add("paused");
    }
});
