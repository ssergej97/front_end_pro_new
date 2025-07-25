"use strict";

function createController() {
  // Render elements in task list
  document.addEventListener("DOMContentLoaded", () => {
    const tasks = dataBase.getData();
    tasks.forEach((task) => {
      const template = ui.createTemplate(task);
      ui.renderTask(template);
    });
  });

  // Handle form event
  const form = document.querySelector("[data-form]");

  const submitBtn = form.querySelector('[type="submit"]');
  submitBtn.setAttribute("disabled", "disabled");
  submitBtn.disabled = true;

  const inputs = Array.from(form.querySelectorAll("input, textarea"));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { target } = e;

    // Get data from the form
    const data = inputs.reduce((acc, { name, value }) => {
      acc[name] = value;
      return acc;
    }, {});

    target.reset();

    console.log(data);
    const savedTask = dataBase.setData(data);
    console.log(savedTask);
    const template = ui.createTemplate(savedTask);
    ui.renderTask(template);
    dataBase.findTaskOnId(2);
  });

  const disabledHandler = (e) => {
    let isInputFilled = true;
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].value.trim().length) {
        isInputFilled = false;
        break;
      }
    }

    if (isInputFilled) {
      submitBtn.removeAttribute("disabled");
      submitBtn.disabled = false;
    } else {
      submitBtn.setAttribute("disabled", "disabled");
      submitBtn.disabled = true;
    }
  };
  form.addEventListener("input", disabledHandler);
}

createController();
