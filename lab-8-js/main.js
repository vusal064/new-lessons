let input = document.querySelector(".mainInput");
let btn = document.querySelector(".mainBtn");
let container = document.querySelector(".container");
let main = document.querySelector(".main");

btn.addEventListener("click", () => {
  let value = input.value.trim();
  if (value === "") {
    alert("Please fill in the box");
    return;
  }

  let container = document.createElement("div");
  container.classList.add("newItemContainer");

  let p = document.createElement("p");
  p.textContent = value;
  p.classList.add("item");

  let delBtn = document.createElement("button");
  delBtn.textContent = "x";
  delBtn.classList.add("deleteBtn");

  container.appendChild(p);
  container.appendChild(delBtn);

  main.appendChild(container);

  input.value = "";

  delBtn.addEventListener("click", () => {
    container.remove();
  });
});

input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    btn.click();
  }
});
