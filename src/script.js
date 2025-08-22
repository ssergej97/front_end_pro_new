class Todo {
  selectors = {
    root: '[data-js-todo]',
    newTaskForm: '[data-js-todo-new-task-form]',
    newTaskInput: '[data-js-todo-new-task-input]',
    filterTaskForm: '[data-js-filter-task-form]',
    filterTaskInput: '[data-js-filter-task-input]',
    doneTasks: '[data-js-done-tasks]',
    inprogressTasks: '[data-js-inprogress-tasks]',
    list: '[data-js-todo-list]',
    item: '[data-js-todo-item]',
    itemCheckbox: '[data-js-todo-item-checkbox]',
    itemLabel: '[data-js-todo-item-label]',
    itemDeleteButton: '[data-js-todo-item-delete-button]',
    emptyMessage: '[data-js-todo-empty-message]',
  }

  stateClasses = {
    isDisappearing: 'is-disappearing'
  }

  localStorageKey = 'todo-items'
}

new Todo()
