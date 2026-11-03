// A Boolean is true or false. Keep it outside the handlers to remember it.
let isReady = false;

// .click(...) runs this function when #prepare-button is clicked.
$("#prepare-button").click(function () {
    isReady = true;
    $("#result").text("Prepared. You can use it now.");
});

$("#use-button").click(function () {
    // Check the value saved by the earlier action.
    if (isReady == true) {
        $("#result").text("Used.");
    }
    else {
        $("#result").text("Prepare it first.");
    }
});
