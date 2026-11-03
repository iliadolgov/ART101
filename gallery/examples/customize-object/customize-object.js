// .click(...) runs this function when #apply-button is clicked.
$("#apply-button").click(function () {
    // .val() reads a control's current value when Apply is clicked.
    let objectLabel = $("#object-label").val();
    let objectColor = $("#object-color").val();
    let objectShape = $("#object-shape").val();

    // .text(...) shows the label literally, including < and >.
    $("#preview-label").text(objectLabel);
    // .css(property, value) changes this object's background color.
    $("#object").css("background-color", objectColor);

    // Remove the old shape class, then add the chosen one.
    $("#object").removeClass("square circle");
    $("#object").addClass(objectShape);
});
