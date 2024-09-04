let background = document.getElementById("container");
let card = document.getElementById("cardBox");
let details = document.getElementById("detailBox");
let buttonOne = document.getElementById("buttonOne");
let buttonTwo = document.getElementById("buttonTwo");
let title = document.getElementById("titleBox");
let aB = document.getElementById("julesWyvern");

function lightMode() {
  background.style.backgroundColor = "white";
  card.style.backgroundColor = "#e0e0e0";
  title.style.color = "black";
  details.style.color = "black";
}

function darkMode() {
  background.style.backgroundColor = "black";
  card.style.backgroundColor = "#222222";
  details.style.color = "white";
  title.style.color = "white";
  aB.style.color = "white";
}

buttonOne.addEventListener("click", lightMode);
buttonTwo.addEventListener("click", darkMode);
