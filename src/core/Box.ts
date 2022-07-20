export class BoxModel {
    #id: number
    #title: string
    #category: string
    #laudos: String[]
    #color: string

    constructor(id: number, category: string, laudos: String[], color='white') {
        this.id = id
        this.#title = category
        this.#category = category
        this.laudos = laudos
        this.#color = color
    }

    static empty() {
        return new BoxModel(0, '', [])
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
    get laudos() {
        return this.#laudos
    }

    set id(id) {
        this.#id = id
    }
    set laudos(newLaudos) {
        this.#laudos = newLaudos
    }

    changeColor(newColor: string) {
        const color = newColor
        return new BoxModel(this.id, this.category, this.laudos, color)
    }

}