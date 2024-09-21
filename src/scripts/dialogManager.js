import Task from "./taskCreator";
import { format } from "date-fns";

class ProjectDialogManager {
    static #instance;
    #dialog;
    #form;
    #projectManager;
    #closeButton;

    constructor(projectManager) {
        if (ProjectDialogManager.#instance) {
            console.log('project dialog manager is already created');
            return ProjectDialogManager.#instance;
        }

        this.#dialog = document.getElementById('project-dialog');
        this.#form = document.querySelector('#project-dialog>form');
        this.#projectManager = projectManager;
        this.#closeButton = document.querySelector('#project-dialog .close-button');
        this.#initializeEventListeners();

        ProjectDialogManager.#instance = this;
    }

    #initializeEventListeners() {
        this.#closeButton.addEventListener('click',()=>{
            this.#closeDialog();
        })
        this.#form.addEventListener('submit',()=>{
            const data = new FormData(this.#form);
            const projectName = data.get('name');
            this.#projectManager.addProject(projectName);
            console.log(this.#projectManager.getProjectSet());
        })
    }

    showDialog() {
        this.#dialog.showModal();
    }

    #closeDialog() {
        this.#dialog.close();
    }
}
class TodoDialogManager {
    static #instance; 
    #dialog;
    #form;
    #taskManager;
    #closeButton;
    #projectOptions;
    #projectManager;

    constructor(taskManager,projectManager) {
        //#instance is basically being used as a check so that this class instance is not created again
        if (TodoDialogManager.#instance) {
            console.log("todo dialog manager is already created");
            return TodoDialogManager.#instance;
        }

        this.#dialog = document.querySelector('#todo-dialog');
        this.#form = document.querySelector('#todo-dialog>form');
        this.#projectOptions = document.getElementById('project');
        this.#closeButton = document.querySelector('#todo-dialog .close-button');
        this.#taskManager = taskManager;
        this.#projectManager = projectManager;
        this.#initializeEventListeners();

        TodoDialogManager.#instance = this;
    }

    #initializeEventListeners() {
        this.#closeButton.addEventListener('click',()=>{
            //now we want to close the form how?
            this.#closeDialog();
        })
        this.#form.addEventListener('submit',()=>{
            //now we have the form data which we can use
            //but I need to send this to my todo manager
            this.#add_task_from_Form();
        })
    }

    #add_task_from_Form() {
        let data = new FormData(this.#form);
        let topic = data.get('topic');
        let description = data.get('description');
        let project = data.get('project');
        let priority = data.get('priority');
        let dueDate = format(data.get('date'),"MM/dd/yyyy");;

        let task = new Task(topic, description, project, priority, dueDate);

        this.#taskManager.addTask(task);
    }
    
    showDialog() {
        //here we need to add the options to the project 
        this.#updateProjectList();
        this.#dialog.showModal();
    }

    #updateProjectList() {
        this.#projectOptions.innerHTML = '';
        for (let project of this.#projectManager.getProjectSet()) {
            let option = document.createElement('option');
            option.value = project;
            option.textContent = project;
            this.#projectOptions.append(option);
        }
    }

    #closeDialog() {
        this.#dialog.close();
    }
}

export {TodoDialogManager,ProjectDialogManager};