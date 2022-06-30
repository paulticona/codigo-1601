
/*ejercitando XD*/
document.write("<h3>Notas</h3>");

let nota=13;
/*nota = Number(prompt("Ingresa noa: "))*/

if(nota<11){
    document.write("<p class='red'>" + nota + "</p>");
    document.write("<p class='red'>Desaprobado</p>");
}else{
    document.write("<p class='blue'>" + nota + "</p>");
    document.write("<p class='blue'>Aprobado</p>");
}
/*Validacion de datos*/
if(isNaN(nota)){
    alert("Solo numeros!")
    nota=Number(prompt("Ingrese Nota: "))
}

document.write("<hr>")

//Triangulos:
document.write("<h3>Triangulo<h3>")
let angulo = 90
document.write("<p>"+angulo+"</p>")

if(angulo==0){
    document.write("<p>Nulo</p>")
}else if(angulo < 90){
    document.write("<p>Agudo</p>")
}else if(angulo == 90){
    document.write("<p>Recto</p>")
}else if(angulo < 180){
    document.write("<p>Obtuso</p>")
}else if(angulo == 180){
    document.write("<p>Llano</p>")
}else if(angulo<360){
    document.write("<p>Concavo</p>")
}else if(angulo==360){
    document.write("<p>completo</p>")
}else{
    document.write("<p>Otro tipo de Angulos</p>")
}
document.write("<hr>")
/*
if(angulo<90){
    document.write("<p>Agudo</p>")
}else{
    if(angulo==90){
        document.write("<p>Recto</p>")
    }else{
        if(angulo<180){
            document.write("<p>Obtuso</p>")
        }else{
            if(angulo==180){
                document.write("<p>llano</p>")
            }else{
                if(angulo<360){
                    document.write("<p>concavo</p>")
                }else{
                    if(angulo==360){
                        document.write("<p>completo</p>")
                    }else{
                        document.write("<p>no existe</p>")
                    }
                }
            }
        }
    }
}
*/
/*
document.write("<h1>CLIMAS</h1>")
clima = Number(prompt("Ingresa el Clima en Grados: "))
if(isNaN(clima)){
    alert("Clima en Grado numericos: ejem 20")
    clima=Number(prompt("Ingresa el Clima en Grados: "))
}
document.write("<p class='blue'>"+ clima +" Grados sobre 0"+ "</p>");
if(clima<10){
    document.write("<b style='color: blue'>FRIO</b>")
}else if(clima<=16){
    document.write("<b style='color: cornflowerblue'>TEMPLADO</b>")
}else if(clima<=24){
    document.write("<b style='color: brown'>CALIDO</b>")
}else{
    document.write("<b style='color: green'>TROPICAL</b>")
}
*/
document.write("<hr>")
document.write("<h1>Perfil</h1>")
nombre = String(prompt("Ingrese su Nombre: "))
sexo = String(prompt("Ingrese su Sexo(M/F): "))
edad = Number(prompt("Ingrese su Edad: "))
notanum = Number(prompt("Ingrese su Nota: "))
document.write("<h4>| DATOS |</h4>")
document.write("<strong>NOMBRE: </strong>"+nombre + "<br>")
document.write("<strong>SEXO: </strong>"+sexo+"<br>")
document.write("<strong>EDAD: </strong>"+edad + " años. <br>")
document.write("<strong>NOTA: </strong>"+notanum + " puntos. <br>")

let mensaje = ""
let resultado = ""
if(notanum >= 0 && notanum <= 3){
    resultado = "<p class='resultado' style='color: red;'>Muy deficiente</p>"
}else if(notanum > 3 && notanum <=5){
    resultado = "<p class='resultado' style='color: lightcoral;'>Insuficiente</p>"
}else if(notanum > 5 && notanum <=6){
    resultado= "<p class='resultado' style='color: rgb(56, 56, 190);'>Suficiente</p>"
}else if(notanum > 6 && notanum <=7){
    resultado = "<p class='resultado' style='color: blue;'>Bien</p>"
}else if(notanum > 7 && notanum <=9){
    resultado = "<p  class='resultado' style='color: lightgreen;'>Notable</p>"
}else{
    resultado = "<p class='resultado' style='color: green;'>Sobresaliente"
}
if(sexo == "m" && edad >=35){
    mensaje = "<b>El Sr. "+nombre+"("+edad+" años) tiene "+notanum+" de nota. "+resultado+"</b><br>"
}else if(sexo == "m" && edad < 35){
    mensaje = "<b>El Joven. "+nombre+"("+edad+" años) tiene "+notanum+" de nota. "+resultado+"</b><br>"
}else if(sexo == "f" && edad >= 35){
    mensaje = "<b>. La Señora. "+nombre+"("+edad+" años) tiene "+notanum+" de nota. "+resultado+"</b><br>"
}else if(sexo == "f" && edad < 35){
    mensaje = "<b>La Señorita. "+nombre+"("+edad+" años) tiene "+notanum+" de nota. "+resultado+"</b><br>"
}

document.write(mensaje)
console.log(mensaje)
console.log(resultado)

