// Gallery controls only. Each example has its own separate JavaScript file.
document.querySelectorAll("[data-copy]").forEach(function (button) {
    button.addEventListener("click", function () {
        let code = document.getElementById(button.getAttribute("data-copy"));
        let originalLabel = button.textContent;

        function showCopyResult(copied) {
            button.textContent = copied ? "Copied" : "Select code to copy";
            window.setTimeout(function () {
                button.textContent = originalLabel;
            }, 1800);
        }

        // Local-file browsers may need the older text-field copying method.
        function copyUsingTextField() {
            let field = document.createElement("textarea");
            field.value = code.textContent;
            field.style.position = "fixed";
            field.style.left = "-9999px";
            document.body.appendChild(field);
            field.select();
            let copied = document.execCommand("copy");
            field.remove();
            button.focus();
            showCopyResult(copied);
        }

        if (navigator.clipboard) {
            navigator.clipboard.writeText(code.textContent).then(function () {
                showCopyResult(true);
            }).catch(copyUsingTextField);
        }
        else {
            copyUsingTextField();
        }
    });
});

let restartButton = document.getElementById("restart-example");
if (restartButton) {
    restartButton.addEventListener("click", function () {
        let example = document.getElementById("live-example");
        example.src = example.getAttribute("src");
    });
}
