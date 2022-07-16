export default class ClinicasCheckModel {
    #id: string
    #titulo: string
    // #selecionado: boolean

    constructor(titulo: string) {
        this.id = titulo
        this.#titulo = titulo
    }

    set id(title) {
        
        let tituloModificado = title
        
        if (tituloModificado.includes(' ') || tituloModificado.includes('/')) {
            if (tituloModificado.includes(' ')) {
                tituloModificado = tituloModificado.split(' ', 1).toString().toLowerCase()
                this.#id = tituloModificado.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                // console.log('titulo modificado com espaço: ', this.id)
            }
            if (tituloModificado.includes('/')) {
                tituloModificado = tituloModificado.split('/', 1).toString().toLowerCase()
                this.#id = tituloModificado.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                // console.log('titulo modificado cocm barra: ', this.id)
            }
            
            // console.log('ID:', this.id)
        } else {
            this.#id = tituloModificado.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            // console.log('titulo com palavra unica: ', this.id)
        }
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