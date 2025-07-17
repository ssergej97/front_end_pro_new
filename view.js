"use strict";

function createUI() {
  const createTemplate = ({ id, itemName, itemPrice, itemDescription }) => {
    const wrapper = document.createElement("tr");
    // wrapper.className =
    //   "list-group-item d-flex align-items-center justify-content-between";
    wrapper.setAttribute("data-user-id", id);

    const content = `
        <th scope="row">${id}</th>
        <td>${itemName}</td>
        <td>$${itemPrice}</td>
        <td>${itemDescription}</td>
        <td>
            <button type="submit" class="btn btn-primary me-2" data-btn="edit">Edit</button>
            <button type="submit" class="btn btn-danger" data-delete>Delete</button>
        </td>
    `.trim();

    wrapper.innerHTML = content;
    return wrapper;
  };

  const renderContact = (template) => {
    // if (!(template instanceof HTMLElement)) return null;
    const itemList = document.querySelector("tbody");
    itemList.prepend(template);
  };

  const removeContact = (elementToRemove) => {
    elementToRemove.remove();
  };

  return {
    createTemplate,
    renderContact,
    removeContact,
  };
}

const ui = createUI();
