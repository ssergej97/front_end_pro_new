"use strict";

// Handle form event

const collectData = () => {
  const form = document.querySelector("[data-form]");

  const submitBtn = form.querySelector("[data-btn]");
  submitBtn.setAttribute("disabled", "disabled");
  submitBtn.disabled = true;

  const inputs = Array.from(form.querySelectorAll("input, textarea"));
  console.log(inputs);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { target } = e;

    // Get data from the form
    const data = inputs.reduce((acc, { name, value }) => {
      acc[name] = value;
      return acc;
    }, {});
    console.log(data);
    target.reset();

    const savedItem = dataBase.setData(data);
    const template = ui.createTemplate(savedItem);
    ui.renderContact(template);
  });

  // Redirect to list
  submitBtn.addEventListener("click", (e) => {
    window.location.href = "list.html";
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
};

collectData();
