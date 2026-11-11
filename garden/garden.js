// movement setting
let creaturesCount=0;
let creaturesFocus;
let x = 0;
let y = 0;
let step = 50;

let creaturesPositions= [ 
[0,0],
[0,0],
[0,0],
[0,0],
[0,0],
[0,0],
];

$("#MC1").on("click", function() { 
  console.log("hmove creatureey");
  creaturesFocus="item1";
});
$("#MC2").on("click", function() { 
  console.log("hmove creatureey");
  creaturesFocus="item2";
});


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
        creaturesCount=creaturesCount+1;
        let item = $("<div class='items' id='item"+creaturesCount+"'></div>");
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




// This area receives keys while focused; event.key names the pressed key.
$("#items").keydown(function (event) {
    if (event.key == "ArrowRight") {
        x = x + step;
        console.log("R "+x);
    }
    else if (event.key == "ArrowLeft") {
        x = x - step;
        console.log("L "+x);
    }
    else if (event.key == "ArrowDown") {
        y = y + step;
        console.log("D "+y);
    }
    else if (event.key == "ArrowUp") {
        y = y - step;
        console.log("U "+y);
    }
    else {
        return; // Leave other keys to the browser.
    }

    // Arrow keys move this item instead of scrolling the page.
    event.preventDefault();

    // Leave room for the whole item at the right and bottom edges.
    let maxX = $("#items").width() - $("#item").outerWidth();
    let maxY = $("#items").height() - $("#item").outerHeight();
    if (x < 0) { x = 0; }
    if (x > maxX) { x = maxX; }
    if (y < 0) { y = 0; }
    if (y > maxY) { y = maxY; }

    $("#"+creaturesFocus).css("left", x);
    $("#"+creaturesFocus).css("top", y);
});