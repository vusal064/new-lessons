let form = document.querySelector(".recordForm");
let input1 = document.querySelector(".input-1");
let input2 = document.querySelector(".input-2");
let checkbox = document.querySelector(".chekcInput");

let container = document.createElement("div");
container.classList.add("container"); // Stil əlavə olundu
document.body.appendChild(container);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let kitabAdi = input1.value.trim();
  let muellif = input2.value.trim();
  let oxunub = checkbox.checked ? "Oxunub" : "Oxunmayib";

  let card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <p>${kitabAdi}</p>
    <p>Müəllif: ${muellif}</p>
    <p>Status: ${oxunub}</p>
  `;

  container.appendChild(card);
  form.reset();
});
