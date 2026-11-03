// Every record stays in this array, even while it is hidden by a filter.
let items = [
    { name: "A", shape: "circle" },
    { name: "B", shape: "square" },
    { name: "C", shape: "circle" },
    { name: "D", shape: "square" }
];

// filter receives "all", "circle" or "square" from the selector.
function showItems(filter) {
    $("#items").empty();
    let shownCount = 0;

    for (let i = 0; i < items.length; i = i + 1) {
        let item = items[i];
        // || means OR: show everything, or only the matching shape.
        if (filter == "all" || item.shape == filter) {
            let element = $("<div class='item'></div>");
            element.text(item.name);
            // The shape value selects the CSS class for this item.
            element.addClass(item.shape);
            $("#items").append(element);
            shownCount = shownCount + 1;
        }
    }
    // Count the visible items separately from the unchanged array length.
    $("#count").text("Showing " + shownCount + " of " + items.length);
}

// .change(...) runs when a different option is selected.
$("#shape-filter").change(function () {
    // $(this) is the selector; .val() reads the selected value.
    showItems($(this).val());
});

showItems("all");
