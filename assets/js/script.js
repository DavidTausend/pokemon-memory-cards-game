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
                // Macth
                card.classList.add("checked");
                firstCardElement.classList.add("checked");
                console.log(firstCardElement);
            } else {
                // No match, shake and hide
                setTimeout(() => {
                    card.classList.remove("clicked");
                    firstCardElement.classList.remove("clicked");
                    card.classList.add("shake");
                    firstCardElement.classList.add("shake");
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