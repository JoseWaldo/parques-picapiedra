// id, clase

function crearFichas(listaDeColores, cantidadFichas) {
    let color
    let claseFicha
    let idFicha
    let fichas = {}
    let ficha

    for(let i = 0; i < listaDeColores.length; i++) {
        color = listaDeColores[i]
        claseFicha = 'ficha ficha-' + color
        for(let j = 1; j <= cantidadFichas; j++) {
            idFicha = 'ficha-' + color + '-' + j
            ficha = document.createElement('div')
            ficha.id = idFicha
            ficha.className = claseFicha
            fichas[idFicha] = new Ficha(idFicha, ficha)        
        }
    }
    return fichas
}

function crearPosicionesIniciales(listaDeColores, cantidadFichas) {
    let color 
    let id
    let posicioneIniciales = {}

    for(let i = 0; i < listaDeColores.length; i++) {
        color = listaDeColores[i]
        for(let j = 1; j <= cantidadFichas; j++) {
            id = 'pi-' + color + '-' + j
            posicioneIniciales[id] = new PosicionInicial(id, traerElemento(id))
        }
    }

    return posicioneIniciales
}

function crearCasillas(listaDeCasillas) { 
    let casillas = {}
    let indexCasilla
    let tipoDeCasilla
    let idCasilla
    for(let i = 0; i < listaDeCasillas.length; i++) {
        indexCasilla = listaDeCasillas[i]
        tipoDeCasilla = indexCasilla.dataset.tipo
        idCasilla = indexCasilla.id
        casillas[indexCasilla.id] = new Casilla(idCasilla, indexCasilla, tipoDeCasilla)
    }

    return casillas
}

function posicionarFichasInicialmente(fichas, posiciones) {

    const valoresFichas = Object.values(fichas)
    const indicesPosiciones = Object.keys(posiciones)
    const numeroIteraciones = valoresFichas.length
    let ficha 
    let posicionInicial

    for(let i = 0; i < numeroIteraciones; i++) {
        ficha = valoresFichas[i]
        posicionInicial = posiciones[indicesPosiciones[i]]
        posicionInicial.agregarFicha(ficha)
        posicionInicial.insertarElemento()
    }
}

function traerElemento(identificador) {
    const elemento = document.getElementById(identificador)
    return elemento
}

function moverFicha(casilla, ficha) {
    casilla.insertarFicha(ficha)
    ficha.asignarPosicionActual()
}

function enviarFichaCarcel(ficha, listaPosIniciales) {
    const idPosIni = ficha.obtenerPosicionInicial
    const posIni = listaPosIniciales[idPosIni]
    posIni.insertarElemento()
    ficha. asignarPosicionActual()
}