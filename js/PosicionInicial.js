class PosicionInicial {

    #id
    #ficha = null           // Tipo Ficha
    #domElemento = null     // Objeto HTML

    constructor(identificador, domElemento) {
        this.#domElemento = domElemento
        this.#id = identificador
    }

    get obtenerDomElemento() {
        return this.#domElemento
    }

    get obtenerFicha() {
        return this.#ficha
    }

    get obtenerId() {
        return this.#id
    }

    agregarFicha(ficha) {
        this.#ficha = ficha
    }

    insertarElemento() {
        const elementoPunto = this.#domElemento
        const elementoFicha = this.#ficha
        elementoPunto.insertAdjacentElement('afterbegin', elementoFicha.obtenerDomElemento)
        elementoFicha.asignarPosicionInicial(this.#id)
        elementoFicha.asignarPosicionActual()
    }

    removerElemento() {
        const elementoPunto = this.#domElemento
        const elementoFicha = this.#ficha
        elementoPunto.removeChild(elementoFicha.obtenerDomElemento)
        elementoFicha.asignarPosicionActual()
    }
}