class headUI {
    static #instance;
    #menuButton;
    #menu;
    #menuHidden;
    constructor(menu) {
        if (headUI.#instance) {
            console.log('headUI manager already created');
            return headUI.#instance;
        }
        this.#menuButton = document.querySelector('.menuButton');
        this.#menu = menu;
        this.#menuHidden = false;
        this.#initializeEventListeners();
        headUI.#instance = this;
    }

    #initializeEventListeners() {
        this.#menuButton.addEventListener('click',()=>{
            this.#menuButton.classList.toggle("change");
            if (this.#menuHidden) {
                this.#menu.showMenu();
            } else {
                this.#menu.hideMenu();
            }
            this.#menuHidden = !this.#menuHidden;
        })
    }
}

export default headUI;