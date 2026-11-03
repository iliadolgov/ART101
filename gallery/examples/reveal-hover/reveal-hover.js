// .hover(...) takes two functions: entering first, leaving second.
$("#item").hover(
    function () {
        // Show the note when the pointer enters the item.
        $("#note").show();
    },
    function () {
        // Hide it again when the pointer leaves.
        $("#note").hide();
    }
);
