// let butonHover = document.querySelector(".btn")

// butonHover.addEventListener ("mouseover", () =>{
//     butonHover.style.backgroundColor ="red"
// })

// butonHover.addEventListener ("mouseout", () =>{
//     butonHover.style.backgroundColor ="green"
// })

// let resultText = document.querySelector(".box1")
// let enterText = document.querySelector(".box2")
// let sendButton = document.querySelector(".btn")

// sendButton.addEventListener("click", ()=>{
//     resultText.innerText = enterText.value
//     enterText.value = ""

// })

// let btn = document.querySelector(".btn");
// let sideBar = document.querySelector(".sideBar");
// let ul = document.querySelector("ul");
// let nav = document.querySelector("nav")

// let newElement = document.createElement("li");
// let newElement2 = document.createElement("li");
// let newElement3 = document.createElement("li");


// newElement.textContent="fwgwgfer";
// newElement2.textContent="vwrgrge";
// newElement3.textContent="regergr";


// btn.addEventListener("click",() => {
//   sideBar.classList.toggle("active");
//   sideBar.style.display ="flex"
//     nav.style.display ="flex"
//   ul.appendChild(newElement);
//   ul.appendChild(newElement2);
//   ul.appendChild(newElement3);
// });



// bos div olsun js terefde image create edin ona src atributu elave edin daha sonra hemin img i body-e append edinb divin icine ve ekranda gorunsun


    let imageBox = document.querySelector(".main")
    let img = document.createElement("img")
    img.src = ".//image-2.jpg"


    imageBox.appendChild(img)