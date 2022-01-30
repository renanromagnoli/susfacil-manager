interface NoteI {
    content: string
    date: string
}

export default class Laudo {
    #id: string
    #name: string
    #number: number
    #clinic: string
    #from: string
    #to?: string
    // #notes?: Array<NoteI>

    constructor(name: string, number: number, clinic: string, from: string, to: string, id: string = null) {
        this.#number = number
        this.#name = name
        this.#clinic = clinic
        this.#from = from
        this.#to = to
        // this.#notes = notes
    }

    static empty() {
        return new Laudo('', null, '', '', null, null)
    }

    // set newNote(note: NoteI) {
    //     this.#notes.push(note)
    // }

    userData() {
        return [this.#number, this.#name, this.#clinic, this.#from, this.#to]
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