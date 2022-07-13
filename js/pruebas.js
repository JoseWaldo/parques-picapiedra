const colores = ['roja', 'verde', 'azul']
const numeroDeFichas = 2
const listaDeCasillas = document.querySelectorAll('td[data-tipo]')

let fichas
fichas = crearFichas(colores, numeroDeFichas)

let posicionesIniciales
posicionesIniciales = crearPosicionesIniciales(colores, numeroDeFichas)

let casillas 
casillas = crearCasillas(listaDeCasillas)

// posicionarFichasInicialmente(fichas, posicionesIniciales)

// moverFicha(casillas['c5'], fichas['ficha-roja-1'])
// enviarFichaCarcel(fichas['ficha-roja-1'], posicionesIniciales)


