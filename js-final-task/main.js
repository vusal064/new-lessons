// ELEMENTLƏR
const addInput = document.querySelector(".add-task");
const levelSelect = document.getElementById("level");
const addBtn = document.querySelector(".addBtn");
const tasksSection = document.querySelector(".tasks-section");

const totalSpan = document.querySelector(".card-1 .task-number");
const activeSpan = document.querySelector(".card-2 .task-number");
const completedSpan = document.querySelector(".card-3 .task-number");

const themeBtn = document.querySelector(".icon-btn");
const themeIcon = themeBtn.querySelector("i");

const filterBtns = document.querySelectorAll(".search-section .all");
const searchInput = document.querySelector(".search-task");

const emptyTemplate = tasksSection.innerHTML;

let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

let currentFilter = "all";

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateCounts() {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const active = total - completed;

  totalSpan.textContent = total;
  activeSpan.textContent = active;
  completedSpan.textContent = completed;
}

function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-item");
  taskDiv.dataset.id = task.id;

  taskDiv.innerHTML = `
    <div class="task-left" style="display:flex; align-items:center; gap:10px;">
      <input type="checkbox" class="task-checkbox" ${
        task.completed ? "checked" : ""
      } />
      <div class="task-info">
        <p class="task-title" style="font-size:14px; ${
          task.completed ? "text-decoration: line-through; color:#777;" : ""
        }">
          ${task.text}
        </p>
        <span class="task-level-badge" style="font-size:11px;">
          ${task.level}
        </span>
      </div>
    </div>

    <div class="task-actions" style="display:flex; gap:8px;">
      <button class="edit-btn" style="border:none; background:transparent; cursor:pointer;">
        <i class="fa-regular fa-pen-to-square"></i>
      </button>

      <button class="delete-btn" style="border:none; background:transparent; cursor:pointer;">
        <i class="fa-regular fa-trash-can"></i>
      </button>
    </div>
  `;

  // CHECKBOX — tamamlanma
  const checkbox = taskDiv.querySelector(".task-checkbox");
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    saveTasks();
    renderTasks(currentFilter);
  });

  // DELETE BTN
  const deleteBtn = taskDiv.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    tasks = tasks.filter((t) => t.id !== task.id);
    saveTasks();
    renderTasks(currentFilter);
  });

  // EDIT BTN
  const editBtn = taskDiv.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => {
    const newText = prompt("Yeni tapşırıq mətni:", task.text);
    if (newText && newText.trim() !== "") {
      task.text = newText.trim();
      saveTasks();
      renderTasks(currentFilter);
    }
  });

  tasksSection.appendChild(taskDiv);
}

// Bütün task-ları çək və ekrana yaz
function renderTasks(filter = "all") {
  tasksSection.innerHTML = "";

  let filteredTasks = [];

  if (filter === "all") {
    filteredTasks = tasks;
  } else if (filter === "active") {
    filteredTasks = tasks.filter((t) => !t.completed);
  } else if (filter === "completed") {
    filteredTasks = tasks.filter((t) => t.completed);
  }

  if (filteredTasks.length === 0) {
    tasksSection.innerHTML = emptyTemplate;
  } else {
    filteredTasks.forEach((task) => createTaskElement(task));
  }

  updateCounts();
}

// ====================== TASK ƏLAVƏ ETMƏ ======================

function addTask() {
  const text = addInput.value.trim();
  const level = levelSelect.value;

  if (text === "") return;

  const newTask = {
    id: Date.now(),
    text,
    level,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();

  addInput.value = "";

  renderTasks(currentFilter);
}

addBtn.addEventListener("click", addTask);

addInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// ====================== FİLTER BUTTON======================

filterBtns.forEach((btn) => {
  const text = btn.textContent.trim();

  if (text === "Hamısı") btn.dataset.filter = "all";
  if (text === "Aktiv") btn.dataset.filter = "active";
  if (text === "Tamamlandı") btn.dataset.filter = "completed";

  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    currentFilter = btn.dataset.filter;
    renderTasks(currentFilter);
  });
});

// İlk açılışda "Hamısı" aktiv olsun
filterBtns[0].classList.add("active");

// ====================== DARK / LIGHT  ======================

function setTheme(mode) {
  if (mode === "dark") {
    document.body.classList.add("dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    document.body.classList.remove("dark");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
  localStorage.setItem("theme", mode);
}

const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

themeBtn.addEventListener("click", () => {
  const newMode = document.body.classList.contains("dark") ? "light" : "dark";
  setTheme(newMode);
});

// ======================  SEARCH ======================

searchInput.addEventListener("input", () => {
  const text = searchInput.value.toLowerCase().trim();

  const filtered = tasks.filter((t) => t.text.toLowerCase().includes(text));

  tasksSection.innerHTML = "";

  if (filtered.length === 0) {
    tasksSection.innerHTML = emptyTemplate;
  } else {
    filtered.forEach((task) => createTaskElement(task));
  }
});

renderTasks(currentFilter);
