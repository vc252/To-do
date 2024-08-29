class headUI {
    static #instance;
    #menuButton;
    #menu;
    constructor(menu) {
        if (headUI.#instance) {
            console.log('headUI manager already created');
            return headUI.#instance;
        }
        this.#menuButton = document.querySelector('.menuButton');
        this.#menu = menu;
        this.#initializeEventListeners();
        headUI.#instance = this;
    }

    #initializeEventListeners() {
        this.#menuButton.addEventListener('click',()=>{
            this.#changeMenuIcon();
            this.#menu.changeMenuVisibility();
        })
    }

    #changeMenuIcon() {
        this.#menuButton.classList.toggle("change");
    }
}

export default headUI;