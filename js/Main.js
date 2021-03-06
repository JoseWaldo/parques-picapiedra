const dadosUrl = {
    1: "url('../scr/dados/dado-1.svg')",
    2: "url('../scr/dados/dado-2.svg')",
    3: "url('../scr/dados/dado-3.svg')",
    4: "url('../scr/dados/dado-4.svg')",
    5: "url('../scr/dados/dado-5.svg')",
    6: "url('../scr/dados/dado-6.svg')",
}

const lanzarDadosCaja = document.querySelector('.lanzar-dados')
const dado1Objeto = document.querySelector('#dado-1')
const dado2Objeto = document.querySelector('#dado-2')
const botonLanzarDados = document.querySelector('#lanzarDados')
const ventanaLanzarDados = document.querySelector('#ventanaLanzarDados')
const mensajeTurnos = document.querySelector('#mensajeTurnos')

const listaDeCasillas = document.querySelectorAll('td[data-tipo]')

const mensajeDeErrorFichas = document.querySelector('#mensajeDeErrorFichas')
const mensajeDeErrorJugadores = document.querySelector('#mensajeDeErrorJugadores')

const formularioConfigPosIniciales = document.querySelector('#formularioConfigInicial')
const elementosFormConfigPosIni = formularioConfigPosIniciales.elements 
const botonPosicionarFichas = document.querySelector('#posicionarFichas')

const parques = document.querySelector('.juego__parques')

const infoEstado = document.querySelector('#infoEstado')

//let colores = ['roja', 'naranja', 'purpura']
//let numeroDeFichas = 2

let colores = []
let numeroDeFichas

let dado1 
let dado2

let fichas
let posicionesIniciales
let casillas 

let puntajeDados = []

casillas = crearCasillas(document.querySelectorAll('td[data-tipo]'))
/* ----------------------------------------------------------------------------------------  */

formularioConfigPosIniciales.addEventListener('submit', (e) => {
    validar(e)
    
    if(colores != undefined && numeroDeFichas != undefined) {
        
        fichas = crearFichas(colores, numeroDeFichas)
        posicionesIniciales = crearPosicionesIniciales(colores, numeroDeFichas)
        posicionarFichasInicialmente(fichas, posicionesIniciales)
        
        formularioConfigPosIniciales.style.display = 'none'
        
        seleccionarElPrimeroEnLanzar()
        
    }
})


/* ------------------FUNCIONES-------------------- */

function buscarCasilla(id) {
    return casillas[id]

}

function buscarCasillaPorColor(color) {
    for(const idCasilla in casillas) {
        let casilla = casillas[idCasilla]
        if(casilla.obtenerColor === color){
            return casilla
        }
    }

}

function buscarFichaPorColor(color) {
    let fichasEncontradas = []
    for(const idFicha in fichas) {
        let ficha = fichas[idFicha]
        if(ficha.obtenerColor === color){
            fichasEncontradas.push(ficha)
        }
    }
    return fichasEncontradas
}

function buscarFicha(id) {
    return fichas[id]
}

function lanzarDados() {
    dado1 = numeroRandom()
    dado2 = numeroRandom()
    // lanzarDadosCaja.style.display = 'block'
    dado1Objeto.style.backgroundImage = dadosUrl[dado1]
    dado2Objeto.style.backgroundImage = dadosUrl[dado2]
}

function numeroRandom() {
    const numMin = 1
    const numMax = 6
    
    let resultado = Math.floor(Math.random()*(numMax-numMin+1)+numMin)
    
    return resultado
}

function validar(e) {
    numeroDeFichas = validarNumPosIniciales(e)
    colores = validarColoresElegidos(e)
    e.preventDefault()
}

function validarNumPosIniciales(e) {
    let formulario = formularioConfigPosIniciales

    if(formulario.numFichas.value.length == 0) {
        mensajeDeErrorFichas.textContent = 'Por favor complete este campo'
        e.preventDefault()
    }
    else if(!(parseInt(formulario.numFichas.value) >= 2 && parseInt(formulario.numFichas.value) <= 4)) {
        mensajeDeErrorFichas.textContent = 'Valores no validos'
        //alert('Valor no permitido')
        e.preventDefault()
    }
    else {
        mensajeDeErrorFichas.textContent = ''
        return parseInt(formulario.numFichas.value)
    }

}

function validarColoresElegidos(e) {
    let formulario = formularioConfigPosIniciales
    let coloresElegidos = []
    
    for (let i = 0; i < formulario.colores.length; i++) {
        if(formulario.colores[i].checked){
            coloresElegidos.push(formulario.colores[i].id)
        }
    }

    if(coloresElegidos.length < 2) {
        mensajeDeErrorJugadores.textContent = 'Por favor elija m??s de 1 color'
        e.preventDefault()
    } else {
        mensajeDeErrorJugadores.textContent = ''
        return coloresElegidos
    }
}

function seleccionarElPrimeroEnLanzar() {
    infoEstado.textContent = '??Qui??n ser?? el primero en lanzar?'
    ventanaLanzarDados.style.display = 'block'
    
    let index = 0
    let color
    
    botonLanzarDados.addEventListener('click', lanzamiento)
    
    mensajeTurnos.style.display = 'block'
    const mensajeOriginal = mensajeTurnos.textContent  
    mensajeTurnos.textContent = mensajeOriginal + colores[index]   

    function lanzamiento() {
        color = colores[index]
        if(color != undefined) {
            lanzarDados()
            puntajeDados.push(dado1 + dado2) 
            index++
            if(colores[index] != undefined) {
                mensajeTurnos.textContent = mensajeOriginal + colores[index]   
            }
        }
        if(index == colores.length) {
            iniciarJuego()
        }
    }
}

function numeroMayor(array) {
    let numeroMayor = array[0]
    for(let i = 0; i < array.length; i++) {
        if(numeroMayor < array[i]) {
            numeroMayor = array[i]
        }
    }
    return numeroMayor
}

function iniciarJuego() {
    infoEstado.textContent = 'Empieza el juego'
    // ventanaLanzarDados.style.display = 'none'
    
    const puntajeMayor = numeroMayor(puntajeDados)
    const indicePuntajeMayor = puntajeDados.indexOf(puntajeMayor)
    const mensajeOriginal = 'Es el turno de la ficha: '  
    
    let numeroDeOportunidades = 0
    
    let turno 
    turno = indicePuntajeMayor 
    turno %= colores.length
    let color = colores[turno]
    mensajeTurnos.textContent = mensajeOriginal + color
    
    botonLanzarDados.addEventListener('click', (e) => {

        lanzarDados()
        console.log('Dado1: ' + dado1 + ' Dado2: ' + dado2)
        
        if(dado1 === dado2) {
            console.log('saco dados pares')
            console.log(color)
            let casilla = buscarCasillaPorColor(color)
            let fichasAPosicionar = buscarFichaPorColor(color) 
            console.log({
                casilla,
                fichasAPosicionar,
            })
            for(let i = 0; i < fichasAPosicionar.length; i++){
                moverFicha(casilla, fichasAPosicionar[i])
            }
            turno++
            color = colores[turno]
            mensajeTurnos.textContent = mensajeOriginal + color
        }

        else {
            numeroDeOportunidades += 1
            if(numeroDeOportunidades === 3) {
                turno++
                color
                mensajeTurnos.textContent = mensajeOriginal + color
            }
        }    
    })
}


/* MOVER FICHA CON UNA FICHA */

/* 

        color = colores[index] 
        mensajeTurnos.style.display = 'block'
        mensajeTurnos.textContent += color   
        lanzarDados()
        console.log('El color: ' + color + ', saco los dados: ', dado1, dado2)        
        index += 1

*/