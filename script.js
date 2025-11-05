let timer = 60;
const timerEl = document.getElementById("timer");

const countdown = setInterval(() => {
  timer--;
  timerEl.textContent = timer;

  if (timer <= 0) {
    clearInterval(countdown);
    timerEl.textContent = "Time's Up!";
  }
}, 1000);

// Fade button animation (extra smooth)
const joinBtn = document.getElementById("joinBtn");
let fade = true;
setInterval(() => {
  joinBtn.style.opacity = fade ? "0.6" : "1";
  fade = !fade;
}, 1000);

// Optional: Redirect on button click
joinBtn.addEventListener("click", () => {
  window.open("https://t.me/+o-KT1hqeEWdlZDk1", "_blank");
});
