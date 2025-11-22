// let btn = document.querySelector(".btn");
// let input = document.querySelector(".text");
// let container = document.querySelector(".container");
// let main = document.querySelector(".main");

// btn.addEventListener("click", () => {
//   let value = input.value.trim();
//   let container = document.createElement("div");
//   container.classList.add("newItem");

//   let p = document.createElement("p");
//   p.textContent = value;
//   p.classList.add("item");

//   let delBtn = document.createElement("button");
//   delBtn.textContent = "x";
//   delBtn.classList.add("deleteBtn");

//   container.appendChild(p);
//   container.appendChild(delBtn);

//   main.appendChild(container);

//   input.value = "";

//   delBtn.addEventListener("click", () => {
//     container.remove();
//   });
// });

// let item = document.querySelector(".dragDiv");
// let zone = document.querySelector(".dragZone");

// item.addEventListener("dragstart", (e) => {});

// zone.addEventListener("dragover", (e) => {
//   e.preventDefault();
// });

// zone.addEventListener("drop", (e) => {
//   e.preventDefault();
//   zone.appendChild(item);
// });
let container = document.querySelectorAll(".container");
let item = document.querySelector(".dragDiv");
let zone = document.querySelector(".dragZone");

item.addEventListener("dragstart", (e) => {});
zone.addEventListener("dragover", (e) => {
  e.preventDefault();
});
zone.addEventListener("drop", (e) => {
  e.preventDefault();
  zone.appendChild(item);
});
