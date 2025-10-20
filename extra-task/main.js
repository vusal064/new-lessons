let startBtn = document.querySelector(".btn1");
let stopBtn = document.querySelector(".btn2");
let countSpan = document.querySelector(".count");

let count = 0;
let interval = 0;
startBtn.addEventListener("click", () => {
  if (interval === 0);
  {
    interval = setInterval(() => {
      count++;
      countSpan.textContent = count;
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = 0;
});
