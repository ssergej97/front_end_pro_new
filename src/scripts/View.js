'use strict';

function Render() {}

Render.prototype.renderTask = function ({name, description, id}) {
  const wrapper = document.getElementById('todoItems');
  const col = document.createElement('div');
  col.classList.add('col-4');
  col.setAttribute('data-id', `${id}`);
  col.setAttribute('data-task', 'task');
  const task = `
                      
                        <div class="taskWrapper">
                          <div class="taskHeading">${name}</div>
                          <div class="taskDescription">${description}</div>
                          <hr />
                          <label class="completed form-check">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              data-id="${id}"
                            />
                            <span>Done</span>
                          </label>
                          <hr />
                          <button class="btn btn-danger delete-btn" data-btn data-id="${id}">Delete</button>
                        </div>
                      
                      `
  col.innerHTML = task ;
  wrapper.append(col);
}

Render.prototype.unrenderedTask = function (id) {
  const tasks = document.querySelectorAll('.col-4');
  for (const task of tasks) {
    console.log(task.dataset.id);
    if (task.dataset.id === id) {
      task.remove();
    }
  }
}

Render.prototype.unrenderedAllTask = function () {
  const tasks = document.querySelectorAll('.col-4');
  for (const task of tasks) {
    if (task.dataset.task) {
      task.remove();
    }
  }
}

const renderedTask = new Render();


