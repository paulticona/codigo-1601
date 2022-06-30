/*document.write("<h1>Dia 3 Swich</h1>")
let edad = 20;

switch (edad) {
  case 0:
    console.log("Reicien nacido");
    break;
  case 18:
    console.log("Mayor de edad");
    break;
  case 20:
    console.log("Entro a base 2");
    break;
  case 65:
    console.log("Entro a la 3ra edad");
    break;
  default:
    console.log("Este caso no esta conteplado");
  // !Nota en el defaulta no hace falta poner break porque solo entra
  // !ahi cuando ni una otra opcion funciona
}

switch (angulo) {
  case 0:
    document.write("<p>Nulo.</p>");
    // despues de ejecutar lo que queremos
    break;
  case 90:
    document.write("<p>React0.</p>");
    break;
  case 180:
    document.write("<p>LLano.</p>");
    break;
  case 360:
    document.write("<p>Completo.</p>");
    break;
}
let angulo = 20;
document.write("<p>" + angulo + "</p>");

let mensaje = "<p>INEXS.</p>";

if (angulo === 0) {
  mensaje = "<p>Nulo.</p>";
} else if (angulo < 90) {
  mensaje = "<p>Águdo.</p>";
} else if (angulo === 90) {
  mensaje = "<p>Recto.</p>";
} else if (angulo < 180) {
  mensaje = "<p>Obtuso.</p>";
} else if (angulo === 180) {
  mensaje = "<p>Llano.</p>";
} else if (angulo < 360) {
  mensaje = "<p>Concavo.</p>";
} else if (angulo === 360) {
  mensaje = "<p>Completo.</p>";
}

document.write(mensaje);

const nombres = ["Pepe", "Juan", "Maria", "Luisa", "Carlos", "Lucas", "Linder"];

console.log(nombres);
console.log(nombres[3]);
console.log(nombres[6]);
// ! Nota si queremos mostrar un dato en una posicon que no existe
// js retorna un undefined
// length => Esta funcion retonarna la cantidad de elementos
console.log("Nombres", nombres.length); // 6 o 7?

const datos = [1, true, false, -2, "Hola mundo"];

console.log("datos", datos.length);

// Pregunta si quieres acceder al ultimo elemento usando length
console.log("datos", datos[datos.length - 1]);

// Push: Sirve para poder agregar un elemento al array
// lo agrega en la ultima posicion
datos.push("Agregando un dato");
console.log("datos con push", datos);
console.log("Agregando un array dentro de un array");
datos.push(["Pepe", "Juan", "Maria"]);
console.log(datos);

const datosPrueba = [
  1,
  true,
  false,
  -2,
  "Hola mundo",
  "Agregando un dato",
  ["Pepe", "Juan", [1, 2, 4, 5, [-1, -2, -4]], "Maria"],
];

console.log(datosPrueba[3]);
console.log(datosPrueba[6][0]);
console.log(datosPrueba[6][2][3]);
console.log(datosPrueba[6][2][4][2]);

console.log(datosPrueba[6][2].length); // 5

console.log(datosPrueba[6][datosPrueba[6].length - 3]);
console.log(
  datosPrueba[6][datosPrueba[6].length - 2][datosPrueba[6][2].length - 1]
);

// Pop es una funciona para poder eleminar el ultimo elemento de un array
const laptops = ["hp", "macbook", "asus", "lenovo"];
console.log("Laptops: ", laptops);
// Retorna el elemento eliminado
console.log("Elemento eliminado", laptops.pop());
console.log("Laptops: ", laptops);

// Supongamos que tengamos una lista de alumnos
const alumnos = ["Luis", "Juan", "Maria", "Luciana", "Lucas"];
const alumnoEliminado = alumnos.pop();
console.log("El alumno " + alumnoEliminado + " fue eliminado");
console.log("Alumnos", alumnos);

// unshift: Esta funcion agrega un elemento a un array pero en la
// primera posicion
alumnos.unshift("Daniel");
console.log("Unshift", alumnos);
//ojo hemos agregado a Daniel
// shift: Esta funcion elminar al primer elemento de un array
console.log("Shift", alumnos.shift());


// indexOf : Esta funcion retorna la posicion en base a un datos
const colores = ["Rojo", "Verde", "Amarillo", "Azul", "Verde", "Morado"];
//Nota si tenemos elementos repetidos va a encontrar al mas cercanos
// en este casi es el 1
//! Es caseSensitive
// Sinsible a mayusculas cuando nos referimos a eso quiere decir que el
// text que se busca debe ser indetico tanto en mayusculo como en  minusculas

//! Si ustedes ponen un valor que no existe este retorna -1
//!* Podemos usar esto para ver si un elemento existe en un array
console.log(colores.indexOf("Verde"));

const busqueda = prompt("Ingrese el color");

if (colores.indexOf(busqueda) !== -1) {
  alert("El color si existe y es " + colores[colores.indexOf(busqueda)]);
} else {
  alert("El color no existe");
}
*/
//* Bucles While

const div_container = document.getElementById('container');
div_container.innerHTML = "<h1>Bucles<h1>"
let frutas= ['pera', 'manzana', 'limon', 'fresa', 'naranja']


//div_container.innerHTML += "<p>" + frutas[1] + "</p>"
/*
let contador = 0
while(contador <frutas.length){
  if(frutas[contador] == 'fresa'){
    break
  }
  div_container.innerHTML += "<p>" + frutas[contador] + "</p>"
  contador += 1
}
*/
/*
//* Bucle FOR
for(let i=0; i < frutas.length; i++){
  div_container.innerHTML += "<p>" + frutas[i] + "</p>"
}*/
let resultado = 0
for(let i=1; i <=20; i++){
  resultado = i * 15
  div_container.innerHTML += "<p>"+i+" x 15 = " + resultado + "</p>"
}
div_container.innerHTML += "<hr>"

for(let m=1; m <=2; m++){
  if(m%2==0) continue
  div_container.innerHTML += ("<h2>Tabla del "+m+"</h2>")
  for(let j=1; j <= 10; j++){
    if(j%2==0) continue
    let texto = m+" x "+j+" = "+(m*j) 
    div_container.innerHTML += ("<p>"+texto+"</p>")
  }
}
/**HR inyectado += */

div_container.innerHTML += "<hr>"
//*Bucle FOR OF
let productos = [
  'teclado',
  'mouse',
  'monitor',
  'parlante',
  'monitor',
  'adaptador',
  'caragdor'
]

for (const i of productos) {
  div_container.innerHTML += "<p>"+i+"</p>"
}

//* BUCLE FOR IN

for (const x in productos) {
  div_container.innerHTML += "<p>"+x+"</p>"
}

div_container.innerHTML += "<hr>"

//*Ejercicios
let contador = 17
let result = 17
for(let k = 1; k<=8; k++){
  result = result + 10
  contador = contador + result
  
}
div_container.innerHTML += "<p>"+contador+"</p><br>"

//* PRIMOS

let count = 0;
for(let i = 1; i < 100; i++){
	for(let j = 1; j <= i; j++){
		if(i % j == 0){
			count++;
		}
	}
	if(count == 2){
		div_container.innerHTML += "<p>"+i+"</p>"

	}
	count = 0;
}

let conta = 0 
for(let p = 1; p <= 100; p++){
  
}