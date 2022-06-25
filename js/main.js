/* IDENTIFICAMOS LAS CONDICIONES CON LAS QUE EL USUARIO QUIERE JUGAR */

const numFichas = 2
const numJugadores = 2
const colorFichasJugadoras = ['carcelRoja', 'carcelRosa']

const carceles = {
    carcelRoja: null,
    carcelNaranja: null,
    carcelPurpura: null,
    carcelAzul: null,
    carcelRosa: null,
    carcelVerde: null,
}

const matriz = {
    fichasRojas: [],
    fichasNaranjas: [],
    fichasPurpura: [],
    fichasAzules: [],
    fichasRosas: [],
    fichasVerdes: [],
}



// for(let colorCarcel of colorFichasJugadoras) {
//     carceles[colorCarcel] = 
// }

/* COLOCAMOS LAS FICHAS EN LAS CASILLAS SELECCIONADAS */

let fichaRoja1 = null
let fichaRoja2 = null
let fichaAzul1 = null
let fichaAzul2 = null
let piR1 = null
let piR2 = null 
let piA1 = null
let piA2 = null


fichaRoja1 = document.createElement('div')
fichaRoja2 = document.createElement('div')
fichaAzul1 = document.createElement('div')
fichaAzul2 = document.createElement('div')

piR1 = document.getElementById('pi-rojo-1')
piR2 = document.getElementById('pi-rojo-2')
piA1 = document.getElementById('pi-azul-1')
piA2 = document.getElementById('pi-azul-2')

fichaRoja1.className = 'ficha ficha-roja'
fichaRoja2.className = 'ficha ficha-roja'
fichaAzul1.className = 'ficha ficha-azul'
fichaAzul2.className = 'ficha ficha-azul'

fichaRoja1.id = 'fichaR1'
fichaRoja2.id = 'fichaR2'
fichaAzul1.id = 'fichaA1'
fichaAzul2.id = 'fichaA2'

let carcelRoja = null 
carcelRoja = new Carcel([new PuntoInicial(piR1, fichaRoja1), new PuntoInicial(piR2, fichaRoja2)])
let carcelAzul = null
carcelAzul = new Carcel([new PuntoInicial(piA1, fichaAzul1), new PuntoInicial(piA2, fichaAzul2)])

carcelRoja.posicionarElementos()
carcelAzul.posicionarElementos()

/*
NOTAS:
> Se puede obtener el id del elemento padre de la siguiente manera:
    >> elementoHijo(htmlObject)
    >> elementoHijo.parentNode.id   
> Se puede eliminar un elemento hijo de un padre de la sgte manera (es un borrado lógico):
    >> elementoPadre.removeChild(elementoHijo)
*/






