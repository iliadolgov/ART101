let messages = [
    "First message.",
    "Second message.",
    "Third message. End of sequence."
];

// Array positions start at 0; remember our position between clicks.
let messageIndex = 0;
$("#message").text(messages[messageIndex]);

// .click(...) runs this function when #next-button is clicked.
$("#next-button").click(function () {
    // .length counts the messages; the last position is one less.
    if (messageIndex < messages.length - 1) {
        messageIndex = messageIndex + 1;
        // Read the message at the new position and display it.
        $("#message").text(messages[messageIndex]);
    }
});

$("#restart-button").click(function () {
    // Reset both the saved position and the displayed message.
    messageIndex = 0;
    $("#message").text(messages[messageIndex]);
});
