let sliderImage = document.querySelectorAll(".slider-img");
let next = document.querySelector(".slider-button-right");
let back = document.querySelector(".slider-button-left");

let imageSources = [
  "img/img-1.webp",
  "img/img-2.webp",
  "img/img-3.webp",
  "img/img-4.webp",
  "img/img-5.webp",
  "img/img6.jpg",
  "img/img7.jpg",
  "img/img8.jpg",
  "img/img9.jpg",
];

let sliderCounter = 0;

sliderImage[0].setAttribute("src", imageSources[sliderCounter]);
sliderImage[1].setAttribute("src", imageSources[sliderCounter + 1]);
sliderImage[2].setAttribute("src", imageSources[sliderCounter + 2]);

next.addEventListener("click", () => {
  sliderCounter = sliderCounter + 3;
  if (sliderCounter + 3 > imageSources.length) sliderCounter = 0;
  sliderImage[0].setAttribute("src", imageSources[sliderCounter]);
  sliderImage[1].setAttribute("src", imageSources[sliderCounter + 1]);
  sliderImage[2].setAttribute("src", imageSources[sliderCounter + 2]);
});

back.addEventListener("click", () => {
  sliderCounter = sliderCounter - 3;
  if (sliderCounter - 3 < 0) sliderCounter = imageSources.length - 1;
  sliderImage[0].setAttribute("src", imageSources[sliderCounter]);
  sliderImage[1].setAttribute("src", imageSources[sliderCounter - 1]);
  sliderImage[2].setAttribute("src", imageSources[sliderCounter - 2]);
});
