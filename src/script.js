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
    this.bindEvents()
    this.calcInProgressStatusTasks()
    this.renderInProgressCounter()
    this.renderDoneTasksCounter()
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

  calcInProgressStatusTasks() {
    const currentData = this.state.items;
    let numberOfInProgressTasks = 0;
    currentData.forEach((task) => {
      if (task.status === 'in progress') {
        numberOfInProgressTasks += 1;
      }
    })
    return numberOfInProgressTasks;
  }

  renderInProgressCounter() {
    this.inProgressTasksElement.innerText = `${this.calcInProgressStatusTasks()}`;
  }

  changeStatusTask(id) {
    this.state.items = this.state.items.map((item) => {
      if (item.id === id && item.status === 'in progress') {
        return {
          ...item,
          status: 'done',
        }
      } else if (item.id === id && item.status === 'done') {
        return {
          ...item,
          status: 'in progress',
        }
      }

      return item
    })
    this.saveItemsToLocalStorage()
    this.renderDoneTasksCounter()
    this.renderInProgressCounter()
  }

  calcDoneStatusTasks() {
    const currentData = this.state.items;
    let numberOfDoneTasks = 0;
    currentData.forEach((task) => {
      if (task.status === 'done') {
        numberOfDoneTasks += 1;
      }
    })
    return numberOfDoneTasks;
  }

  renderDoneTasksCounter() {
    this.doneTasksElement.innerText = `${this.calcDoneStatusTasks()}`;
  }

  render() {
    // this.doneTasksElement.textContent = this.state.items. Из localStorage вытянуть таски с статусом done
    // this.inProgressTasksElement.textContent = this.state.items. Из localStorage вытянуть таски с статусом in progress

    const items = this.state.items

    this.listElement.innerHTML = items.map(({ id, title, isChecked }) => `
      <li
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
    `).join('')

    const isEmptyItems = this.state.items.length === 0

    this.emptyMessageElement.textContent = isEmptyItems ? 'There are not tasks yet' : ''
  }

  addItem(title) {
    this.state.items.push({
      id: crypto?.randomUUID() ?? Date.now().toString(),
      title,
      isChecked: false,
      status: 'in progress',
    })
    this.saveItemsToLocalStorage()
    this.render()
    this.renderInProgressCounter()
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

  onNewTaskFormSubmit = (event) => {
    event.preventDefault()

    const newTodoItemTitle = this.newTaskInputElement.value

    if (newTodoItemTitle.trim().length > 0) {
      this.addItem(newTodoItemTitle)
      this.newTaskInputElement.value = '';
      this.newTaskFormElement.focus()
    }
  }

  onClick = ({ target }) => {
    if (target.matches(this.selectors.itemDeleteButton)) {
      console.log('test');
      const itemElement = target.closest(this.selectors.item)
      const itemCheckBoxElement = itemElement.querySelector(this.selectors.itemCheckbox)

      itemElement.classList.add(this.stateClasses.isDisappearing)

      setTimeout(() => {
        this.deleteItem(itemCheckBoxElement.id)
        this.renderInProgressCounter()
        this.renderDoneTasksCounter()
      }, 400)
    }
  }

  onChange = ({ target }) => {
    if (target.matches(this.selectors.itemCheckbox)) {
      this.toggleCheckedState(target.id)
      this.changeStatusTask(target.id)
    }
  }

  filterOnChange = ( {target} ) => {
    if (target.dataset.jsFilterTaskInput === '') {
      if (target.value === 'all') {
        this.filterAllTasks();
      } else if (target.value === 'active') {
        this.filterActiveTasks();
      } else if (target.value === 'completed') {
        this.filterCompletedTasks();
      }
    }
  }

  filterAllTasks() {
    this.render();
  }

  filterActiveTasks() {
    const currentItems = this.state.items;
    const inProgressItems = [];

    currentItems.forEach((item) => {
      if (item.status === 'in progress') {
        inProgressItems.push(item);
      }
    })

    this.listElement.innerHTML = inProgressItems.map(({ id, title, isChecked }) => `
      <li
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
    `).join('')
  }

  filterCompletedTasks () {
    const currentItems = this.state.items;
    const completedItems = [];

    currentItems.forEach((item) => {
      if (item.status === 'done') {
        completedItems.push(item);
      }
    })

    this.listElement.innerHTML = completedItems.map(({ id, title, isChecked }) => `
      <li
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
    `).join('')
  }

  bindEvents() {
    this.newTaskFormElement.addEventListener('submit', this.onNewTaskFormSubmit)
    this.listElement.addEventListener('click', this.onClick)
    this.listElement.addEventListener('change', this.onChange)
    this.filterTaskFormElement.addEventListener('change', this.filterOnChange)
  }
}

new Todo();



