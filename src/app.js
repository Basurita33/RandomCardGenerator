/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const suits = ["♥", "♦", "♣", "♠"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  function getRandomCard() {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const value = values[Math.floor(Math.random() * values.length)];
    return { suit, value };
  }

  function generateCard() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const card = getRandomCard();

    const cardElement = document.createElement("div");
    cardElement.className = "card";

    const colorClass = card.suit === "♥" || card.suit === "♦" ? "red" : "black";

    const topLeftSuit = document.createElement("div");
    topLeftSuit.className = `suit top-left ${colorClass}`;
    topLeftSuit.innerText = card.suit;

    const valueElement = document.createElement("div");
    valueElement.className = colorClass;
    valueElement.innerText = card.value;

    const bottomRightSuit = document.createElement("div");
    bottomRightSuit.className = `suit bottom-right ${colorClass}`;
    bottomRightSuit.innerText = card.suit;

    cardElement.appendChild(topLeftSuit);
    cardElement.appendChild(valueElement);
    cardElement.appendChild(bottomRightSuit);

    cardContainer.appendChild(cardElement);
  }

  document.getElementById("btnCard").onclick = generateCard;

  generateCard();
};
