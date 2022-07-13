class Ficha {
    
    #id = ''                       // Tipo String
    #domElemento = null            // Tipo Objeto HTML
    #posicionInicial = ''          // Tipo String
    #posicionActual = ''           // Tipo String

    constructor(identificador, objetoHTML) {
        this.#domElemento = objetoHTML
        this.#id = identificador
    }

    get obtenerDomElemento() {
        return this.#domElemento
    }

    get obtenerPosicionInicial() {
        return this.#posicionInicial
    }

    get obtenerPosicionActual() {
        return this.#posicionActual
    }

    get obtenerId() {
        return this.#id
    }

    asignarPosicionActual() {
        try {
            this.#posicionActual = this.#domElemento.parentNode.id
        } catch (error) {
            this.#posicionActual = ''
        }
    } 

    // cambiarPosicionActual(posicionAct) {
    //     this.#posicionActual = posicionAct
    // }

    asignarPosicionInicial(posicionIncial) {
        this.#posicionInicial = posicionIncial
    }
}