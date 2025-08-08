"use strict";

function Render() {}

Render.prototype.renderTask = function ({ title, description }) {
  const wrapper = document.getElementById("todoItems");
  const col = document.createElement("div");
  col.classList.add("col-4");
  const task = `
                      
                        <div class="taskWrapper">
                          <div class="taskHeading">${title}</div>
                          <div class="taskDescription">${description}</div>
                          <hr />
                          <label class="completed form-check">
                            <input
                              type="checkbox"
                              class="form-check-input"
                            />
                            <span>Done</span>
                          </label>
                          <hr />
                          <button class="btn btn-danger delete-btn">Delete</button>
                        </div>
                      
                      `;
  col.innerHTML = task;
  wrapper.append(col);
};

const renderedTask = new Render();
