let background = document.getElementById("container");
let card = document.getElementById("cardBox");
let details = document.getElementById("detailBox");
let buttonOne = document.getElementById("buttonOne");
let buttonTwo = document.getElementById("buttonTwo");

function lightMode() {
  background.style.backgroundColor = "white";
  card.style.backgroundColor = "#e0e0e0";
  details.style.color = "black";
}

function darkMode() {
  background.style.backgroundColor = "black";
  card.style.backgroundColor = "#222222";
  details.style.color = "white";
}

buttonOne.addEventListener("click", lightMode);
buttonTwo.addEventListener("click", darkMode);
