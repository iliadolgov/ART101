// .click(...) runs this function when the Add button is clicked.
$("#add-button").click(function () {
    // .val() reads the field; .trim() removes spaces at either end.
    let label = $("#item-label").val().trim();
    let objectColor = $("#object-color").val();
    console.log(objectColor);

    let labelLength=label.length;

    console.log(labelLength);

    if (  ( label == "" ) || ( labelLength>20 ) ) {
        $("#message").text("Creature's name should be not empty or longer than 20 characters ");
    }
    else {
        // HTML inside $(...) creates a new element, not yet on the page.
        let item = $("<li></li>");
        item.css("background-color", objectColor);
        // .text(...) sets its label literally, including < and >.
        item.text(label);
        // .append(...) adds it after the existing list items.
        $("#items").append(item);
        // .css(property, value) changes this object's background color.
        
        
        $("#item-label").val("");
        $("#item-label").focus();
        $("#message").text("");
    }
});