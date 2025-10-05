let menu = document.querySelector(".menu")   
let sideBar = document.querySelector(".sideBar") 
let exitBtn = document.querySelector(".exit")   


sideBar.style.visibility = "hidden"
sideBar.style.position = "absolute"
sideBar.style.top = "0"
sideBar.style.left = "-250px"
sideBar.style.transition = " 0.4s "


menu.addEventListener("click", () => {
  sideBar.style.left = "0"
  sideBar.style.visibility = "visible"
})


exitBtn.addEventListener("click", () => {
  sideBar.style.left = "-250px"
  sideBar.style.visibility = "hidden"
})