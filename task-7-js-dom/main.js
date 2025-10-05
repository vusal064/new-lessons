//  1 Reng deyisen qutu
let box = document.querySelector(".color-box")
let blue = document.querySelector(".blueBtn")
let green = document.querySelector(".greenBtn")
let red = document.querySelector(".redBtn")
red.addEventListener("click", () => {
  box.style.backgroundColor = "red"
  box.innerText = "Qirmizi"
})
green.addEventListener("click", () => {
  box.style.backgroundColor = "green"
  box.innerText = "Yasil"
})
blue.addEventListener("click", () => {
  box.style.backgroundColor = "blue"
  box.innerText = "Mavi"
})

//  2 Gizlet / Goster  Toggle ile yazmaq isdedim yaza bilmedim internetden komey aldim
let text = document.querySelector(".myText")
let  toggleBtn = document.querySelector(".toggleBtn")
toggleBtn.addEventListener("click", () => {
  if (text.style.display === "none") {
    text.style.display = "block"
  } else {
    text.style.display = "none"
  }
})

//  3. Balon sisir - ChatGpt dan komek aldim
let balloon = document.querySelector(".balloon")
let inflateBtn = document.querySelector(".inflateBtn")
let balloonSize = 100;
inflateBtn.addEventListener("click", () => {
  balloonSize += 20
  balloon.style.width = balloonSize + "px"
  balloon.style.height = balloonSize + "px"
})

//  4 Saygac
let counter = document.querySelector(".counter")
let plus = document.querySelector(".plusBtn")
let minus = document.querySelector(".minusBtn")
plus.addEventListener("click", () => {
  counter.innerText = parseInt(counter.innerText) + 1
})
minus.addEventListener("click", () => {
  counter.innerText = parseInt(counter.innerText) - 1
})

//  5 Qutunu hereket etdir
let moveBox = document.querySelector(".move-box")
let right = document.querySelector(".rightBtn")
let left = document.querySelector(".leftBtn")
let moveValue = 0
right.addEventListener("click", () => {
  moveValue += 20
  moveBox.style.left = moveValue + "px"
})
left.addEventListener("click", () => {
  moveValue -= 20
  moveBox.style.left = moveValue + "px"
})
