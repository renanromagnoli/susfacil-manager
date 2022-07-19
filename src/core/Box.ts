export class BoxModel {
    #id: string
    #title: string
    #category: string

    constructor(category: string) {
        this.#category = category
        this.#title = this.title

    }
    get id() {
        return this.#id
    }
    get title() {
        return this.#title
    }

}