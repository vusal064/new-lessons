const inputBox = document.querySelector(".input-section input");
const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");
const clearAllBtn = document.querySelector(".clear-btn");
const footerText = document.querySelector(".footer p");

showTasks();

addBtn.addEventListener("click", () => {
  let userData = inputBox.value.trim();
  if (userData !== "") {
    let localData = localStorage.getItem("todos");
    let listArr = localData ? JSON.parse(localData) : [];
    listArr.push(userData);
    localStorage.setItem("todos", JSON.stringify(listArr));
    showTasks();
  }
  inputBox.value = "";
});

function showTasks() {
  let localData = localStorage.getItem("todos");
  let listArr = localData ? JSON.parse(localData) : [];
  let newLiTag = "";

  listArr.forEach((element, index) => {
    newLiTag += `
      <li>${element}
        <button class="delete" onclick="deleteTask(${index})">
          <i class="fa-solid fa-trash"></i>
        </button>
      </li>`;
  });

  todoList.innerHTML = newLiTag;
  footerText.innerText = `You have ${listArr.length} pending task${
    listArr.length !== 1 ? "s" : ""
  }`;
}

function deleteTask(index) {
  let localData = localStorage.getItem("todos");
  let listArr = JSON.parse(localData);
  listArr.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(listArr));
  showTasks();
}

// Hamısını silmək
clearAllBtn.addEventListener("click", () => {
  localStorage.removeItem("todos");
  showTasks();
});

// let inputBox = document.querySelector(".input-section input");
// let addBtn = document.querySelector(".add-btn");
// let todoList = document.querySelector(".todo-list");
// let clearAllBtn = document.querySelector(".clear-btn");
// let footerText = document.querySelector(".footer p");

// addBtn.addEventListener("click", () => {
//   let task = inputBox.value.trim();
//   if (task === "") return;

//   let li = document.createElement("li");
//   li.innerHTML = `
//     ${task}
//     <button class="delete"><i class="fa-solid fa-trash"></i></button>
//   `;

//   todoList.appendChild(li);
//   inputBox.value = "";

//   updateCount();
// });

// todoList.addEventListener("click", (e) => {
//   if (e.target.closest(".delete")) {
//     e.target.closest("li").remove();
//     updateCount();
//   }
// });

// clearAllBtn.addEventListener("click", () => {
//   todoList.innerHTML = "";
//   updateCount();
// });

// function updateCount() {
//   let count = todoList.children.length;
//   footerText.textContent = `You have ${count} pending task${
//     count !== 1 ? "s" : ""
//   }`;
// }
