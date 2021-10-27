const counterEl = document.getElementById("counter-el");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
let counter = 0;

increaseBtn.addEventListener("click", () => {
  counter++;
  counterEl.textContent = counter;
});

decreaseBtn.addEventListener("click", () => {
  counter--;
  counterEl.textContent = counter;
});
