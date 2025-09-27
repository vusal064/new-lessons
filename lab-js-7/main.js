
  let sunIcon = document.querySelector(".sun")
  let moonIcon = document.querySelector(".moon")
  let body = document.body;

  moonIcon.style.display = "none"
  body.style.background = "white"
  body.style.color = "black"


 sunIcon.addEventListener("click", () => {
    body.style.backgroundColor = "black"
    body.style.color = "white"

    sunIcon.style.display = "none"
    moonIcon.style.display ="block"
 })

moonIcon.addEventListener("click",() => {
    body.style.backgroundColor ="white"
    body.style.color = "black"

    sunIcon.style.display ="block"
    moonIcon.style.display ="none"
})
