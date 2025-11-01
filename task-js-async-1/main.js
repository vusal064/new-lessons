const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

function startLight() {
  red.classList.add("active");
  yellow.classList.remove("active");
  green.classList.remove("active");

  setTimeout(() => {
    red.classList.remove("active");
    yellow.classList.add("active");
    green.classList.remove("active");

    setTimeout(() => {
      red.classList.remove("active");
      yellow.classList.remove("active");
      green.classList.add("active");

      setTimeout(() => {
        startLight();
      }, 3000);
    }, 1000);
  }, 3000);
}

startLight();
