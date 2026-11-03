// Each object keeps one item's related values under named properties.
let itemA = {
    name: "Striped circle",
    description: "A light circle with three dark stripes.",
    image: "striped-circle.svg"
};

let itemB = {
    name: "Dotted square",
    description: "A dark square with four light dots.",
    image: "dotted-square.svg"
};

// The parameter item receives whichever object we pass to this function.
function showItem(item) {
    // The dot reads a property; .text(...) displays its value.
    $("#detail-name").text(item.name);
    $("#detail-description").text(item.description);
    // .attr(...) changes the image's file path and alternative text.
    $("#detail-image").attr("src", item.image);
    $("#detail-image").attr("alt", item.name);
}

// .click(...) runs this function when #item-a is clicked.
$("#item-a").click(function () {
    showItem(itemA);
});

$("#item-b").click(function () {
    showItem(itemB);
});

// Display the first item's details when the page opens.
showItem(itemA);
