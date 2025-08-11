'use strict';

function Controller () {}

Controller.prototype.setData = function () {
  const data = {};
  const submitBtn = document.querySelector('.btn-primary');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const dataInputs = document.querySelectorAll('input[type="text"], textarea');
    for (let elem of dataInputs) {
      data[elem.name] = elem.value;
    }
    tasksList.setToLocalStorage(new Task(data.title, data.description));
    const lastItem = tasksList.getOneItem();
    renderedTask.renderTask(lastItem);
  })
}

Controller.prototype.editStatus = function () {
  const wrapper = document.getElementById('todoItems');
  wrapper.addEventListener('change', (e) => {
    const currentList = tasksList.getFromLocalStorage();
    for (const list of currentList) {
      if (Number(e.target.getAttribute('data-id')) === list.id) {
        if (list.status === 'active') {
          list.status = 'completed';
        } else {
          list.status = 'active';
        }
      }
    }
    localStorage.setItem("tasksList", JSON.stringify(currentList));
  })
}

Controller.prototype.reloadPageRender = function () {
  window.addEventListener('DOMContentLoaded', (e) => {
    const currentTasks = tasksList.getFromLocalStorage();
    for (const task of currentTasks) {
      renderedTask.renderTask(task);
    }
  })
}

Controller.prototype.deleteTask = function () {
  const wrapper = document.getElementById('todoItems');
  wrapper.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-btn')) {
      const itemId = e.target.getAttribute('data-id');
      tasksList.deleteItem(itemId);
      renderedTask.unrenderedTask(itemId);
    }
  })
}

Controller.prototype.deleteAllTasks = function () {
  const deleteBtn = document.querySelector('.remove-all');
  console.log(deleteBtn);
  deleteBtn.addEventListener('click', (e) => {
    renderedTask.unrenderedAllTask();
    tasksList.deleteAllItems();
  })
}

const newController = new Controller();
newController.setData();
newController.editStatus();
newController.reloadPageRender();
newController.deleteTask();
newController.deleteAllTasks();

