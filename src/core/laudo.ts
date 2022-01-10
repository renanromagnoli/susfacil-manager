export default class Laudo {
    #id: string
    #name: string
    #number: number
    #clinic: string
    #from: string
    #to?: string

    constructor(name: string, number: number, clinic: string, from: string, to: string, id: string = null) {
        this.#name = name
        this.#number = number
        this.#clinic = clinic
        this.#from = from
        this.#to = to
    }

    static empty() {
        return new Laudo('', 0, '', '', null)
    }
    
    get id() {
        return this.#id
    }
    get name() {
        return this.#name
    }
    get number() {
        return this.#number
    }
    get clinic() {
        return this.#clinic
    }
    get from() {
        return this.#from
    }
    get to() {
        return this.#to
    }

}