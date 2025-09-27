// let butonHover = document.querySelector(".btn")


// butonHover.addEventListener ("mouseover", () =>{
//     butonHover.style.backgroundColor ="red"
// })

// butonHover.addEventListener ("mouseout", () =>{
//     butonHover.style.backgroundColor ="green"
// })

let resultText = document.querySelector(".box1")
let enterText = document.querySelector(".box2")
let sendButton = document.querySelector(".btn")

sendButton.addEventListener("click", ()=>{
    resultText.innerText = enterText.value
    enterText.value = ""

    
})