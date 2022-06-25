class Carcel {

    #posiciones = null

    constructor(posiciones) {
        this.#posiciones = posiciones
    }

    get getPosiciones() {
        return this.#posiciones
    }

    posicionarElementos() {

        console.log('Dentro de posicionarElementos')

        let listaDePosiciones = this.#posiciones
        for(let i = 0; i < listaDePosiciones.length; i++) {
            listaDePosiciones[i].insertarElemento()
        }
        // console.log(listaDePosiciones[0].insertarElemento())

    }
}