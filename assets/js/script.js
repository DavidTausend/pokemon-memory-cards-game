/* JS Code quality tool: https://jshint.com/ */
/* https://www.w3schools.com/w3css/w3css_modal.asp */
function showInstructions() {
    let window = document.getElementById("instructions");
    let span = document.getElementsByClassName("close-window")[0];

    // Open the window (model)
    window.style.display = "block";

    // Close window (model) when the user clicks on (x)
    span.onclick = function() {
        window.style.display = "none";
    }

    // Close the window (model) when the user clicks anywhere outside of the window
    window.onclick = function(event) {
        if (event.target == window) {
            window.style.display = "none";
        }
    }
}

 function musicSettings() {
    let window = document.getElementById("music");
    let span = document.getElementsByClassName("close-window")[0];

    window.style.display = "block";

    span.onclick = function() {
        window.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == window) {
            window.style.display = "none";
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

// Cards generator: https://dev.to/javascriptacademy/creating-a-memory-card-game-with-html-css-and-javascript-57g1
// Shuffle cards
function shuffleCards() {
    const cardContainer = document.getElementsByClassName("cards")[0];
    let cards = Array.from(cardContainer.children);
    cards = shuffleArray(cards);
    cards.forEach(card => cardContainer.appendChild(card));
}

// Calls shuffleCards function when the page loads
window.onload = shuffleCards;

// End of cards shuffle


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

    timer.interval = setInterval(function() {
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
    let timerElement = document.getElementsByClassName("timer") [0];
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
    cardsArray.forEach((card) => {
        card.classList.remove("checked", "clicked", "shake");
    });
    // Reset timer
    resetTimer();
    // Reset firstClick to true for the next game
    firstClick = true; 
}

// End of reset game