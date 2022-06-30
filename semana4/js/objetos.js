// container:
const div_container = document.getElementById('container');

// Objetos
class Carro {

    constructor(_color, _velocidad) {
        this.color = _color;
        this.velocidad = _velocidad;
    }

    presentacion() {
        const texto = "Hola soy un carro de color " + this.color
        + " y tengo una velocidad de: " + this.velocidad + "kmh";
        return texto;
    }
}
/*
let crearCarros = (numCarros, color) =>{
    for(let i=1; i<=numCarros; i++){
        for (const color of colores) {
            let kmph= Math.random()
            alert(kmph)
            const carro_rojo = new Carro(color, kmph);
        }
    }
}
div_container.innerHTML += "<p>" + crearCarros() + "</p>";
*/
const colores = ["ROJO", "VERDE", "TAMARINDO", "AMARILLO", "CAFE", "NEGRO", "VIOLETA", "AZUL", "MORADO", "FUXIA", "ANARAJADO" ]

let crearCarros = (numCarros,color) =>{
    let num = Number(numCarros)
    for(let i = 0; i<=num; i++){
       
        const car = new Carro(color, Math.round(Math.random()*200))
        div_container.innerHTML += "<p>"+car.presentacion()+"</p>"
        div_container.innerHTML += "<hr>";
    }
}

crearCarros(10,)




 /*

const carro_rojo = new Carro('ROJO', 200); // instanciar objeto
const carro_azul = new Carro('AZUL', 50); // dar vida al objeto


div_container.innerHTML += "<p>" + carro_rojo.presentacion() + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + carro_azul.presentacion() + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + carro_verde.presentacion() + "</p>";
*/