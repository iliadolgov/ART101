// $("#show-button") selects the button by its HTML ID.
// .click(...) runs this function each time that button is clicked.
$("#show-button").click(function () {
    // .show() makes #element visible, overriding its initial display: none.
    $("#element").show();
});

// Run this function when the Hide button is clicked.
$("#hide-button").click(function () {
    // .hide() hides the element without removing it from the HTML.
    $("#element").hide();
});
