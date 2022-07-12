

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

const suma = (number, sum = 0) => {
    number === 0
        ? sum
        : suma(number - 1, sum + number)
}
*/

function generarpiramide(base){
    for (let i=1; i<=base; i++){
        for (let j=0; j<i; j++){
              console.log("*")
        }
        document.write("<br />");
    }
}

console.log('%capp.js line:98 generarpiramide(5)', 'color: #007acc;', generarpiramide(5));


while () {
    
}