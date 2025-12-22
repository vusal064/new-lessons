class Employee {
  constructor(id, fullname, age, position, experience, skills, startDate) {
    this.id = id;
    this.fullname = fullname;
    this.age = age;
    this.position = position;
    this.experience = experience;
    this.skills = skills;
    this.startDate = startDate;
  }
}

let employees = JSON.parse(localStorage.getItem("employees")) || [];
let form = document.getElementById("employeeForm");
let tableBody = document.getElementById("employeeTable");
let searchInput = document.getElementById("search");

function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach((emp, index) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${emp.fullname}</td>
      <td>${emp.age}</td>
      <td>${emp.position}</td>
      <td>${emp.experience}</td>
      <td>${emp.skills.join(", ")}</td>
      <td>${emp.startDate}</td>
      <td>
        <button class="btn edit" onclick="editEmployee(${
          emp.id
        })">Düzəliş</button>
        <button class="btn delete" onclick="deleteEmployee(${
          emp.id
        })">Sil</button>
      </td>
    `;
    tableBody.appendChild(tr);
  });
}

function saveToLocalStorage() {
  localStorage.setItem("employees", JSON.stringify(employees));
  renderTable(employees);
}

function validate(fullname, age, position, experience, skills, startDate) {
  const nameRegex = /^[A-Za-zƏÖÜĞÇŞəöüğçş\s]{3,50}$/;
  if (!nameRegex.test(fullname))
    return alert("Ad və Soyad yalnız hərflərdən ibarət olmalıdır!");
  if (age < 18 || age > 65) return alert("Yaş 18-65 aralığında olmalıdır!");
  if (position.length < 2 || position.length > 30)
    return alert("Vəzifə 2-30 simvol arası olmalıdır!");
  if (experience > age - 18) return alert("Təcrübə yaş-18-dən çox ola bilməz!");
  if (skills.length < 1) return alert("Ən azı bir bacarıq seçilməlidir!");
  if (new Date(startDate) > new Date()) return alert("Tarix keçmiş olmalıdır!");
  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let fullname = document.getElementById("fullname").value.trim();
  let age = Number(document.getElementById("age").value);
  let position = document.getElementById("position").value.trim();
  let experience = Number(document.getElementById("experience").value);
  let skills = Array.from(
    document.getElementById("skills").selectedOptions
  ).map((opt) => opt.value);
  let startDate = document.getElementById("startDate").value;

  if (!validate(fullname, age, position, experience, skills, startDate)) return;

  let id = Date.now();
  let newEmployee = new Employee(
    id,
    fullname,
    age,
    position,
    experience,
    skills,
    startDate
  );
  employees.push(newEmployee);
  saveToLocalStorage();
  form.reset();
});

function deleteEmployee(id) {
  employees = employees.filter((e) => e.id !== id);
  saveToLocalStorage();
}

function editEmployee(id) {
  let emp = employees.find((e) => e.id === id);
  document.getElementById("fullname").value = emp.fullname;
  document.getElementById("age").value = emp.age;
  document.getElementById("position").value = emp.position;
  document.getElementById("experience").value = emp.experience;
  document.getElementById("startDate").value = emp.startDate;
  employees = employees.filter((e) => e.id !== id);
  saveToLocalStorage();
}

searchInput.addEventListener("input", (e) => {
  let val = e.target.value.toLowerCase();
  let filtered = employees.filter((emp) =>
    emp.fullname.toLowerCase().includes(val)
  );
  renderTable(filtered);
});

document.getElementById("sortName").addEventListener("click", () => {
  employees.sort((a, b) => a.fullname.localeCompare(b.fullname));
  saveToLocalStorage();
});

document.getElementById("sortAge").addEventListener("click", () => {
  employees.sort((a, b) => a.age - b.age);
  saveToLocalStorage();
});

renderTable(employees);
