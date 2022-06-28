class Carcel {

    #id = ''                // Tipo String
    #posiciones = null      // Array de tipo PuntoInicial

    constructor(identificador, posiciones) {
        this.#posiciones = posiciones
        this.#id = identificador
    }

    get obtenerId() {
        return this.#id
    }

    get obtenerPosiciones() {
        return this.#posiciones
    }

    posicionarElementos() {
        console.log('Dentro de posicionarElementos')

        let listaDePosiciones = this.#posiciones
        for(let i = 0; i < listaDePosiciones.length; i++) {
            listaDePosiciones[i].insertarElemento()
        }

    }
}