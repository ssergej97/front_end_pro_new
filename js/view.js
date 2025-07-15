"use strict";

function createUI() {
  const createTemplate = ({ id, phone, firstName, lastName }) => {
    const wrapper = document.createElement("li");
    wrapper.className =
      "list-group-item d-flex align-items-center justify-content-between";
    wrapper.setAttribute("data-user-id", id);

    const content = `
        <div class="text-black"><b>#${id} ${firstName} ${lastName}</b></div>
        <div class="d-flex justify-content-end gap-1">
            <button class="btn btn-success btn-sm"><i class="bi bi-telephone"></i></button>
            <button class="btn btn-danger btn-sm" data-remove-contact><i class="bi bi-trash"></i></button>
        </div>
    `.trim();

    wrapper.innerHTML = content;
    return wrapper;
  };

  const renderContact = (template) => {
    if (!(template instanceof HTMLElement)) return null;
    const contactsList = document.querySelector("[data-contact-list]");
    contactsList.prepend(template);
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
