let minimum = 10;
$("#instruction").text("Enter a number greater than " + minimum + ".");

// .click(...) runs this function when #check-button is clicked.
$("#check-button").click(function () {
    // .val() reads the field as text; .trim() removes spaces at either end.
    let input = $("#number-input").val().trim();
    // Number(...) converts text to a number before we compare it.
    let number = Number(input);

    // Check empty input first: Number("") would otherwise become 0.
    if (input == "") {
        $("#result").text("Enter a number first.");
    }
    // isFinite(...) rejects failed conversions and infinity.
    else if (isFinite(number) == false) {
        $("#result").text("Enter a valid number.");
    }
    else if (number > minimum) {
        $("#result").text(number + " is greater than " + minimum + ".");
    }
    else {
        $("#result").text(number + " is not greater than " + minimum + ".");
    }
});

// The input event runs while editing; the previous check is now out of date.
$("#number-input").on("input", function () {
    $("#result").text("Not checked yet.");
});
