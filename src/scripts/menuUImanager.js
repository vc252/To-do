class menuUI {
    static #instance;
    #menu;
    #menuVisible;
    #addProjectButton;
    #projectDialog;
    constructor(projectDialog) {
        if (menuUI.#instance) {
            console.log("menu UI manager already created");
            return menuUI.#instance;
        }
        menuUI.#instance = this;
        this.#addProjectButton = document.querySelector('#add-project');
        this.#projectDialog = projectDialog;
        this.#initializeEventListeners();
        this.#menuVisible = true;
        this.#menu = document.querySelector('menu');
    }

    #initializeEventListeners() {
        this.#addProjectButton.addEventListener('click',()=>{
            //we need a interface for accepting project name
            this.#projectDialog.showDialog();
        })
    }

    #hideMenu() {
        this.#menu.style.display = 'none';
    }

    #showMenu() {
        this.#menu.style.display = 'flex';
    }

    changeMenuVisibility() {
        if (this.#menuVisible) {
            this.#hideMenu();
        } else {
            this.#showMenu();
        }
        this.#menuVisible = !this.#menuVisible;
    }

    //i want something to handle the projects

}

export default menuUI;