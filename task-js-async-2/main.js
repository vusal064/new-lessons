let startbtn = document.querySelector(".startBTN");
let stopbtn = document.querySelector(".stopBTN");
let timer = document.querySelector(".timer");
let timeLeft = 10;
let timerInterval = null;

function startTimer() {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    timeLeft--;
    timer.innerHTML = timeLeft > 0 ? timeLeft : "Time's up!";
    timer.style.color = timeLeft <= 3 ? "red" : "#333";

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }, 1000);
}
startbtn.addEventListener("click", startTimer);

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = 10;
  timer.innerHTML = timeLeft;
}
stopbtn.addEventListener("click", resetTimer);
