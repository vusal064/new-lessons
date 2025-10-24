let inputName = document.querySelector(".input-1");
let inputEmail = document.querySelector(".input-2");
let button = document.querySelector(".btn");

function People(name, email) {
  this.name = name;
  this.email = email;

  this.people = function () {
    console.log("Hello", this.name);
  };
}

let obj = new People("Vusal", "Abbasov", 21);
let people = new People("Elsen", "Behbudov", 21);

console.log(obj, people);

button.addEventListener("click", () => {
  const nameValue = inputName.value.trim();
  const emailValue = inputEmail.value.trim();
});

let person = new Human(nameValue, emailValue);
