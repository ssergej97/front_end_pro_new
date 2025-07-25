"use strict";

// Function constructor for Task
function Task(title, description, id) {
  this.title = title;
  this.description = description;
  this.id = id;
}

Task.prototype.done = function () {};
Task.prototype.delete = function () {};
