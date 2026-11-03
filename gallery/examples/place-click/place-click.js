// event supplies the position of this click.
$("#stage").click(function (event) {
    // Convert page coordinates to coordinates inside this area.
    let x = event.pageX - $("#stage").offset().left;
    let y = event.pageY - $("#stage").offset().top;

    // Create a new mark for every click, keeping the earlier marks.
    let mark = $("<div class='mark'></div>");
    mark.css("left", x);
    mark.css("top", y);
    $("#stage").append(mark);
});
