export default class Laudo {
    #id: string
    #name: string
    #number: number
    #from: string
    #clinic: string

    constructor(name: string, number: number, from: string, clinic: string, id: string = null) {
        this.#name = name
        this.#number = number
        this.#from = from
        this.#clinic = clinic
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
    get from() {
        return this.#from
    }
    get clinic() {
        return this.#clinic
    }

}