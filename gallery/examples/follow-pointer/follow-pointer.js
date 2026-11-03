// Keep the mode outside the handlers so both events can use it.
let following = false;

// .click(...) runs this function when Start following is clicked.
$("#toggle-button").click(function () {
    // ! flips true to false, or false to true.
    following = !following;
    if (following == true) {
        $("#toggle-button").text("Stop following");
    }
    else {
        $("#toggle-button").text("Start following");
    }
});

// event supplies the pointer position for this movement.
$("#stage").mousemove(function (event) {
    if (following == true) {
        // Subtract the area's page position to get coordinates inside it.
        let x = event.pageX - $("#stage").offset().left;
        let y = event.pageY - $("#stage").offset().top;
        $("#dot").css("left", x);
        $("#dot").css("top", y);
    }
});
