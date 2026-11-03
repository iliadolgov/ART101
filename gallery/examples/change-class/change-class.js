// $("#change-button") selects the button by its HTML ID.
// .click(...) runs this function each time that button is clicked.
$("#change-button").click(function () {
    // .toggleClass(...) switches the "changed" CSS class on or off.
    // The CSS rule #element.changed supplies its appearance.
    $("#element").toggleClass("changed");
});
