const tasks = [{Id:1, name: "tarefa1", completed: true}];

const getTasks = () => {
    return (
        tasks
    );
}

const addTask = (taskName) => {
    const tasks2 = { Id:tasks.length+1, name: taskName, completed: false };
    tasks.push(tasks2);
}

let removeTask = (taskId) => {
    tasks = tasks.filter(task => task.Id !== taskId);
}

const updateTask = (taskId, updatedProperties) => {
    const taskToUpdate = tasks.find(task => task.Id === taskId);

    if (taskToUpdate) {
        Object.assign(taskToUpdate, updatedProperties);
    }
}

const updatedProperties = { name: 'Nova Tarefa', completed: true };
updateTask(2, updatedProperties);