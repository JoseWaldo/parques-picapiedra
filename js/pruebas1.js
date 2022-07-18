/* IDENTIFICAMOS LAS CONDICIONES CON LAS QUE EL USUARIO QUIERE JUGAR */

const numFichas = 2     
// const numJugadores = 2
const colorFichasJugadoras = ['carcelRoja', 'carcelRosa', 'carcelNaranja', 'carcelVerde']

let carceles = {
    carcelRoja: null,
    carcelNaranja: null,
    carcelPurpura: null,
    carcelAzul: null,
    carcelRosa: null,
    carcelVerde: null,
}

let matriz = {
    fichasRojas: [],
    fichasNaranjas: [],
    fichasPurpura: [],
    fichasAzules: [],
    fichasRosas: [],
    fichasVerdes: [],
}

for (const indice of Object.keys(colorFichasJugadoras)) {
    
    let color = colorFichasJugadoras[indice]
    const cantidadFichas = numFichas
    
    switch (color) {
        case 'carcelRoja':
            carceles['carcelRoja'] = crearCarcel('ficha-roja', 'pi-rojo', color, cantidadFichas)
            break
        
        case 'carcelNaranja': 
            carceles['carcelNaranja'] = crearCarcel('ficha-naranja', 'pi-naranja', color, cantidadFichas)
            break

        case 'carcelPurpura':
            carceles['carcelPurpura'] = crearCarcel('ficha-purpura', 'pi-purpura', color, cantidadFichas)
            break
            
        case 'carcelAzul':
            carceles['carcelAzul'] = crearCarcel('ficha-azul', 'pi-azul', color, cantidadFichas)
            break

        case 'carcelRosa':
            carceles['carcelRosa'] = crearCarcel('ficha-rosa', 'pi-rosa', color, cantidadFichas)
            break

        case 'carcelVerde':
            carceles['carcelVerde'] = crearCarcel('ficha-verde', 'pi-verde', color, cantidadFichas)
            break

    }

    carceles[color].posicionarElementos()
}


/* ---------------------- FUNCIONES PARA CREACION Y EXTRACCIÓN DE ELEMENTOS ---------------------- */

// Dandole el id de un elemento html este nos devuelve el objeto HTML
function traerElemento(identificador) {
    const elemento = document.getElementById(identificador)
    return elemento
}

// Función para crear posiciones iniciales
function crearPosicionInicial(nombreId, ficha) {
    const elemento = traerElemento(nombreId)
    const posicionInicial = new PuntoInicial(elemento, ficha)
    return posicionInicial
}

// Función para crear las fichas usando el id
// ficha-roja-1 --> id
// ficha-roja --> clase
function crearFicha(nombreId) {
    const clase = nombreId.substring(0, nombreId.length - 2)
    const elemento = document.createElement('div')
    elemento.id = nombreId
    elemento.className = 'ficha ' + clase  
    const ficha = new Ficha(elemento)
    return ficha
}

// Funcion para la creación de las carceles
function crearCarcel(nombreFicha, nombrePosInicial, nombreCarcel, nFichas) {
    let idFicha = nombreFicha
    let idPosInicial = nombrePosInicial
    let ficha = null
    let posIni = null
    let listaPosIniciales = []

    for (let i = 1; i <= nFichas; i++) {
        ficha = crearFicha(idFicha + '-' + i)
        posIni = crearPosicionInicial(idPosInicial + '-' + i, ficha)
        listaPosIniciales.push(posIni)
    }

    let carcel = null
    carcel = new Carcel(nombreCarcel, listaPosIniciales)

    return carcel
}

/* ---------------------------------------------------------------------------- */

/*
NOTAS:
> Se puede obtener el id del elemento padre de la siguiente manera:
    >> elementoHijo(htmlObject)
    >> elementoHijo.parentNode.id   
> Se puede eliminar un elemento hijo de un padre de la sgte manera (es un borrado lógico):
    >> elementoPadre.removeChild(elementoHijo)
> Se puede crear atributos personalizado de la sgte manera: colocando data-tipo, para acceder
  desde Js lo podemos lograr con dataset. document.dataset.tipo

  y con document.querySelectorAll('td[data-tipo]') -> podemos acceder a todas las casillas
   que tengan ese atributo
*/
