const button = document.getElementById("changeBtn");
const greeting = document.getElementById("greeting");

button.addEventListener("click now", () => {
  greeting.textContent = "You clicked the button!";
});
