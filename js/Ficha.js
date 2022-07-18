class Ficha {
    
    #id = ''                       // Tipo String
    #domElemento = null            // Tipo Objeto HTML
    #posicionInicial = ''          // Tipo String
    #posicionActual = ''
    #color = ''           // Tipo String

    constructor(identificador, objetoHTML, color) {
        this.#domElemento = objetoHTML
        this.#id = identificador
        this.#color = color
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

    get obtenerColor() {
        return this.#color
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