class Task {
    #topic;
    #description;
    #priority;
    #dueDate;
    #project;
    #completed;

    constructor(topic, description, project, priority = 'normal', dueDate = null, completed = false) {
        this.#topic = topic;
        this.#description = description;
        this.#priority = priority;
        this.#dueDate = dueDate;
        this.#project = project;
        this.#completed = completed;
    }

    // Getters
    get topic() {
        return this.#topic;
    }
    get description() {
        return this.#description;
    }
    get priority() {
        return this.#priority;
    }
    get dueDate() {
        return this.#dueDate;
    }
    get project() {
        return this.#project;
    }
    get completed() {
        return this.#completed;
    }

    // Setters
    set completed(value) {
        if (typeof value === 'boolean') {
            this.#completed = value;
        } else {
            console.error('Completed status must be a boolean.');
        }
    }
}

export default Task;
