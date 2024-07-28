var container = document.querySelector(".wrapper-inner .todos-box .container");
var formEl = document.querySelector(".task-content");
var inputTaskEl = document.querySelector(".task-content .task-input");
var btnTaskEl = document.querySelector(".task-content .task-btn");

btnTaskEl.addEventListener("click", function (e) {
  e.preventDefault();

  if (inputTaskEl.value.trim() !== "") {
    var addedTask = document.createElement("div");

    var text = document.createElement("p");
    text.textContent = `${inputTaskEl.value}`;
    var iconBox = document.createElement("div");
    var writeIcon = document.createElement("span");
    writeIcon.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
    var trashCanIcon = document.createElement("span");
    trashCanIcon.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

    addedTask.appendChild(text);
    iconBox.appendChild(writeIcon);
    iconBox.appendChild(trashCanIcon);
    addedTask.appendChild(iconBox);

    addedTask.classList.add("added-task");
    text.classList.add("text-content");
    iconBox.classList.add("icon-box");
    writeIcon.classList.add("write-ic");
    trashCanIcon.classList.add("trash-can-ic");
    if (addedTask.style.width > container.style.width) {
      container.style.width = `auto`;
      document.querySelector(".todos-box").style.width = `auto`;
    }

    container.appendChild(addedTask);
    formEl.reset();

    var formAddedEl = document.createElement("form");
    var editInput = document.createElement("input");
    editInput.value = text.textContent;
    var editBtn = document.createElement("button");
    editBtn.textContent = "Add Task";
    formAddedEl.appendChild(editInput);
    formAddedEl.appendChild(editBtn);
    formAddedEl.classList.add("task-content");

    writeIcon.addEventListener("click", function () {
      container.appendChild(formAddedEl);
      container.removeChild(addedTask);
    });

    editBtn.addEventListener("click", function (e) {
      e.preventDefault();

      text.innerText = editInput.value;
      container.removeChild(formAddedEl);
      container.appendChild(addedTask);
    });

    trashCanIcon.addEventListener("click", function () {
      container.removeChild(addedTask);
      container.removeChild(formAddedEl);
    });
  }
});
