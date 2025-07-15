"use strict";

function createController() {
  // Render elements in contacts list
  document.addEventListener("DOMContentLoaded", () => {
    const contacts = dataBase.getData();
    contacts.forEach((contact) => {
      const template = ui.createTemplate(contact);
      ui.renderContact(template);
    });
  });
  // Handle form event
  const form = document.querySelector("[data-form]");

  const submitBtn = form.querySelector('[type="submit"]');
  submitBtn.setAttribute("disabled", "disabled");
  submitBtn.disabled = true;

  const inputs = Array.from(form.querySelectorAll("input"));

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

    const savedContact = dataBase.setData(data);
    const template = ui.createTemplate(savedContact);
    ui.renderContact(template);
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

  // Delete contact
  const deleteContactHandler = ({ target }) => {
    if (target.closest("[data-remove-contact]") === null) return;
    const contactElement = target.closest("[data-user-id]");
    const userID = Number(contactElement.getAttribute("data-user-id"));
    const removedElement = dataBase.deleteData(userID);
    if (removedElement !== null) {
      ui.removeContact(contactElement);
    }
  };

  contactsList.addEventListener("click", deleteContactHandler);
}

createController();
