function createUi() {
  // Create template
  const createTemplate = ({ id, title, description }) => {
    const wrapper = document.createElement("div");
    wrapper.className = "col-4";
    wrapper.setAttribute("data-user-id", id);

    const content = `
        <div class="taskWrapper">
            <div class="taskHeading">${title}</div>
            <div class="taskDescription">${description}</div>
            <hr>
            <label class="completed form-check">
                <input type="checkbox" class="form-check-input">
                <span>Done</span>
            </label>
            <hr>
            <button class="btn btn-danger delete-btn">Delete</button>
        </div>
    `.trim();

    wrapper.innerHTML = content;
    console.log(wrapper);
    return wrapper;
  };

  // Render a task
  const renderTask = (template) => {
    if (!(template instanceof HTMLElement)) return null;
    const contactsList = document.querySelector("[data-task-list]");
    contactsList.prepend(template);
  };

  return {
    createTemplate,
    renderTask,
  };
}

const ui = createUi();
