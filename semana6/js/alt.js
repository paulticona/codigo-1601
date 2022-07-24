const inputPassword = document.querySelector("#input-password")
const inputPasswordConfirm = document.querySelector("#input-password-confirm")
const inputEmail = document.querySelector("#input-email");
const checkboxShowPassword = document.querySelector("#checkbox-show-password")
const textError = document.querySelector(".text-error");
const textErrorEmail = document.querySelector(".text-error-email")
const inputNumber = document.querySelector('#number')


//Mostrar o tapar contraseña
checkboxShowPassword.addEventListener('change', function(e){
    inputPassword.type = this.checked ? 'text' : 'password'
})

//Comparar las contraseñas para confirma si son iguales
inputPasswordConfirm.addEventListener('keyup', function(e){
    
    // VALIDAR si se escribio el pass en el primer input
    //almancenamos el value de cada input
    let password = inputPassword.value
    let passwordConfirm = inputPasswordConfirm.value
    if (password === "") {
        alert("Completa el campo de contraseña")
        //limpiamos el value de passworconfirm
        this.value = ""
        inputPassword.focus()
        return
    }

    // COMPARAR los valores de los inputs
    if (password !== passwordConfirm) {
        textError.style.display = 'block'
    }else{
        textError.style.display = 'none'
        inputPasswordConfirm.style.borderColor = 'green'
        inputPassword.style.borderColor = 'green'
    }
})

inputEmail.addEventListener('change', function(e){
    //agaramos el valor de email
    let email = this.value
    //nos traemos un regex para validar cuenta
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gm

    //comparamos
    if (regex.test(email) !== true) {
        inputEmail.style.borderColor = 'red'
        textErrorEmail.style.display = 'block'
    }else{
        inputEmail.style.borderColor = 'green'
        textErrorEmail.style.display = 'none'
    }
})

//validamo unput numero
inputNumber.addEventListener('keyup', function(e){
    const valor = this.value
    //convertimos el vnumero o valor en un array
    let caracteres = valor.split("")
    let newValue = ""
    caracteres.forEach((caracter) => {

        if (!isNaN(Number(caracter))) {
            newValue += caracter
        }
    });


    this.value = newValue
})

