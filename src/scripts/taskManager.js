import taskCreator from './taskCreator.js'

class TaskManager {
    static #instance;
    #taskMap;
    #index;

    constructor() {
        if (TaskManager.#instance) {
            console.log("task Manager is already craeted")
            return TaskManager.#instance;
        }
        TaskManager.#instance = this;
        this.#taskMap = new Map();
        this.#index = 0
    }

    addTask(task) {
        if (task instanceof taskCreator) {
            this.#taskMap.set(this.#index,task);
            this.#index++;
        } else {
            console.log('give a correct task type')
        }
    }
    deleteTask(index) {
        if (this.#taskMap.has(index)) {
            this.#taskMap.delete(index);
        } else {
            console.error('Task with this index does not exist');
        }
    }
    markComplete(index) {
        const task = this.#taskMap.get(index);
        if (task) {
            task.completed = true;
        } else {
            console.error("task with this index doesn't exists")
        }
    }
    editTask(task, index) {
        if (this.#taskMap.has(index)) {
            this.#taskMap.set(index, task);
        } else {
            console.error('Task with this index does not exist');
        }
    }
}

export default TaskManager;