let choices = ["Circle", "Square", "Triangle", "Line"];

// .click(...) runs this function when #pick-button is clicked.
$("#pick-button").click(function () {
    // Math.random() is at least 0 and below 1.
    // Multiplying by .length spreads the values across the list.
    let randomNumber = Math.random() * choices.length;
    // Math.floor(...) rounds down to a valid array position.
    let randomIndex = Math.floor(randomNumber);
    // Square brackets read the choice at that position.
    let chosenItem = choices[randomIndex];
    $("#result").text(chosenItem);
});
