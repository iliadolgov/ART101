// jQuery returns a collection; [0] gets the audio element itself.
let sound = $("#sound")[0];

// .click(...) runs this function when Play is clicked.
$("#play-button").click(function () {
    sound.play(); // Start or resume from the current position.
});

$("#pause-button").click(function () {
    sound.pause(); // Keep the current playback position.
});

$("#stop-button").click(function () {
    sound.pause();
    sound.currentTime = 0; // Playback positions are measured in seconds.
    $("#status").text("Not playing.");
});

// These events report the audio's state, not just a button click.
$("#sound").on("playing", function () {
    $("#status").text("Playing.");
});
$("#sound").on("pause", function () {
    $("#status").text("Not playing.");
});
$("#sound").on("ended", function () {
    $("#status").text("Finished.");
});
