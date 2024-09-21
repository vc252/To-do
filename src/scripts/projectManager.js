class ProjectManager {
    static #instance;
    #projectSet;

    constructor() {
        if (ProjectManager.#instance) {
            console.log("project manager is already created");
            return ProjectManager.#instance
        }
        this.#projectSet = new Set();
        this.#projectSet.add('inbox');
        ProjectManager.#instance = this;
    }

    //we also need something to see the projects
    getProjectSet() {
        return this.#projectSet;
    }
    addProject(project) {
        if (this.#projectSet.has(project)) {
            console.log('this project is already created');
            return true;
        }
        this.#projectSet.add(project);
    }
    deleteProject(project) {
        if (this.#projectSet.has(project)) {
            this.#projectSet.delete(project);
        } else {
            console.log('there is no such project');
        }
    }
}

export default ProjectManager;