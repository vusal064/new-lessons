let items = [
  { name: "Iphone 13", price: "300$", img: "img/ipp13.png" },
  { name: "Iphone 14", price: "400$", img: "img/ipp14.png" },
  { name: "Iphone 15", price: "500$", img: "img/ipp15.png" },
  { name: "Iphone 16", price: "600$", img: "img/ipp16.png" },
];

let products = document.querySelector(".products");
let favorites = document.querySelector(".favorites");

let cardBox = document.createElement("div");
cardBox.classList.add("card-box");

// məhsulları yaradırıq
items.forEach(function (item) {
  cardBox.innerHTML += `
    <div class="card">
      <img class="cardImg" src="${item.img}" alt="" />
      <div class="card-bottom">
        <p>${item.name}</p>
        <i class="fa-solid fa-heart-circle-plus fav-btn"></i>
      </div>
      <h3 id="price">Price : ${item.price}</h3>
    </div>
  `;
});

products.appendChild(cardBox);

let favButtons = document.querySelectorAll(".fav-btn");

favButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    let card = btn.closest(".card");
    let name = card.querySelector("p").textContent;

    if (btn.classList.contains("active")) {
      let clone = card.cloneNode(true);
      clone.querySelector(".fav-btn").remove();
      favorites.appendChild(clone);
    } else {
      favorites.querySelectorAll(".card").forEach((favCard) => {
        if (favCard.querySelector("p").textContent === name) {
          favCard.remove();
        }
      });
    }
  });
});
