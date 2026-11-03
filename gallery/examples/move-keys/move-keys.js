let x = 0;
let y = 0;
let step = 20;

// This area receives keys while focused; event.key names the pressed key.
$("#stage").keydown(function (event) {
    if (event.key == "ArrowRight") {
        x = x + step;
    }
    else if (event.key == "ArrowLeft") {
        x = x - step;
    }
    else if (event.key == "ArrowDown") {
        y = y + step;
    }
    else if (event.key == "ArrowUp") {
        y = y - step;
    }
    else {
        return; // Leave other keys to the browser.
    }
    // Arrow keys move this item instead of scrolling the page.
    event.preventDefault();

    // Leave room for the whole item at the right and bottom edges.
    let maxX = $("#stage").width() - $("#item").outerWidth();
    let maxY = $("#stage").height() - $("#item").outerHeight();
    if (x < 0) { x = 0; }
    if (x > maxX) { x = maxX; }
    if (y < 0) { y = 0; }
    if (y > maxY) { y = maxY; }

    $("#item").css("left", x);
    $("#item").css("top", y);
});
