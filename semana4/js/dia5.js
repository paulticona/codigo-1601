// Una funcion es un bloque de codigo que realiza una accion

// la sintaxis de una function se divide. en 3
//*variable para injectarlo al contenedor
const div_container = document.getElementById('container');
// Los mas clasico y antiguo
function nombreDeLaFuncion() {
    // En este espacio podemos escribir codigo
    const alumnos = ["Pepe", "Juan", "Maria", "Luisa", "Lex", "Lucas", "Klark"];
  
    for (let alumno of alumnos) {
      console.log(alumno);
    }
  }
  
  // Nota para hacer que una funcion se ejecute debemos llamarla
  // Esta accion que acabamos de hacer se llama ejecutar a la funcions
  nombreDeLaFuncion();
  
  // Ahora haremos una funcion que retorne una valor
  
  // Teoricamente hay 2 clases de funciones
  // Funciones impuras => Es una funcion que no retorna un valor
  // Funciones puras.  => Es una funcion que retorna valor
  
  // * Las funcion tienen la opcion de usar "return" que es una
  // * parala reserva de JS la cual sirve para devolver un valor
  
  function cuboDeUnNumero() {
    return Math.pow(10, 3);
  }
  
  // recurden que esta es llamar a una funcion
  const resultado = cuboDeUnNumero();
  
  console.log("resultado", resultado);
  
  // Una funcionalidad es el poder enviar valores a las funciones
  // Lo que esta dentro del parentesis en una funcion se llaman parametros
  // y podemos enviar n parametros
  //* Los parametros deben estar separados por comas
  function potenciaDeUnNumero(numero, potencia) {
    return Math.pow(numero, potencia);
  }
  
  const ejemplo1 = potenciaDeUnNumero(4, 3); // 4 al cubo
  const ejemplo2 = potenciaDeUnNumero(6, 2); // 6 al cuadrado
  console.log(ejemplo1);
  console.log(ejemplo2);

  //*Ejercicios:

function sumar(num1, num2){
    const n1 = Number(num1)
    const n2 = Number(num2)
    if(isNaN(n1) || isNaN(n2)){
        return "No puede sumar"
    }
    return num1 + num2
}

div_container.innerHTML += "<p>"+sumar(5, 6)+"</p>" 

//*factorial

function calcularFactorial(numero){
    //! El return aparte de retornar
    //! un valor da fin a la ejecucion de la funcion
    const number= Number(numero)
    if(isNaN(number)){
        return "No es un numero."
    }
    let res = 1
    for(let i = 1; i <= numero; i++){
        res *=i
    }
    return res
}
//? Tambien podemos usar una funcion dentro de otra funcion
function imprimirFactorial(){
    const inputValor = document.getElementById("input_number").value
    const resultado = calcularFactorial(inputValor)

    //?Buscando el html al elemnto que tenga la clase container
    //? si lo encuentra los guarda en la variable container
    //? despues con la propiedad innerHTML para poder agregar html a este container
    const container = document.querySelector(".container")
    container.innerHTML += "<p> Factorial de "+inputValor+": "+resultado+"<p>"
}

 //reto
 const div_tabla = document.getElementById('tabla');
 
function tablaMultiplicar(num){
    //! El return aparte de retornar
    //! un valor da fin a la ejecucion de la funcion
    
const number= Number(num)
if(isNaN(number)){
     return "No es un numero."
}

for(let i=1; i <=12; i++){
        let resultado = i * num
        "<p>"+resultado+"</p>"
    }
}
function imprimirTabla(){
    const valor = document.getElementById("input_numbe-tabla").value
    const mostrar = tablaMultiplicar(valor)

    const table = document.querySelector(".caja_multiplicar")
    table.innerHTML += "<p>"+mostrar+"<p>"
}
//*linder
function calcularTabla() {
    const inputNumber = document.querySelector("#input_number_2");
    let container = document.querySelector(".resultado");
  
    container.innerHTML = "";
  
    const numero = Number(inputNumber.value);
    // Es es basicamente para limpiar el input
    inputNumber.value = "";
  
    if (isNaN(numero)) {
      alert("Ingrese un numero valido");
      // Recureden que el return aparte de retonar un valor tambien terminar la ejecucuion
      // de la funcuion en este nos retornarmos pero si tenemos una alert
      // y luego un return sin nada para que en este caso solo se encargue de terminar la ejecucion
      return;
    }
  
    for (let i = 1; i <= 12; i++) {
      container.innerHTML +=
        "<p>" + numero + " x " + i + " = " + i * numero + "</p>";
    }
  }