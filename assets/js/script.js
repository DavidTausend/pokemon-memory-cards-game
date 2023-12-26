let count = 0;
let firstCard = "";
let SecondCard = "";

const cards = document.querySelectorAll(".cards .cards");
cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.add("clicked");
    });
});