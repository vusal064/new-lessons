let countBtn = document.querySelector("h3");
let main = document.querySelector(".container");

let array = [{ title: "iphone", price: 1200 }];

let count = 0;

array.forEach((item) => {
  main.innerHTML += `
      <div class="card">
        <div class="card-img">
          <img src="ip13.jpg" alt="" />
        </div>
        <div class="card-btm">
        <div class="card-btm-left">
                    <h2>${item.title}</h2>
            <p class="price">${item.price}</p>
        </div>


          <button class="addBtn">Add to card</button>
        </div>
      </div>`;
});

let btn = document.querySelector(".addBtn");

btn.addEventListener("click", () => {
  btn.textContent = "Adding to Cart...";
  btn.setAttribute("disabled", true);

  count++;
  countBtn.textContent = count;

  setTimeout(() => {
    btn.textContent = "Added to card";
  }, 2000);

  setTimeout(() => {
    btn.textContent = "Add to Cart";
    btn.removeAttribute("disabled");
  }, 3000);
});
