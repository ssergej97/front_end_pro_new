"use strict";

function createController() {
  // Render elements in product list(view.list)
  document.addEventListener("DOMContentLoaded", () => {
    const items = dataBase.getData();
    items.forEach((item) => {
      const template = ui.createTemplate(item);
      ui.renderContact(template);
    });
  });
  // Handle form event
  // const form = document.querySelector("[data-form]");
  //
  // const submitBtn = form.querySelector("[data-btn]");
  // submitBtn.setAttribute("disabled", "disabled");
  // submitBtn.disabled = true;
  //
  // const inputs = Array.from(form.querySelectorAll("input, textarea"));
  // console.log(inputs);
  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   const { target } = e;
  //
  //   // Get data from the form
  //   const data = inputs.reduce((acc, { name, value }) => {
  //     acc[name] = value;
  //     return acc;
  //   }, {});
  //   console.log(data);
  //   target.reset();
  //
  //   const savedItem = dataBase.setData(data);
  //   const template = ui.createTemplate(savedItem);
  //   ui.renderContact(template);
  // });
  //
  // // Redirect to list
  // submitBtn.addEventListener("click", (e) => {
  //   window.location.href = "list.html";
  // });

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
  // form.addEventListener("input", disabledHandler);

  // Delete product
  const deleteContactHandler = ({ target }) => {
    // if (target.closest("[data-remove-contact]") === null) return;
    const btnToDelete = document.querySelector("[data-delete]");
    if (target !== btnToDelete) return;
    const itemElement = target.closest("[data-user-id]");
    // console.log(itemElement);
    const userID = Number(itemElement.getAttribute("data-user-id"));
    const removedElement = dataBase.deleteData(userID);
    if (removedElement !== null) {
      ui.removeContact(itemElement);
    }
  };
  const itemList = document.querySelector("tbody");
  // console.log(itemList);
  itemList.addEventListener("click", deleteContactHandler);

  // Edit product
  // Redirect to edit form
  itemList.addEventListener("click", ({ target }) => {
    if (target.dataset.btn !== "edit") return;
    // console.log(target);
    const productID = target.closest("tr").dataset.userId;
    // console.log(typeof productID);
    dataBase.getID(productID);
    window.location.href = "edit.html";
  });
}

createController();
