

// ? 
// ? Programacion Funcional
const numeros= [1, 2, 3, 4, 5, 6, 7, 8, 9]
 
const mascotas = [
    {nombre: 'Puchini', edad: 12, raza: 'perro'},
    {nombre: 'Chanchito Feliz', edad: 3, raza: 'perro'},
    {nombre: 'Pulga', edad: 10, raza: 'perro'},
    {nombre: 'Pelusa', edad: 12, raza: 'gato'}
]
//aplicando reduce a numeros
const sumaReduce = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)
console.log("suma: "+sumaReduce)
//caso mas real 
//debemos indexar el arreglo de mascotas para acceder mas facilmente a sus objetos
const indexed = mascotas.reduce((acc, el) => ({
    //devolvemos objeto, creamos una copia del acumulador
    ...acc,
     [el.nombre]: el,
}), {})
console.log(indexed['Pelusa'])
//otro caso con un arreglo anidado
const anidado = [1, [2,3], 4, [5]]
//devolver [1,2,3,4,5]
const plano = anidado.reduce((acc, el) =>acc.concat(el), [])
console.log(plano)


//hacemos un map a numeros
//devuelve un array de la misma longitud pero cada elemento multiplicado
const multiplicados = numeros.map(x => x * 2)
console.log(multiplicados)
//dvuelve una arreglo en parejas
const parejas = numeros.map(num => [num, num])
console.log(parejas)
//devuelve un arreglo con la edad promedio de las edades de mascotas
function Suma(ns) {
    let acumulado = 0
    for (let i = 0; i < ns.length; i++) {
        acumulado += ns[i]
    }
    return acumulado
}
const edad = mascotas.map(e => e.edad)
const promedio = Suma(edad)
console.log(promedio / edad.length)


//?Filtramos numeros
//numerosFiltrados sera el nuevo arreglo creado por filter y es inmutable
const numerosFiltrados = numeros.filter(x => x < 5)
console.log(numerosFiltrados)
//Esto mismo con mascotas
const perros = mascotas.filter(x =>  x.raza == 'perro')
console.log(perros)
const gatos = mascotas.filter(gato => gato.raza == 'gato')
console.log(gatos)


//Recursividad Ejem.Básico
const conteoRegresivo = (a) =>{
    if (a < 0) return
    console.log(a)
    return conteoRegresivo(a-1)
}
//Ejem.Real cosumo de una Api con axios
/*
const axios = require('axios')
const llamarApi = async (url, llamados = 0) => {
   try {
    const result = await axios.get(url)
   } catch (e) {
    if (llamados > 5) {
        return ""
    }
    console.log('%capp.js line:77 e', 'color: #007acc;', e);
    // se llama asi misma 
    return llamarApi(url, llamados + 1)
    }
} 
*/
/*
const suma = (number, sum = 0) => {
    number === 0
        ? sum
        : suma(number - 1, sum + number)
}

const r = suma(100)
console.log(r)

*/
const etiqueta = document.querySelector('.parrafo')
etiqueta.style.color = 'red'

const listItems = document.querySelectorAll('.list-items')
for (let i = 0; i < listItems.length; i++) {
    
}

console.log(listItems)

const ul = document.querySelector('.list')
const li = document.createElement('li')
const firstItem = document.querySelector('.list-items')
li.innerText = "Nuevo Li"
ul.append(li)

console.log(firstItem?.innerText)
console.log(firstItem?.textContent)
console.log(firstItem?.innerHTML)

li.innerText = 'modificando el texto con innertext e'
li.innerHTML += ` <strong>innerhtml</strong>`

//asiganar un nuevo atributo a una etiqueta
li.setAttribute('id','ultimo-item')
console.log(li)

console.log(li.getAttribute('id'))
//asignar una clase al elemento
li.classList.add('box')
//removemos la clase
//li.classList.remove('box')
//averiguar si tiene la clase esto deberia botar un boleano(true or false)
//console.log(li.classList.contains('box'))

//Eliminar elemntos
//firstItem?.remove()

//Obtener nodo pariente del elemento
//console.log(ul?.parentNode?.parentNode)
//console.log(ul?.parentElement?.parentElement)
//Obtener los nodos hijos del elemento
console.log(ul.childNodes)
//ejemplo
//Onbetenemos los elemntos hijos
//console.log(ul?.childElementCount)
console.log(ul.firstElementChild.firstElementChild)
//console.log(ul?.lastElementChild)
//elemntos nodos hijos
console.log(ul.children)
ul.childNodes[1].style.opacity = 0.5
//nodo hermano
console.log(ul.children[2].previousElementSibling)
console.log(ul.children[3].nextElementSibling)

console.log(ul.previousSibling)
console.log(ul.nextSibling)

//seleccionamos el boton
const button = document.querySelector('.btn-click')
//escuchamos el evento click pra realizar todo lo que etsa dentro de la funcion
button.addEventListener('click', ()=>{
    const li2 = document.createElement('li2')
    li2.innerText = 'Hola soy un nuevo LI'
    ul.append(li2)
})
/*
const newBgColor = document.querySelector('.mouseOver')
//escuchamos el evento mouseOver y le pasamos los resuladod e la funcion
newBgColor.addEventListener('mouseover', ()=>{
    newBgColor.innerText = 'lorem'
    newBgColor.style.padding = '10px'
    newBgColor.style.backgroundColor = 'grey'
})
*/
// obtiene todos los id y los muestra en un mensaje
document.querySelector('.deportes').addEventListener('click', (e)=>{
    console.log(e.target.getAttribute('id'))
    //cambiamos el color de background detectando la etiqueta seleccionana con target
    const target = e.target
    let lol = target.matches('li')
    console.log(lol)
    if (target.matches('li')) {
        target.style.backgroundColor = 'lightblue'
    }
})