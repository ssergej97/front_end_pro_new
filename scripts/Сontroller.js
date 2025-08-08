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
    renderedTask.renderTask(data);
  });
};

const newController = new Controller();
newController.getData();
