document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('start-game-button').addEventListener('click', function () {
        resetGame();
        toggleModal('name-modal', true);
    });
    document.getElementById('instructions-button').addEventListener('click', function () {
        toggleModal('instructions', true);
    });
    document.getElementById('rules-button').addEventListener('click', function () {
        toggleModal('rules', true);
    });
    document.getElementById('restart-button').addEventListener('click', restart);
    document.getElementById('toggle-music-button').addEventListener('click', toggleMusic);
    document.getElementById('quit-game-button').addEventListener('click', showConfirmation);
    document.getElementById('confirm-action-button').addEventListener('click', confirmAction);
    document.getElementById('cancel-action-button').addEventListener('click', cancelAction);
    document.getElementById('play-again').addEventListener('click', restart);
    document.getElementById('submit-name-button').addEventListener('click', submitName);

    // Event listener for the close button in the high score window
    let closeHighScoreWindow = document.getElementById("winner").getElementsByClassName("close-window")[0];
    if (closeHighScoreWindow) {
        closeHighScoreWindow.addEventListener('click', function () {
            document.getElementById("winner").style.display = "none";
            document.getElementsByClassName('introduction')[0].style.display = 'block';
            document.getElementsByClassName('button-column')[0].style.display = 'block';
            document.getElementsByClassName('content-container')[0].style.display = 'none';
        });
    }

    function resetGame() {
        currentScore = 0;
        document.getElementById("score").innerText = currentScore;
        matchedCards = 0;
        const cards = Array.from(document.getElementsByClassName("card"));
        cards.forEach(card => {
            card.classList.remove("clicked", "checked", "shake");
        });
        resetTimer();
        selectAndDisplayCards();

        // Hide main menu, show game
        document.getElementsByClassName('introduction')[0].style.display = 'none';
        document.getElementsByClassName('button-column')[0].style.display = 'none';
        document.getElementsByClassName('content-container')[0].style.display = 'block';
    }
});

// Modal
function toggleModal(windowId, show) {
    let modalWindow = document.getElementById(windowId);
    modalWindow.style.display = show ? 'block' : 'none';
}

// Closing modals when clicking outside
Array.from(document.getElementsByClassName('window')).forEach(modal => {
    modal.addEventListener('click', function (event) {
        if (event.target === modal && modal.id !== "name-modal") {
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
    let playerNameInput = document.getElementById("player-name-input");
    let playerName = playerNameInput.value;

    // Regular expression to allow only letters and spaces
    let nameRegex = /^[A-Za-z\s]+$/;
    if (playerName === '') {
        alert('Please enter your name.');
        return;
    }

    // Regular expression matches the player name
    if (nameRegex.test(playerName)) {
        localStorage.setItem("playerName", playerName);

        // Close Name Modal
        let nameModal = document.getElementById("name-modal");
        nameModal.style.display = 'none';

        // Hide the start game and show the game
        document.getElementsByClassName('introduction')[0].style.display = 'none';
        document.getElementsByClassName('button-column')[0].style.display = 'none';
        document.getElementsByClassName('content-container')[0].style.display = 'block';
    } else {
        alert('Invalid name. Please use only letters and spaces.');
    }
}

// Music Setting
function musicSettings() {
    let musicSettingsWindow = document.getElementById("music");
    let span = document.getElementsByClassName("close-window")[0];
    musicSettingsWindow.style.display = "block";
    span.onclick = function () {
        musicSettingsWindow.style.display = "none";
    };
    musicSettingsWindow.onclick = function (event) {
        if (event.target == musicSettingsWindow) {
            musicSettingsWindow.style.display = "none";
        }
    };
}

// Play music game
let audio = document.getElementById("audio");

// Default volume 0%
audio.volume = 0;

function toggleMusic() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function sliderChange(value) {
    let volume = value / 100;

    // Set the volume to the audio
    audio.volume = volume;

    // Save the volume in local storage
    localStorage.setItem("musicVolume", volume);

    // Update the display value
    document.getElementById("sliderValue").textContent = value;
}
// End of Music Settings

// shuffleArray
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Select the pokemon cards and display them
let cardsArray = [];

function selectAndDisplayCards() {

    // Pokemon List
    const allPokemon = ["blastoise", "bulbasaur", "charmander", "cubone", "eevee", "flareon", "ivysaur", "newtwo", "persian", "pichu", "pikachu", "pokemons", "raichu"];

    // Select randomly 9 pokemons
    let selectedPokemon = [];
    while (selectedPokemon.length < 9) {
        const randomIndex = Math.floor(Math.random() * allPokemon.length);
        const pokemon = allPokemon[randomIndex];
        if (!selectedPokemon.includes(pokemon)) {
            selectedPokemon.push(pokemon);
        }
    }

    // Duplicate each Pokemon to make 18 cards
    selectedPokemon = selectedPokemon.concat(selectedPokemon);

    // Shuffle the cards
    shuffleArray(selectedPokemon);

    const cardContainer = document.getElementsByClassName("cards")[0];
    // Clear existing cards
    cardContainer.innerHTML = '';
    selectedPokemon.forEach(pokemon => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("data-pokemon", pokemon);
        const imgElement = document.createElement("img");
        imgElement.src = `assets/images/cards/${pokemon}.webp`;
        imgElement.alt = `${pokemon} pokemon`;
        cardElement.appendChild(imgElement);
        cardContainer.appendChild(cardElement);
    });
    cardsArray = Array.from(document.getElementsByClassName("card"));

    // Focus the first card for the keyboard
    if (cardsArray.length > 0) {
        cardsArray[0].focus();
    }
    attachCardEventListeners();
}

let currentFocusIndex = 0;

function attachCardEventListeners() {

    // Set tabindex for the first card to '0' and others to '-1'
    cardsArray.forEach((card, index) => {
        card.setAttribute('tabindex', index === 0 ? '0' : '-1');
        card.addEventListener("click", cardClickHandler);
    });

    // Focus index to 0
    currentFocusIndex = 0;
}

// Start timer
let timer = {
    minutes: 0,
    seconds: 0,
    interval: null
};

// Tracks the first card clicked
let firstClick = true;

// Start timer function
function startTimer() {
    // Just one time interval
    if (timer.interval) return;
    timer.interval = setInterval(function () {
        timer.seconds++;
        if (timer.seconds === 60) {
            timer.minutes++;
            timer.seconds = 0;
        }
        updateTimerDisplay();
    }, 1000);
}

// Update timer display function
function updateTimerDisplay() {
    let timerElement = document.getElementsByClassName("timer")[0];
    let formattedMinutes = timer.minutes < 10 ? "0" + timer.minutes : timer.minutes;
    let formattedSeconds = timer.seconds < 10 ? "0" + timer.seconds : timer.seconds;
    timerElement.textContent = formattedMinutes + ":" + formattedSeconds;
}

// Reset timer function
function resetTimer() {
    clearInterval(timer.interval);
    timer.interval = null;
    timer.minutes = 0;
    timer.seconds = 0;
    updateTimerDisplay();
}
// End of timer game

let firstCard = null;
let secondCard = null;
let firstCardElement = null;
counter = 0;

// Control when the card is clicked
let canClick = true;

function cardClickHandler() {
    if (!canClick) return;
    let clickedCard = this;

    // Prevent clicking the same card twice
    if (clickedCard === firstCardElement) return;
    if (firstClick) {
        startTimer();
        firstClick = false;
    }
    clickedCard.classList.add("clicked");
    if (counter === 0) {
        firstCard = clickedCard.getAttribute("data-pokemon");
        firstCardElement = clickedCard;
        counter++;
    } else {
        secondCard = clickedCard.getAttribute("data-pokemon");
        if (firstCard === secondCard && firstCardElement !== clickedCard) {

            // Match Cards
            clickedCard.classList.add("checked");
            firstCardElement.classList.add("checked");
            matchedCards++;
            incrementScore();
            checkForWin();
            counter = 0;
        } else {

            // Disable further cards
            canClick = false;

            // No match, shake and hide card
            setTimeout(() => {
                clickedCard.classList.remove("clicked");
                firstCardElement.classList.remove("clicked");
                clickedCard.classList.add("shake");
                firstCardElement.classList.add("shake");
                descreaseScore();
                setTimeout(() => {
                    clickedCard.classList.remove("shake");
                    firstCardElement.classList.remove("shake");

                    counter = 0;
                    canClick = true;
                }, 800);
            }, 800);
        }
    }
}

//Scores code
let currentScore = 0;

//Increments score by 100
function incrementScore() {
    currentScore += 100;
    document.getElementById("score").innerText = currentScore;
}

//Decrease score by 100
function descreaseScore() {
    if (currentScore >= 100) {
        addTimeToTimer(15);
    }
    currentScore = Math.max(0, currentScore - 100);
    document.getElementById("score").innerText = currentScore;
}

function addTimeToTimer(secondsToAdd) {
    timer.seconds += secondsToAdd;

    // Handle minute rollover
    while (timer.seconds >= 60) {
        timer.minutes++;
        timer.seconds -= 60;
    }
    updateTimerDisplay();
}

// User wins the game
function winnerMessage() {
    let winnerWindow = document.getElementById("winner");
    let span = winnerWindow.querySelector(".close-window");
    winnerWindow.style.display = "block";
    span.onclick = function () {
        winnerWindow.style.display = "none";
    };
    winnerWindow.onclick = function (event) {
        if (event.target == winnerWindow) {
            winnerWindow.style.display = "none";
        }
    };
    let playerName = localStorage.getItem("playerName") || 'Player';
    saveScore(playerName, currentScore);
    displayHighScores();
}

let matchedCards = 0;

function checkForWin() {
    if (matchedCards === 9) {
        winnerMessage();
        // Stop timer
        resetTimer();
    }
}
// End of win user

// Keyboard feature
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowLeft':
            moveFocus('left');
            break;
        case 'ArrowRight':
            moveFocus('right');
            break;
        case 'Enter':
            selectCard();
            break;
    }
});

function moveFocus(direction) {
    const cards = Array.from(document.getElementsByClassName("card"));

    // Adjust gridSize based on screen width
    const numCols = window.innerWidth >= 768 ? 3 : 6;
    let currentRow = Math.floor(currentFocusIndex / numCols);
    let currentCol = currentFocusIndex % numCols;
    switch (direction) {
        case 'left':
            if (currentCol > 0) {
                currentCol--;
            } else if (currentRow > 0) {
                currentRow--;
                currentCol = numCols - 1;
            } else {
                currentRow = Math.floor((cards.length - 1) / numCols);
                currentCol = (cards.length - 1) % numCols;
            }
            break;
        case 'right':
            if (currentCol < numCols - 1 && currentFocusIndex < cards.length - 1) {
                currentCol++;
            } else if (currentRow < Math.floor((cards.length - 1) / numCols)) {
                currentRow++;
                currentCol = 0;
            } else {
                currentRow = 0;
                currentCol = 0;
            }
            break;
    }

    let newIndex = currentRow * numCols + currentCol;
    newIndex = Math.min(newIndex, cards.length - 1);

    // Update tabindex
    cards[currentFocusIndex].setAttribute('tabindex', '-1');
    cards[newIndex].setAttribute('tabindex', '0');
    cards[newIndex].focus();
    currentFocusIndex = newIndex;
}

function selectCard() {
    const cards = Array.from(document.getElementsByClassName("card"));
    // Check if the currently focused card can be clicked
    if (cards[currentFocusIndex].getAttribute('tabindex') === '0') {
        cards[currentFocusIndex].click();
    }
}

window.addEventListener('resize', function () {
    // Reset focus to the first card when window is resized
    const cards = Array.from(document.getElementsByClassName("card"));
    cards.forEach(card => card.setAttribute('tabindex', '-1'));
    currentFocusIndex = 0;
    cards[currentFocusIndex].setAttribute('tabindex', '0');
    cards[currentFocusIndex].focus();
});
// End of Keyboard feature

// Score list
function saveScore(name, score) {
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    if (!name) {
        name = "Anonymous";
    }
    highScores.push({
        name: name,
        score: score
    });
    highScores.sort((a, b) => b.score - a.score);
    // Top 5 scores
    highScores = highScores.slice(0, 5);
    localStorage.setItem('highScores', JSON.stringify(highScores));
}

// Display high scores
function displayHighScores() {
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const highScoreList = document.getElementById('highScoreList');
    highScoreList.innerHTML = highScores.map(score => `<li>${score.name} - ${score.score}</li>`).join('');
}

// Reset game
function restart() {
    currentScore = 0;
    document.getElementById("score").innerText = currentScore;
    matchedCards = 0;
    const cards = Array.from(document.getElementsByClassName("card"));
    cards.forEach(card => {
        card.classList.remove("clicked", "checked", "shake");
        const img = card.querySelector("img");
        if (img) img.style.opacity = '0';
    });

    selectAndDisplayCards();
    attachCardEventListeners();
    resetTimer();
    firstClick = true;
    closeWinnerWindow();
}

// Play again feature
// Close Winner Window
function closeWinnerWindow() {
    let winnerWindow = document.getElementById("winner");
    winnerWindow.style.display = "none";
}

let closeWindow = document.getElementsByClassName("close-window")[0];
if (closeWindow) {
    closeWindow.onclick = closeWinnerWindow;
}
// End of reset game

// Confirmation Modal
function showConfirmation() {

    // Show the confirmation section
    document.getElementById("confirmation-section").style.display = "block";
}

function confirmAction() {
    document.getElementById("confirmation-section").style.display = "none";
    document.getElementsByClassName('content-container')[0].style.display = 'none';
    document.getElementsByClassName('button-column')[0].style.display = 'block';
    document.getElementsByClassName('introduction')[0].style.display = 'block';
}

function cancelAction() {
    document.getElementById("confirmation-section").style.display = "none";
}

window.onload = function () {
    selectAndDisplayCards();
    displayHighScores();

    // Retrieve the saved volume from local storage
    let savedVolume = localStorage.getItem("musicVolume");
    if (savedVolume !== null) {
        let volumePercentage = savedVolume * 100;
        document.getElementById("musicSlider").value = volumePercentage;
        audio.volume = savedVolume;
        document.getElementById("sliderValue").textContent = volumePercentage;
    }
};