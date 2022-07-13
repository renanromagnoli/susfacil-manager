export default class ClinicasCheckModel {
    #id: string
    #titulo: string
    // #selecionado: boolean

    constructor(titulo: string) {
        if (titulo.includes(' ')) {
            this.#id = titulo.split(' ', 1)[0].toLowerCase()
        }
        if (titulo.includes('/')) {
            this.#id = titulo.split('/', 1)[0].toLowerCase()
        }
        this.#id = titulo.toLowerCase()
        this.#titulo = titulo
        // this.#selecionado = selecionado
    }

    get id() {
        return this.#id
    }
    get titulo() {
        return this.#titulo
    }
    // get selecionado() {
    //     return this.#selecionado
    // }

    // selecionar() {
    //     return new ClinicasCheckModel(this.id, this.titulo, true)
    // }

    // alterarSelecao() {
    //     const selecao = !this.selecionado
    //     return new ClinicasCheckModel(this.id, this.titulo, selecao)
    // }
}