# Garden debugging demonstrations

Instructor notes — revised 16 November 2026

The five strategies and their order stay fixed. All five use the same Garden. Each demonstration introduces one fault into a fresh working copy, so faults do not accumulate.

The code follows the verified class style: let variables; .click(function () { ... }); familiar if / else conditions; concatenated HTML strings passed directly to .append(); .html() for output; selector-based .css(). There are no custom data objects, helper functions, detached jQuery element variables or const declarations. The reset button has its own short click handler.

## Start with the working page

Show 00-working/index.html before handing out the broken copies. Add six named creatures and use Start again once, then add another creature.

| Count | Message | Garden background |
|---|---|---|
| 0, on opening or reset | The garden is empty. | Cream |
| 1–2 | A quiet garden. | Pale green |
| 3–5 | The garden is getting lively. | Warm yellow |
| 6+ | It's getting crowded here. | Pink |

Each click adds one named creature and increases the count. Start again removes all creatures, sets count to 0 and restores the opening message and background. The next addition must start from 1. Use simple, non-empty names for this bounded exercise; input validation is not an additional lesson here.

The shared routine is: reproduce the problem → test one explanation → change one thing → repeat the original test. When a condition or reset is involved, test across its boundary and after restarting.

## 1. Check the foundations

Teach: “Am I testing the right files, and did everything load?”

Open 01/index.html. Both buttons do nothing. The page itself looks normal.

The HTML points to a file that does not exist:

~~~html
<script src="gardens.js"></script>
~~~

Your sequence:

1. Enter Moss and click Add creature. Try Start again too: neither action responds.
2. Check the browser address against the folder open in VS Code. Save and reload.
3. Open Console and reload. Read the failed gardens.js request. If useful, find the same request in Network after reloading.
4. Compare the requested path with the actual garden.js filename.
5. Correct the script link, save and reload. Add creatures and test reset.

Takeaway: check that the code reached the browser before investigating its logic. A local file may report a missing file rather than an HTTP 404; the evidence is the failed path, not one exact message.

## 2. Read the evidence

Teach: “What exactly is the browser telling me?”

Open 02/index.html. Add creature produces no visible creature and a ReferenceError.

The name variable is misspelled when building the HTML:

~~~js
let crName = $("#crName").val();
// Other existing statements remain here.
let crHtml = "<div class='creature'>" + crNmae + "</div>";
~~~

Your sequence:

1. Open Console and click Add creature.
2. Read “crNmae is not defined.” Follow its file and line reference.
3. Compare crNmae with the declaration crName near the top of the handler.
4. Correct the spelling. Save and reload to clear the effects of the failed attempt.
5. Repeat the action. Confirm a creature appears, the count becomes 1 and the error is gone.

Takeaway: the message narrows the search. A reported line shows where execution encountered a problem; its cause can be earlier. Here count has already increased internally before the exception, so reloading before the verification matters.

## 3. Narrow down the problem

Teach: “Where does the expected behaviour stop?”

Open 03/index.html. The count, message and background change, but no creatures appear. There is no JavaScript error.

The append statement selects a misspelled ID:

~~~js
$("#creature-lsit").append(crHtml);
~~~

Divide the handler into four sections: input and count; mood decision; HTML construction; page update. Add these checkpoints in the existing code, rather than replacing the code with logs:

~~~js
// After reading the name and increasing count:
console.log("1: input and count", crName, count);

// After the complete if / else block:
console.log("2: decision", message, gardenColor);

// After building crHtml:
console.log("3: HTML", crHtml);

// Immediately after the append statement:
console.log("4: append line passed");
~~~

Your sequence:

1. Add creatures and identify what already works: count, mood message and background.
2. Add the checkpoints, save, reload and click again. Read the name, count, chosen message/colour and HTML string.
3. Since those values are correct, concentrate on the statement that puts the HTML into the page.
4. Explain that passing that statement does not prove its selector found anything. In Console, compare:

~~~js
$("#creature-lsit").length  // 0
$("#creature-list").length  // 1
~~~

5. Compare with the HTML's id="creature-list", correct the selector, remove the logs and reload.
6. Add three creatures: their number must match the count, and the third must change the mood.

Takeaway: confirm sections, then narrow the search. A valid jQuery selector can match no elements without throwing an error. Keep the program intact while checking it; removing arbitrary chunks can create new missing-variable errors.

## 4. Inspect what actually happens

Teach: “What are the values, and which instructions actually run?”

Open 04/index.html. The garden stays quiet after the third addition and becomes lively only on the fourth. The expected transition is at 3.

The first condition includes 3 by mistake:

~~~js
if (count <= 3) {
  message = "A quiet garden.";
  gardenColor = "#e3efda";
}
~~~

Your sequence:

1. Add creatures through the fourth to reproduce the late transition. Reset.
2. With DevTools open, insert debugger; immediately before the first if statement, save and reload:

~~~js
let message = "";
let gardenColor = "";
debugger;
if (count <= 3) {
~~~

3. Add the first two creatures, using Resume when the debugger pauses.
4. On the third click, inspect count in Scope: it is 3. Ask which message should be selected now.
5. Use Step over to follow the condition. Observe that execution enters the quiet-garden branch. Step through its assignments and inspect message and gardenColor.
6. Compare count <= 3 with the intended count < 3. Correct the operator.
7. Remove debugger;, save and reload. Check counts 2, 3, 5 and 6, then reset and add one more.

If the pause initially highlights debugger itself, step to the if statement before following the condition. The highlighted statement is the next one to execute; step past an assignment before expecting its new value. Use Step over, not Step into, when passing jQuery calls.

Takeaway: a program can run without errors and still take the wrong path. The debugger exposes both its values and the path it takes. This replaces the earlier short-counter reset fault with a boundary fault that uses the accepted longer program; the strategy stays the same.

## 5. Simplify and compare

Teach: “Does this part work with a known, simple input?”

Open 05/index.html. On the first and second additions, names, count and the quiet-garden message work, but the garden remains cream. The other mood colours work.

The quiet-garden colour is missing its #:

~~~js
gardenColor = "e3efda";
~~~

Your sequence:

1. Reload and add one creature to reproduce the missing pale-green background.
2. Temporarily replace the existing colour update with a known valid value:

~~~js
$("#garden").css("background-color", "red");
~~~

3. Save, reload and add one creature. The garden turns red, showing that the selector and CSS-setting operation work.
4. Just before that line, inspect the original value:

~~~js
console.log("colour received:", gardenColor);
~~~

5. Compare e3efda with the valid CSS colour #e3efda. Correct the assignment in the quiet-garden branch.
6. Restore the original variable-based update and remove the log:

~~~js
$("#garden").css("background-color", gardenColor);
~~~

7. Reload and test all three moods, then reset. The opening background must also return.

Takeaway: temporarily supplying a known valid value separates the code using a value from the code supplying it. Red was an experiment; restoring the variable and testing every mood completes the repair.

## Team practice

The team-challenge folder uses the same page with several faults together. Give teams that folder and its README, without these instructor notes or the working answer.

One person edits while teammates propose explanations and checks; switch the keyboard after a repair. Keep the emphasis on choosing a useful check, making one change and verifying it. At the end, ask teams to show one clue that helped them locate a problem.

The README supplies intended behaviour, including the third and sixth additions and the first addition after reset. It does not identify the planted faults.

Instructor key — three faults:

1. The message update selects #mesage rather than #message. Repair the selector.
2. The lively branch uses count < 7 rather than count < 6. Correct the boundary; the sixth creature should make the garden crowded.
3. Reset clears the visible count to 0 but leaves the count variable unchanged. Restore count = 0 at the beginning of the reset handler. Using .html(count) again keeps the display explicitly tied to that variable.

These faults do not prevent the whole script from running. Teams can investigate them in different orders. The working baseline is the answer key; no new submission or grading requirement is added.

## Files and use

- 00-working: the complete working Garden and repair reference.
- 01–05: the five separate broken demonstrations in the fixed strategy order.
- team-challenge: the combined team exercise and student-facing expected behaviour.
- instructor-notes.md: a copy of this guide inside the package.

Every exercise folder contains index.html, style.css, garden.js and the official jQuery 3.7.1 file. Extract the ZIP first, then open a folder's index.html in the browser and its garden.js in VS Code. The exercises work locally without a server or internet connection. Keep the whole selected exercise folder together.

The distributed broken pages contain their ordinary code and section comments, but no comments identifying the planted errors. Diagnostic logs and debugger; are added during the demonstrations, not preinserted.

## Working JavaScript

~~~js
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
~~~

## Working HTML

~~~html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Small Creature Garden</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main>
    <h1>Small Creature Garden</h1>
    <p>Give a creature a name and add it to the garden.</p>
    <div class="controls">
      <label for="crName">Name</label>
      <input id="crName" type="text" value="Moss">
      <button id="crAdd" type="button">Add creature</button>
      <button id="reset" type="button">Start again</button>
    </div>
    <p>Creatures: <span id="count">0</span></p>
    <section id="garden" aria-label="Creature garden">
      <p id="message">The garden is empty.</p>
      <div id="creature-list"></div>
    </section>
  </main>
  <script src="jquery-3.7.1.min.js"></script>
  <script src="garden.js"></script>
</body>
</html>
~~~

## Teaching sources and status

The coding patterns were checked in this conversation against Lecture 12 slide 13, Lecture 13 slide 9, Lab 4 and the instructor's ex04.js clicker: let declarations, .click(), concatenated HTML, .append(), .html() and selector-based .css(). The added population conditions follow the clicker's count-dependent responses. Lab 7 supplies the Console, one-change-at-a-time testing and debugging/refactoring distinction. Lecture 14 slide 22 mentions debugger;.

References: https://developer.chrome.com/docs/devtools/javascript/ and https://developer.chrome.com/docs/devtools/javascript/breakpoints

The five-strategy series, class coding style and population/reset extension are instructor-approved. This guide implements them; it adds no course policy, grading requirement or publication. GitHub collaboration remains a separate part of the class. The old short version remains in the document's version history.

Validation: Automated DOM/JavaScript checks using jsdom 26.1.0 and the bundled official jQuery 3.7.1 passed for the working page, each planted fault, every specified repair, the known-red diagnostic experiment, and all three team faults and repairs. Checks covered the opening state, counts 1–7, all mood colours/messages, reset, and the first addition after reset. The debugger example's values and branch result were checked. Chromium could not launch in this environment, so visual browser rendering and the live Chrome DevTools pause/step workflow remain unverified. Rehearse that walkthrough before class.
