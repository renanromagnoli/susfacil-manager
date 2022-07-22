interface NoteI {
    content: string
    date: string
}

export default class LaudoModel {
    #id: string
    #name: string
    #number: number
    #clinic: string
    #from: string
    #to?: string
    #notes?: Array<NoteI>

    constructor(name: string, number: number, clinic: string, from: string, to: string, notes: Array<NoteI>, id: string = null) {
        this.#number = number
        this.#name = name
        this.#clinic = clinic
        this.#from = from
        this.#to = to
        this.#notes = notes
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
    get notes(){
        return this.#notes
    }
    
    set newNote(note: NoteI) {
        this.#notes.push(note)
    }
    
    static empty() {
        return new LaudoModel('', 0, '', '', null, null)
    }

    changeNumber(number: number) {
        const newNumber = number
        return new LaudoModel(this.name, newNumber, this.clinic, this.from, this.to, this.notes, this.id)
    }
    changeClinic(clinic: string) {
        const newClinic = clinic
        return new LaudoModel(this.name, this.number, newClinic, this.from, this.to, this.notes, this.id)
    }
    changeTo(to: string) {
        const newTo = to
        return new LaudoModel(this.name, this.number, this.clinic, this.from, newTo, this.notes, this.id)
    }
    changeNotes(notes: Array<NoteI>) {
        const newNotes = notes
        return new LaudoModel(this.name, this.number, this.clinic, this.from, this.to, newNotes, this.id)
        
    }

}