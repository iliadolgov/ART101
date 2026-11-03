// Keep the current turn outside the handlers so both buttons can check it.
let turn = "A";
$("#turn").text(turn + "'s turn.");

// .click(...) runs this function when #button-a is clicked.
$("#button-a").click(function () {
    // == compares the current turn with "A".
    if (turn == "A") {
        $("#result").text("A took a turn.");
        // = assigns a new value, giving the next turn to B.
        turn = "B";
        $("#turn").text("B's turn.");
    }
    else {
        // An out-of-turn click gives feedback without changing turn.
        $("#result").text("Wait for B.");
    }
});

$("#button-b").click(function () {
    if (turn == "B") {
        $("#result").text("B took a turn.");
        turn = "A";
        $("#turn").text("A's turn.");
    }
    else {
        $("#result").text("Wait for A.");
    }
});
