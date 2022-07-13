class Casilla {

    #id = ''                    // Tipo String
    #domElemento = null         // Tipo HTML Object
    #fichas = {}               // Tipo Diccionario Fichas
    #tipo = ''                  // Tipo String

    constructor(identificador, objetoHTML, tipo) {
        this.#id = identificador
        this.#domElemento = objetoHTML
        this.#tipo = tipo
    }

    get obtenerId() {
        return this.#id
    }

    get obtenerElementoDom() {
        return this.#domElemento
    }

    get obtenerFichas() {
        return this.#fichas
    }

    get obtenerTipo() {
        return this.#tipo
    }

    insertarFicha(ficha) {
        this.#fichas[ficha.id] = ficha
        this.#domElemento.insertAdjacentElement('afterbegin', ficha.obtenerDomElemento)
        ficha.asignarPosicionActual()
    }

    remorverFicha(ficha) {
        const idFichaAEliminar = ficha.obtenerId
        delete this.#fichas.idFichaAEliminar
        this.#domElemento.removeChild(ficha.obtenerDomElemento)
        ficha.asignarPosicionActual()
    }
}