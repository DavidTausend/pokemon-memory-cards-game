// https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
function toggleModal(windowId, show) {
    let modalWindow = document.getElementById(windowId);
    modalWindow.style.display = show ? 'block' : 'none';
}

// Closing modals when clicking outside
Array.from(document.getElementsByClassName('window')).forEach(modal => {
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            toggleModal(modal.id, false);
        }
    });
});

// Close Windows
Array.from(document.getElementsByClassName('close-window')).forEach(button => {
    button.addEventListener('click', function() {
        let modal = this.closest('.window');
        toggleModal(modal.id, false);
    });
});

function submitName() {
    let playerName = document.getElementById("playerNameInput");

}