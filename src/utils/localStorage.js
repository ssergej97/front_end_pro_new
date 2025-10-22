import { v4 as uuidv4 } from 'uuid';

const saveToLocalStorage = (taskTitle) => {
    if (!localStorage.getItem("tasks")) {
        const tasks = [];
        const task = {
            id: 1,
            title: taskTitle,
            description: "",
            status: "active",
            createdAt: new Date().toISOString().split('T')[0],
        }
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        return;
    }

    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const task = {
        id: tasks.length + 1,
        title: taskTitle,
        description: "",
        status: "active",
        createdAt: new Date()
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    return;
}

export default saveToLocalStorage;
