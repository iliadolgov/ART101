// Messages and counters
let messagesA = [
    "Hello, B.",
    "Let's change something on this page.",
    "Should we make it green or pink?"
];

let messagesB = [
    "Hello, A.",
    "Okay. You ask, I'll choose."
];

let nextMessageA = 0;
let nextMessageB = 0;

let turn = "A";

$("#turn-message").html("A's turn.");


// Add one paragraph to the chat
function addMessage(text) {
    $("#chat").append("<p>" + text + "</p>");
}


// Click A
$("#character-a").click(function() {
    if (turn == "A") {
        addMessage("A: " + messagesA[nextMessageA]);

        nextMessageA = nextMessageA + 1;

        if (nextMessageA == 3) {
            turn = "answer";

            $("#answers").css("display", "flex");
            $("#turn-message").html("Choose B's answer.");
        }
        else {
            turn = "B";
            $("#turn-message").html("B's turn.");
        }
    }
});


// Click B
$("#character-b").click(function() {
    if (turn == "B") {
        addMessage("B: " + messagesB[nextMessageB]);

        nextMessageB = nextMessageB + 1;

        turn = "A";
        $("#turn-message").html("A's turn.");
    }
});


// Choose green
$("#answer-green").click(function() {
    if (turn == "answer") {
        addMessage("B: Green, please.");

        $("body").css("background-color", "lightgreen");

        turn = "finished";
        $("#answers").css("display", "none");
        $("#turn-message").html("The end.");
    }
});


// Choose pink
$("#answer-pink").click(function() {
    if (turn == "answer") {
        addMessage("B: Pink, please.");

        $("body").css("background-color", "pink");

        turn = "finished";
        $("#answers").css("display", "none");
        $("#turn-message").html("The end.");
    }
});