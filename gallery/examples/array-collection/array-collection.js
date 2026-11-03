// This array holds the collection between clicks.
let items = ["A", "B"];

// Rebuild the visible list from the current array.
function showItems() {
    $("#items").empty();
    for (let i = 0; i < items.length; i = i + 1) {
        let row = $("<li></li>");
        let label = $("<span></span>");
        label.text(items[i]);
        let removeButton = $("<button type='button'>Remove</button>");
        removeButton.addClass("remove-button");
        // Store the current array position on this button.
        removeButton.attr("data-index", i);
        removeButton.attr("aria-label", "Remove " + items[i]);
        row.append(label);
        row.append(removeButton);
        $("#items").append(row);
    }
    $("#count").text("Items: " + items.length);
}

// .click(...) runs this function when Add is clicked.
$("#add-button").click(function () {
    let label = $("#item-label").val().trim();
    if (label == "") {
        $("#message").text("Enter a label.");
    }
    else {
        // .push(...) adds to the array; showItems() updates the page.
        items.push(label);
        showItems();
        $("#item-label").val("");
        $("#item-label").focus();
        $("#message").text("");
    }
});

// Listen on the list because its Remove buttons are rebuilt each time.
$("#items").on("click", ".remove-button", function () {
    // Read the clicked button's position; Number converts the attribute text.
    let index = Number($(this).attr("data-index"));
    // .splice(index, 1) removes one entry at that position.
    items.splice(index, 1);
    // Redrawing also gives the remaining buttons their new positions.
    showItems();
});

showItems();
