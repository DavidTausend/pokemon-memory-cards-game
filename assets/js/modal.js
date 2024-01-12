function showInstructions() {

    let instructionsWindow = document.getElementById("instructions");
    let span = document.getElementsByClassName("close-window")[0];

    // Open the instructions window (model)
    instructionsWindow.style.display = "block";

    // Close instructions window (model) when the user clicks on (x)
    span.onclick = function () {
        instructionsWindow.style.display = "none";
    }

    // Close the instructions window (model) when the user clicks anywhere outside of the window
    instructionsWindow.onclick = function (event) {
        if (event.target == instructionsWindow) {
            instructionsWindow.style.display = "none";
        }
    }
}

function showRules() {

    let rulesWindow = document.getElementById("rules");
    let span = document.getElementsByClassName("close-window")[0];

    // Open the instructions window (model)
    rulesWindow.style.display = "block";

    // Close instructions window (model) when the user clicks on (x)
    span.onclick = function () {
        rulesWindow.style.display = "none";
    }

    // Close the instructions window (model) when the user clicks anywhere outside of the window
    rulesWindow.onclick = function (event) {
        if (event.target == rulesWindow) {
            rulesWindow.style.display = "none";
        }
    }
}