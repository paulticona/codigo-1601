let textoFrace = document.querySelector('.frace')
let btn = document.querySelector('#new-quote')
let textAutor = document.querySelector('.person')

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * fraces.length)
    textoFrace.innerText = fraces[random].frace
    textAutor.innerText = fraces[random].autor
})
