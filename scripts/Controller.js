"use strict";

function Controller() {}

Controller.prototype.getData = function () {
  const data = {};
  const submitBtn = document.querySelector(".btn-primary");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const dataInputs = document.querySelectorAll(
      'input[type="text"], textarea',
    );
    for (let elem of dataInputs) {
      data[elem.name] = elem.value;
    }
    tasksList.setToLocalStorage(new Task(data.title, data.description));
    const lastItem = tasksList.getOneItem();
    renderedTask.renderTask(lastItem);
  });
};

Controller.prototype.editStatus = function () {
  const wrapper = document.getElementById("todoItems");
  wrapper.addEventListener("change", (e) => {
    const currentList = tasksList.getFromLocalStorage();
    for (const list of currentList) {
      if (Number(e.target.getAttribute("data-id")) === list.id) {
        if (list.status === "active") {
          list.status = "completed";
        } else {
          list.status = "active";
        }
      }
    }
    localStorage.setItem("tasksList", JSON.stringify(currentList));
  });
};

Controller.prototype.reloadPageRender = function () {
  window.addEventListener("DOMContentLoaded", (e) => {
    const currentTasks = tasksList.getFromLocalStorage();
    for (const task of currentTasks) {
      renderedTask.renderTask(task);
    }
  });
};

const newController = new Controller();
newController.getData();
newController.editStatus();
newController.reloadPageRender();
