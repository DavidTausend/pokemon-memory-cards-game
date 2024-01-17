// https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
function toggleModal(windowId, show) {
    let modalWindow = document.getElementById(windowId);
    modalWindow.style.display = show ? 'block' : 'none';
}

// Closing modals when clicking outside
Array.from(document.getElementsByClassName('window')).forEach(modal => {
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            toggleModal(modal.id, false);
        }
    });
});

// Close Windows
Array.from(document.getElementsByClassName('close-window')).forEach(button => {
    button.addEventListener('click', function () {
        let modal = this.closest('.window');
        toggleModal(modal.id, false);
    });
});

function submitName() {
    let playerNameInput = document.getElementById("playerNameInput");
    let playerName = playerNameInput.value;

    // Regular expression to allow only letters and spaces
    let nameRegex = /^[A-Za-z\s]+$/;

    if (playerName === '') {
        alert('Please enter your name.');
        return;
    }

    // Regular expression matches the player name
    if (!nameRegex.test(playerName)) {
        alert('Your name must contain only letters and spaces.');
        return;
    }
    localStorage.setItem("playerName", playerName);
    window.location.href = 'game.html';
}