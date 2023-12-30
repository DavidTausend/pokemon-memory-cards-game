// Play music game
var audio = new Audio("../audio/pokemom-instrumental.mp3");
audio.play();

// Cards code
let counter = 0;
let firstCard = "";
let secondCard = "";
let firstCardElement = null;

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.add("clicked");
        //Test
        console.log(true);

        if (counter === 0) {
            firstCard = card.getAttribute("pokemon");
            firstCardElement = card;
            counter++;
        } else {
            secondCard = card.getAttribute("pokemon");

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

function Restart() {
    // Reset score
    document.getElementById("score").innerText = 0;
    // Reset score
    cards.forEach(card => {
        card.classList.remove("checked", "clicked", "shake");
    });
    // Rest game
}
