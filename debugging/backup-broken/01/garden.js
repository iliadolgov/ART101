let count = 0;

$("#crAdd").click(function () {
  // Read the input and update the count.
  let crName = $("#crName").val();
  count = count + 1;

  // Decide how the garden should respond.
  let message = "";
  let gardenColor = "";

  if (count < 3) {
    message = "A quiet garden.";
    gardenColor = "#e3efda";
  } else if (count < 6) {
    message = "The garden is getting lively.";
    gardenColor = "#fff0bb";
  } else {
    message = "It's getting crowded here.";
    gardenColor = "#f5d4dd";
  }

  // Build the HTML and update the page.
  let crHtml = "<div class='creature'>" + crName + "</div>";
  $("#creature-list").append(crHtml);
  $("#count").html(count);
  $("#message").html(message);
  $("#garden").css("background-color", gardenColor);
});

$("#reset").click(function () {
  count = 0;
  $("#creature-list").html("");
  $("#count").html(count);
  $("#message").html("The garden is empty.");
  $("#garden").css("background-color", "#f3f1e8");
});
