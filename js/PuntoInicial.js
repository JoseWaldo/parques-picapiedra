class PuntoInicial {

    #ficha = null           // Tipo Ficha
    #domElemento = null     // Objeto HTML

    constructor(domElemento, ficha) {
        this.#domElemento = domElemento
        this.#ficha = ficha
    }

    get obtenerDomElemento() {
        return this.#domElemento
    }

    get obtenerFicha() {
        return this.#ficha
    }

    insertarElemento() {
        let elementoPunto
        let elementoFicha
        elementoPunto = this.#domElemento
        elementoFicha = this.#ficha.obtenerDomElemento
        elementoPunto.insertAdjacentElement('afterbegin', elementoFicha)
        this.#ficha.asignarPosicion()
    }
}