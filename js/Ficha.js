class Ficha {
    
    #domElemento = null     // Tipo Objeto HTML
    #posicion = ''          // Tipo String

    constructor(objetoHTML) {
        this.#domElemento = objetoHTML
    }

    get obtenerDomElemento() {
        return this.#domElemento
    }

    get obtenerPosicion() {
        return this.#posicion
    }

    asignarPosicion() {
        this.#posicion = this.#domElemento.parentNode.id
    } 

}