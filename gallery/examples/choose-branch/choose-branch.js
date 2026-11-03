// Each property names a branch; its array lists the next choices.
let branches = {
    A: ["A1", "A2"],
    B: ["B1", "B2"]
};

// Remember the first choice between the two clicks.
let selectedBranch = "";

// for...in visits each property name in the object.
for (let branchName in branches) {
    let button = $("<button class='branch-choice' type='button'></button>");
    // .text(...) sets the label; .append(...) puts the button on the page.
    button.text(branchName);
    $("#branches").append(button);
}

// These buttons already exist, so .click(...) can attach to them directly.
$(".branch-choice").click(function () {
    // $(this) is the clicked button; its text is a key in branches.
    selectedBranch = $(this).text();
    // Brackets look up the array using the saved property name.
    let nextChoices = branches[selectedBranch];
    $("#next-heading").text("Continue from " + selectedBranch + ":");
    // Remove the previous buttons and result before building the new choices.
    $("#next-choices").empty();
    $("#result").text("");

    // Visit every array position, starting at 0.
    for (let i = 0; i < nextChoices.length; i = i + 1) {
        let button = $("<button class='next-choice' type='button'></button>");
        button.text(nextChoices[i]);
        $("#next-choices").append(button);
    }
    $("#next-step").show();
});

// Listen on the container so clicks on newly created buttons also work.
$("#next-choices").on("click", ".next-choice", function () {
    let nextChoice = $(this).text();
    $("#result").text("Path: " + selectedBranch + " → " + nextChoice + ".");
});
