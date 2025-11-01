let cardsDiv = document.querySelector(".cards");
let btn = document.querySelector(".newPage");
let input = document.querySelector(".search");
let page = 1;

const showCharacters = async () => {
  await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then((a) => a.json())
    .then((data) => {
      data.results.forEach((item) => {
        cardsDiv.innerHTML += `
          <div class="card">
            <img src="${item.image}"  />
            <p>${item.name}</p>
            <p> ${item.gender}</p>

          </div>
        `;
      });
    });
};

showCharacters();

btn.addEventListener("click", () => {
  page++;
  showCharacters();
});

input.addEventListener("input", () => {
  fetch(`https://rickandmortyapi.com/api/character/?name=${input.value}`)
    .then((a) => a.json())
    .then((b) => {
      cardsDiv.innerHTML = "";
      b.results.forEach((item) => {
        cardsDiv.innerHTML += `
            <div class="card">
              <img src="${item.image}">
              <p>${item.name}</p>
              <p>${item.gender}</p>
            </div>
          `;
      });
    });
});
