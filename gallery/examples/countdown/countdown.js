let startingSeconds = 5;
let seconds = startingSeconds;
// null means there is no running interval.
let timer = null;
$("#seconds").text(seconds);

// .click(...) runs this function when Start is clicked.
$("#start-button").click(function () {
    // Start only one interval, and only while time remains.
    if (timer == null && seconds > 0) {
        // Repeat this function every 1000 milliseconds (1 second).
        timer = setInterval(function () {
            seconds = seconds - 1;
            $("#seconds").text(seconds);
            if (seconds == 0) {
                clearInterval(timer);
                timer = null;
            }
        }, 1000);
    }
});

$("#stop-button").click(function () {
    // Stop ticking but keep the remaining seconds for the next Start.
    clearInterval(timer);
    timer = null;
});

$("#reset-button").click(function () {
    clearInterval(timer);
    timer = null;
    seconds = startingSeconds;
    $("#seconds").text(seconds);
});
