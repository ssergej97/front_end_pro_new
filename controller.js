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
