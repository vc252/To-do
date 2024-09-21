class mainUI {
    static #instance;
    constructor() {
        if (mainUI.#instance) {
            console.log("mainUI is already created");
            return mainUI.#instance;
        }
        mainUI.#instance = this;
    }
}

export { mainUI };