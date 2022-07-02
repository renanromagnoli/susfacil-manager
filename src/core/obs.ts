export default class ObsModel {
    #idLaudo: string
    #id: number
    #data: string
    #obsText: string

    constructor(idLaudo: string, id: number, data: string, obsText: string) {
        this.#idLaudo = idLaudo
        this.#id = id
        this.#data = data
        this.#obsText = obsText
    }

    get idLaudo() {
        return this.#idLaudo
    }
    get id() {
        return this.#id
    }
    get data() {
        return this.#data
    }
    get obsText() {
        return this.#obsText
    }

    editText(newText: string) {
        const text = newText
        return new ObsModel(this.idLaudo, this.id, this.data, text)
    }


}