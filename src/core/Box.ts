export class BoxModel {
    #id: number
    #title: string
    #category: string
    #laudos?: Array<string>
    #color?: string

    constructor(id: number, title: string, laudos=[''], color='white') {
        this.id = id
        this.#title = title
        this.laudos = laudos
        this.category = title
        this.#color = color
    }

    static empty() {
        return new BoxModel(0, '')
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

    set category(title) {

        let tituloModificado = title
        
        if (tituloModificado.includes(' ') || tituloModificado.includes('/')) {
            if (tituloModificado.includes(' ')) {
                tituloModificado = tituloModificado.split(' ', 1).toString().toLowerCase()
                this.#category = tituloModificado.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                // console.log('titulo modificado com espaço: ', this.category)
            }
            if (tituloModificado.includes('/')) {
                tituloModificado = tituloModificado.split('/', 1).toString().toLowerCase()
                this.#category = tituloModificado.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                // console.log('titulo modificado cocm barra: ', this.category)
            }
            
            // console.log('ID:', this.category)
        } else {
            this.#category = tituloModificado.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            // console.log('titulo com palavra unica: ', this.category)
    }}

    // changeColor(newColor: string) {
    //     const color = newColor
    //     return new BoxModel(this.id, this.category, this.laudos, color)
    // }

}