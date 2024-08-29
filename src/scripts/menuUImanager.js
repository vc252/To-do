class menuUI {
    static #instance;
    #menu;
    #menuVisible;
    constructor() {
        if (menuUI.#instance) {
            console.log("menu UI manager already created");
            return menuUI.#instance;
        }
        menuUI.#instance = this;
        this.#menuVisible = true;
        this.#menu = document.querySelector('menu');
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
}

export default menuUI;