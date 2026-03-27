

3 Завдання
const input = document.getElementById("timeInput");
const display = document.getElementById("display");
const message = document.getElementById("message");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

let time = 0;
let timer = null;


function updateDisplay() {
  display.textContent = time;
}

startBtn.addEventListener("click", () => {
  if (timer !== null) return;

  
  if (time === 0) {
    time = parseInt(input.value);

    if (isNaN(time) || time <= 0) {
      alert("Введіть правильне число!");
      return;
    }
  }

  message.textContent = "";

  timer = setInterval(() => {
    time--;
    updateDisplay();

    if (time <= 0) {
      clearInterval(timer);
      timer = null;
      display.textContent = 0;
      message.textContent = "Час вийшов!";
    }
  }, 1000);
});


pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

increaseBtn.addEventListener("click", () => {
  time += 10;
  updateDisplay();
});

decreaseBtn.addEventListener("click", () => {
  time = Math.max(0, time - 10);
  updateDisplay();
});

input.addEventListener("input", () => {
  time = parseInt(input.value) || 0;
  updateDisplay();
});



