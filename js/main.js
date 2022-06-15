const parques = document.querySelector('.juego__parques')
const fichaRoja = document.createElement('div')
const fichaAzul = document.createElement('div')
const fichaVerde = document.createElement('div')


document.addEventListener('click', iniciar(), false)

function iniciar() {

}


// parques.addEventListener('click', (e) => {
//     if(e.target.id === 'casilla-prueba') {
//         const casillaPrueba = document.querySelector('#casilla-prueba')
//         fichaRoja.id = 'ficha-roja'
//         fichaAzul.id = 'ficha-azul'
//         fichaVerde.id = 'ficha-verde'

//         casillaPrueba.insertAdjacentElement('afterbegin', fichaRoja)
//         casillaPrueba.insertAdjacentElement('afterbegin', fichaAzul)
//         casillaPrueba.insertAdjacentElement('afterbegin', fichaVerde)
//     }
// }, false);

parques.addEventListener('click', (e) => {
    if(e.target.id == 1) {
        const casillaPrueba = document.getElementById('1')
        fichaVerde.id = 'ficha-verde'
        casillaPrueba.insertAdjacentElement('afterbegin', fichaVerde)
    } 
    console.log(e.target.id)
}, false)