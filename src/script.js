class Todo {
  selectors = {
    root: "[data-js-todo]",
    newTaskForm: "[data-js-todo-new-task-form]",
    newTaskInput: "[data-js-todo-new-task-input]",
    filterTaskForm: "[data-js-filter-task-form]",
    filterTaskInput: "[data-js-filter-task-input]",
    doneTasks: "[data-js-done-tasks]",
    inProgressTasks: "[data-js-inProgress-tasks]",
    list: "[data-js-todo-list]",
    item: "[data-js-todo-item]",
    itemCheckbox: "[data-js-todo-item-checkbox]",
    itemLabel: "[data-js-todo-item-label]",
    itemDeleteButton: "[data-js-todo-item-delete-button]",
    emptyMessage: "[data-js-todo-empty-message]"
  };

  stateClasses = {
    isDisappearing: "is-disappearing"
  };

  localStorageKey = "todo-items";

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.newTaskFormElement = this.rootElement.querySelector(this.selectors.newTaskForm)
    this.newTaskInputElement = this.rootElement.querySelector(this.selectors.newTaskInput)
    this.filterTaskFormElement = this.rootElement.querySelector(this.selectors.filterTaskForm)
    this.filterTaskInputElement = this.rootElement.querySelector(this.selectors.filterTaskInput)
    this.doneTasksElement = this.rootElement.querySelector(this.selectors.doneTasks)
    this.inProgressTasksElement = this.rootElement.querySelector(this.selectors.inProgressTasks)
    this.listElement = this.rootElement.querySelector(this.selectors.list)
    this.emptyMessageElement = this.rootElement.querySelector(this.selectors.emptyMessage)
    this.state = {
      items: this.getItemsFromLocalStorage(),
    }
    this.render()
  }

  getItemsFromLocalStorage() {
    const rawData = localStorage.getItem(this.localStorageKey)

    if (!rawData) {
      return []
    }

    try {
      const parsedData = JSON.parse(rawData)
      return Array.isArray(parsedData) ? parsedData : []
    } catch {
      console.log('Todo items parse error');
      return []
    }
  }

  saveItemsToLocalStorage() {
    localStorage.setItem(
      this.localStorageKey,
      JSON.stringify(this.state.items)
    )
  }

  render() {
    // this.doneTasksElement.textContent = this.state.items. Из localStorage вытянуть таски с статусом done
    // this.inProgressTasksElement.textContent = this.state.items. Из localStorage вытянуть таски с статусом in progress

    const items = this.state.items

    this.listElement.innerHTML = items.map(({ id, title, isChecked}) => {
      `<li
      class="todo__item todo-item"
      data-js-todo-item
    >
      <input
        type="checkbox"
        id="${id}"
        class="todo-item__checkbox"
        ${isChecked ? 'checked' : ''}
        data-js-todo-item-checkbox
      >
      <label
        for="${id}"
        class="todo-item__label"
        data-js-todo-item-label
      >
        ${title}
      </label>
      <button
        class="todo-item__delete-button"
        type="button"
        title="Delete"
        aria-label="delete"
        data-js-todo-item-delete-button
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="#757575"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </li> 
      `
    }).join('')

    const isEmptyItems = this.state.items.length === 0

    this.emptyMessageElement.textContent = isEmptyItems ? 'There are not tasks yet' : ''
  }

  addItem(title) {
    this.state.items.push({
      id: crypto?.randomUUID() ?? Date.now().toString(),
      title,
      isChecked: false,
    })
    this.saveItemsToLocalStorage()
    this.render()
  }

  deleteItem(id) {
    this.state.items = this.state.items.filter((item) => item.id !== id)
    this.saveItemsToLocalStorage()
    this.render()
  }

  toggleCheckedState(id) {
    this.state.items = this.state.items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isChecked: !item.isChecked,
        }
      }

      return item
    })
    this.saveItemsToLocalStorage()
    this.render()
  }
}

const test = new Todo();
console.log(test);


