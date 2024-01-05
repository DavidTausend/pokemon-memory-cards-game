/* JS Code quality tool: https://jshint.com/ */
/* https://www.w3schools.com/w3css/w3css_modal.asp */

let instructionsWindow = document.getElementById("instructions");
let span = document.getElementsByClassName("close-window")[0];

function showInstructions() {
    
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

let musicSettingsWindow = document.getElementById("music");

function musicSettings() {

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

// Music Settings
// Music Settings slider
function sliderChange(value) {
    document.getElementById("sliderValue").textContent = value;
}

// Play music game
let audio = new Audio("assets/audio/music.mp3");
// Default volume 50%
audio.volume = 0.5;

function sliderChange(value) {
    let volume = value / 100;
    // Set the volume to the audio
    audio.volume = volume; // Set the volume of the audio
    // Update the display value
    document.getElementById("sliderValue").textContent = value; // Update the display value
}

// End of Music Settings

// shuffleArray: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Select the pokemon cards and display them
function selectAndDisplayCards() {
    // Pokemon List
    const allPokemon = ["blastoise", "bulbasaur", "charmander", "cubone", "eevee", "flareon", "ivysaur", "jiglypuff", "newtwo", "persian", "pichu", "pikachu", "pokemons", "raichu", "squirtle"];

    // Select randomly 8 pokemons
    let selectedPokemon = [];
    while (selectedPokemon.length < 9) {
        const randomIndex = Math.floor(Math.random() * allPokemon.length);
        const pokemon = allPokemon[randomIndex];
        if (!selectedPokemon.includes(pokemon)) {
            selectedPokemon.push(pokemon);
        }
    }
    // Duplicate each Pokemon to make 16 cards
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
        imgElement.src = `assets/images/cards/${pokemon}.png`;
        imgElement.alt = `${pokemon} pokemon`;

        cardElement.appendChild(imgElement);
        cardContainer.appendChild(cardElement);
    });
}

window.onload = selectAndDisplayCards();


//Start timer: https://stackoverflow.com/questions/46458740/starting-timer-when-clicking-first-card-of-memory-game
// Timer variables
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

// Cards code
let counter = 0;
let firstCard = "";
let secondCard = "";
let firstCardElement = null;

const cards = document.getElementsByClassName("card");
let cardsArray = Array.from(cards);

// Card is clicked
// Convernt to an array
cardsArray.forEach((card) => {
    card.addEventListener("click", () => {
        if (firstClick) {
            startTimer();
            // Set firstClick to false so the timer won't start again
            firstClick = false;
        }
        card.classList.add("clicked");

        //Test
        console.log(true);

        if (counter === 0) {
            firstCard = card.getAttribute("data-pokemon");
            firstCardElement = card;
            counter++;
        } else {
            secondCard = card.getAttribute("data-pokemon");

            if (firstCard === secondCard && firstCardElement !== card) {
                // Macth Cards
                card.classList.add("checked");
                firstCardElement.classList.add("checked");
                // If the cards macht increments the score
                incrementScore();
                console.log(firstCardElement);
            } else {
                // No match, shake and hide card
                setTimeout(() => {
                    card.classList.remove("clicked");
                    firstCardElement.classList.remove("clicked");
                    card.classList.add("shake");
                    firstCardElement.classList.add("shake");
                    descreaseScore();
                    // Remove shake class after animation
                    setTimeout(() => {
                        card.classList.remove("shake");
                        firstCardElement.classList.remove("shake");
                    }, 1000);
                }, 1000);
            }

            counter = 0;
        }
    });
});

//Scores code (Love math)
//Increments score by 100
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = oldScore + 100;

}

//Decrease score by 100
function descreaseScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    // Score will decrease but doesn't go minus
    let newScore = oldScore - 100 < 0 ? 0 : oldScore - 100;
    document.getElementById("score").innerText = newScore;

}

// End of scores

// Reset game
function Restart() {
    // Reset score
    document.getElementById("score").innerText = 0;
    // Reset cards
    selectAndDisplayCards();
    // Reset timer
    resetTimer();
    // Reset firstClick to true for the next game
    firstClick = true;
}

// End of reset game