let allBtn = document.getElementById("all");
let electronicsBtn = document.getElementById("electronics");
let jewelryBtn = document.getElementById("jewelry");
let menBtn = document.getElementById("men");
let womenBtn = document.getElementById("women");
let productsDiv = document.querySelector(".products");

const allData = async () => {
  productsDiv.innerHTML = "";
  const data = await fetch("https://fakestoreapi.com/products").then((a) =>
    a.json()
  );
  data.forEach((item) => {
    productsDiv.innerHTML += `
      <div class="card">
        <img src="${item.image}"/>
        <h4>${item.title}</h4>
        <p class="price">${item.price}</p>
      </div>
    `;
  });
};

allData();

const dataCategory = async (categoryName) => {
  productsDiv.innerHTML = "";

  await fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
    .then((t) => t.json())
    .then((data) => {
      data.forEach((item) => {
        productsDiv.innerHTML += `
          <div class="card">
            <img src="${item.image}" alt="Product" />
            <h3>${item.title}</h3>
            <p class="price">$${item.price}</p>
          </div>
        `;
      });
    });
};

allBtn.addEventListener("click", () => allData());
electronicsBtn.addEventListener("click", () => dataCategory("electronics"));
jewelryBtn.addEventListener("click", () => dataCategory("jewelery"));
menBtn.addEventListener("click", () => dataCategory("men's%20clothing"));
womenBtn.addEventListener("click", () => dataCategory("women's%20clothing"));
