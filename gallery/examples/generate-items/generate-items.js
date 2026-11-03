// .click(...) runs this function when Generate is clicked.
$("#generate-button").click(function () {
    // Read the field as a number; .val() alone returns text.
    let quantity = Number($("#quantity").val());

    // != means not equal; rounding down leaves whole numbers unchanged.
    if (quantity < 1 || quantity > 12 || quantity != Math.floor(quantity)) {
        $("#message").text("Enter a whole number from 1 to 12.");
        // Stop this handler before clearing the previous set.
        return;
    }

    $("#message").text("");
    // Clear once, before the loop, so this run replaces the previous set.
    $("#items").empty();

    // Start at 0, repeat while i is below quantity, and add 1 each time.
    for (let i = 0; i < quantity; i = i + 1) {
        let item = $("<div class='item'></div>");
        // The loop starts at 0; visible numbering starts at 1.
        item.text(i + 1);
        $("#items").append(item);
    }
});
