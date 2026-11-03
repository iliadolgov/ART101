// Save the timer ID so a later click can cancel the pending hide.
let hideTimer = null;

// .click(...) runs this function when Show message is clicked.
$("#show-button").click(function () {
    clearTimeout(hideTimer);
    $("#message").text("Message shown.");

    // Run this function once after 2000 milliseconds (2 seconds).
    hideTimer = setTimeout(function () {
        $("#message").text("");
    }, 2000);
});
