// Outside the handler so the count is remembered between clicks.
let count = 0;
let threshold = 5;

$("#instruction").text("The response changes at " + threshold + " clicks.");

// .click(...) runs this function when #count-button is clicked.
$("#count-button").click(function () {
    // Add one before displaying or checking the updated count.
    count = count + 1;
    $("#count").text(count);

    // >= means greater than or equal to, so this also works past the threshold.
    if (count >= threshold) {
        $("#result").text("Threshold reached.");
    }
    else {
        $("#result").text("Below the threshold.");
    }
});
