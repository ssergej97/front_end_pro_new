"use strict";

// Task
function Task(name, description) {
  this.name = name;
  this.description = description;
  this.status = "active";
  this.id = 1;
}

// TaskList
function TaskList() {}

TaskList.prototype.setToLocalStorage = function (task) {
  const tasks = this.getFromLocalStorage();
  console.log(tasks);
  if (tasks.length > 0) this.setId(task);
  tasks.push(task);
  localStorage.setItem("tasksList", JSON.stringify(tasks));
};

TaskList.prototype.getFromLocalStorage = function () {
  const currentList = JSON.parse(localStorage.getItem("tasksList"));
  if (currentList === null) return [];
  else return currentList;
};

TaskList.prototype.getOneItem = function () {
  const currentList = JSON.parse(localStorage.getItem("tasksList"));
  return currentList.at(-1);
}

TaskList.prototype.setId = function (task) {
  const currentList = JSON.parse(localStorage.getItem("tasksList"));
  console.log(currentList.length)
  if (currentList.length > 0) {
    task.id = currentList.at(-1).id + 1;
  }
}

TaskList.prototype.deleteItem = function (id) {
  const currentList = this.getFromLocalStorage();
  const indexOfItem = currentList.findIndex(list => list.id === id);
  currentList.splice(indexOfItem, 1);
  localStorage.setItem("tasksList", JSON.stringify(currentList));
};

TaskList.prototype.deleteAllItems = function () {
  const currentList= [];
  localStorage.setItem("tasksList", JSON.stringify(currentList));
}

const tasksList = new TaskList();