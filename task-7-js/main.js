let open = document.querySelector(".btn");
let newDiv = document.querySelector(".container");
let close = document.querySelector(".closeBtn");
let input = document.querySelector(".inpt");
let btn2 = document.querySelector(".btn-2");

newDiv.style.opacity = "0";

open.addEventListener("click", () => {
  newDiv.style.opacity = "1";
  open.style.opacity = "0";
  open.style.transition = " 0.4s ";
});

close.addEventListener("click", () => {
  newDiv.style.opacity = "0";
  open.style.opacity = "1";
  newDiv.style.transition = " 0.8s ";
});
