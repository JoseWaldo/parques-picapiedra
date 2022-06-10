const parques = document.querySelector('#parques')
console.log(parques)

parques.addEventListener('click', (e) => {
    console.log(e.target.id)
}, false);