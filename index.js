const button = getElementByClass("button");

button.addeventlistener("click", changeTheme);

function changeTheme() {
  index.html.body.classList.toggle("darkmode");
}
