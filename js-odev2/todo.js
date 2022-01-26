let ulDOM = document.querySelector("#list");
let lists = ulDOM.querySelectorAll("li");

let toastTrigger = document.getElementById("addBtn");
let empty = document.getElementById("empty");
let deleted = document.getElementById("deleted");

// Değeri alıp addTask a yolla
function getValue(e) {
  e.preventDefault();

  let id = localStorage.getItem("id") || 0;
  let input = document.querySelector("#task");
  let task = input.value;

  // item zaten varsa / boşsa-boşluksa uyarı fırlat
  if (isThereItem(task)) {
    addToast(available);
  } else if (task.trim()) {
    addTask(id, task);
    saveLocal(id, task);
    id++;
  } else {
    addToast(empty);
  }

  // addTaska gidince inputu sıfırla ve inputa focus yap
  input.value = "";
  input.focus();

  // id yi silme işlemleri için Localde tut ??? Başka önerisi olan
  localStorage.setItem("id", id);
}

function isThereItem(item) {
  let txt = [];

  [...ulDOM.querySelectorAll("li")].map((el) => {
    txt.push(el.firstElementChild.textContent);
  });

  return txt.includes(item);
}

// getValue dan gelen taskı DOMa ekle
function addTask(key, task) {
  let li = document.createElement("li");
  let span = document.createElement("span");
  let deleteBtn = document.createElement("span");

  span.innerHTML = task;
  li.id = key;

  deleteBtn.id = "delete";
  deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "float-end");
  deleteBtn.innerHTML = "+";

  li.append(span, deleteBtn);
  ulDOM.append(li);
}

// target ı belirleyip hedef taskı sil
function deleteTask(e) {
  let target = e.target;
  let el = target.parentElement;

  if (target.id == "delete") {
    el.remove();
    addToast(deleted);
  }

  localStorage.removeItem(el.id);
}

function doneTask(e) {
  let target = e.target;

  if (target.tagName == "SPAN") {
    target.parentElement.classList.toggle("checked");
  } else if (target.tagName == "LI") {
    target.classList.toggle("checked");
  }

}

// türüne göre toast ekle
function addToast(type) {
  let toast = new bootstrap.Toast(type);
  toast.show();

  return toast;
}

function saveLocal(key, item) {
  localStorage.setItem(key, item);
}

function getDataFromStorage() {
  let keys = Object.keys(localStorage);
  keys.sort((a, b) => a - b);

  for (const i in keys) {
    if (keys[i] !== "id") {
      addTask(keys[i], localStorage.getItem(keys[i]));
    }
  }
}

window.addEventListener("load", getDataFromStorage);

ulDOM.addEventListener("click", deleteTask);
ulDOM.addEventListener("click", doneTask);

