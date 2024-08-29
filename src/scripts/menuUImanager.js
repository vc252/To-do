class menuUI {
    static #instance;
    #menu;
    constructor() {
        if (menuUI.#instance) {
            console.log("menu UI manager already created");
            return menuUI.#instance;
        }
        menuUI.#instance = this;
        this.#menu = document.querySelector('menu');
    }

    hideMenu() {
        this.#menu.style.display = 'none';
    }

    showMenu() {
        this.#menu.style.display = 'flex';
    }
}

export default menuUI;