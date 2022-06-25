class PuntoInicial {

    #ficha = null
    #domElemento = null

    constructor(domElemento, ficha) {
        this.#domElemento = domElemento
        this.#ficha = ficha
    }

    get getDomElemento() {
        return this.#domElemento
    }

    get getFicha() {
        return this.#ficha
    }

    insertarElemento() {
        console.log('Dentro de insertar elemento')
        let elementoPunto
        let elementoFicha
        elementoPunto = this.#domElemento
        elementoFicha = this.#ficha
        console.log(elementoPunto)
        console.log(elementoFicha)
        elementoPunto.insertAdjacentElement('afterbegin', elementoFicha)
    }
}