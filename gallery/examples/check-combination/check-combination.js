// Each group remembers its own choice between clicks.
let selectedLetter = "";
let selectedNumber = "";

// .click(...) runs this function when a .letter button is clicked.
$(".letter").click(function () {
    // $(this) is the clicked button; .text() reads its text.
    selectedLetter = $(this).text();
    // Move the highlight within this group only.
    $(".letter").removeClass("selected");
    $(this).addClass("selected");
    // The previous result no longer describes the new selection.
    $("#result").text("Not checked yet.");
});

$(".number").click(function () {
    // This also reads text, so the saved number is "1" or "2".
    selectedNumber = $(this).text();
    $(".number").removeClass("selected");
    $(this).addClass("selected");
    $("#result").text("Not checked yet.");
});

// Selecting changes the choices; clicking Check evaluates them together.
$("#check-button").click(function () {
    // || means OR: either missing choice needs attention.
    if (selectedLetter == "" || selectedNumber == "") {
        $("#result").text("Choose one letter and one number.");
    }
    // && means AND: both comparisons must be true for a match.
    else if (selectedLetter == "A" && selectedNumber == "2") {
        $("#result").text("A + 2 matches.");
    }
    else {
        $("#result").text(selectedLetter + " + " + selectedNumber + " does not match.");
    }
});
