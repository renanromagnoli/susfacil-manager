export class BoxModel {
    #id: string
    #title: string
    #category: string
    #color: string

    constructor(category: string) {
        this.#title = category
        this.#category = category

    }
    get id() {
        return this.#id
    }
    get title() {
        return this.#title
    }
    get category() {
        return this.#category
    }
    get color() {
        return this.#color
    }

}