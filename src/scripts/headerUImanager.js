class headUI {
    static #instance;
    #menuButton;
    #addButton;
    #dialogManager;
    #menu;
    constructor(menu,todoDialog) {
        if (headUI.#instance) {
            console.log('headUI manager already created');
            return headUI.#instance;
        }
        this.#menuButton = document.querySelector('.menuButton');
        this.#addButton = document.querySelector('header>button');
        this.#menu = menu;
        this.#dialogManager = todoDialog;
        this.#initializeEventListeners();
        headUI.#instance = this;
    }

    #initializeEventListeners() {
        this.#menuButton.addEventListener('click',()=>{
            this.#changeMenuIcon();
            this.#menu.changeMenuVisibility();
        })
        this.#addButton.addEventListener('click',()=>{
            //what will happend when i click the add button
            //we need to open the dialog box right?
            //maybe import dialog box
            this.#dialogManager.showDialog();
        })
    }

    #changeMenuIcon() {
        this.#menuButton.classList.toggle("change");
    }
}

export default headUI;