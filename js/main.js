const parques = document.querySelector('.juego__parques')
const fichaRoja = document.createElement('div')
const fichaAzul = document.createElement('div')
const fichaVerde = document.createElement('div')


parques.addEventListener('click', (e) => {
    if(e.target.id === 'casilla-prueba') {
        const casillaPrueba = document.querySelector('#casilla-prueba')
        fichaRoja.id = 'ficha-roja'
        fichaAzul.id = 'ficha-azul'
        fichaVerde.id = 'ficha-verde'

        casillaPrueba.insertAdjacentElement('afterbegin', fichaRoja)
        casillaPrueba.insertAdjacentElement('afterbegin', fichaAzul)
        casillaPrueba.insertAdjacentElement('afterbegin', fichaVerde)
    }
}, false);