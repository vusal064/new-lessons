let input = document.querySelector(".text");
let mainDiv = document.querySelector(".main");

let apiKey = "1ae53da3d77dd6ec00461b5371eb413d";

function createP(text) {
  let p = document.createElement("p");
  p.classList.add("info");
  p.textContent = text;
  mainDiv.appendChild(p);
}

input.addEventListener("keyup", async (e) => {
  if (e.key === "Enter") {
    let city = input.value.trim();

    document.querySelectorAll(".info").forEach((p) => p.remove());

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=az`;

    let res = await fetch(url);
    let data = await res.json();

    createP(` ${data.name}`);
    createP(` ${data.main.temp} °C`);

    input.value = "";
  }
});
