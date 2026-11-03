// Outside both handlers so the choice lasts between clicks.
let selectedStamp = "";

// .click(...) runs this function when either .stamp button is clicked.
$(".stamp").click(function () {
    // $(this) is the clicked stamp; its ID is also a shape class name.
    selectedStamp = $(this).attr("id");
    // Move the selection highlight from the old choice to the new one.
    $(".stamp").removeClass("selected");
    $(this).addClass("selected");
    $("#result").text("Selected: " + selectedStamp + ". Click a target.");
});

$(".target").click(function () {
    // An empty string means no stamp has been chosen yet.
    if (selectedStamp == "") {
        $("#result").text("Choose a stamp first.");
    }
    else {
        // .find(...) selects the mark inside this clicked target.
        // Remove its old shape before applying the saved choice.
        $(this).find(".mark").removeClass("circle square");
        $(this).find(".mark").addClass(selectedStamp);
        $("#result").text("Applied " + selectedStamp + ".");
        // Keep selectedStamp so it can be used again.
    }
});
