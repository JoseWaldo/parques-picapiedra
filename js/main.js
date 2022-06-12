const parques = document.querySelector('#parques')

parques.addEventListener('click', (e) => {
    console.log(e.target.id)
}, false);