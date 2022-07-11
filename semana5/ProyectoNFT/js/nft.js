//seleccionamos nuestro cotenedor
const container = document.querySelector(".container")

// aqui seleccionamos nuestro boton
const inputSearch = document.querySelector("#input-search")
const btnSearch = document.querySelector("#btn-search")
//mapeamos uestro array de objetos
function crearCards(arrayDatos){
    //limpiamo en container
    container.innerHTML = ""

    //hacemos un map a nnuestros array para insertar los ojetos
    arrayDatos.map((artNFT)=>{
        container.innerHTML += `
        <div class="card">
        <h4 class="title"></h4>
        <div class="container-photo">
        <img
            src=${artNFT.imagen}
            alt=""
            width="300"
        />
        </div>
        <div class="container-price">
            <p class="text name">${artNFT.seudonimo} ${artNFT.numero}
            
            <p class="text titulo_precio">Precio</p>
            <p class="text price">
                <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                    fill="#151013" />
                </svg>${artNFT.precio}
            </p>
            <p class="text last-price">Oferta por 
                <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#db45c7">
                </svg>
                ${artNFT.precio_minimo}
            </p>
        </div>
        <button class="btn-buy">Comprar</button>
    </div>
        `
    })
}
crearCards(artNFTs)

function searchfilter(){
    //variable textSearch para alamacenar el valor del inputText
    const textSearch = inputSearch.value
     //validacion
    if(textSearch == ""){
        alert("Ingrese almenos un valor para iniciar busqueda")
        return
    }
    //filtramos nuestro array para la busqueda
    //comvertimos el valor del input de la busqueda a minusculas
     //como tambien el valor de el array de objetos artNfts
    const filtro = artNFTs.filter(x=>
        x.seudonimo.toLowerCase().includes(textSearch.toLowerCase())
    )
    crearCards(filtro) 
}
function limpiarInput(){
    inputSearch.value=""
}

//* Funcionalidad de boton
btnSearch.onclick = function(){
    searchfilter()
    limpiarInput(git)
}
inputSearch.addEventListener("keyup", function(e){
    let keycode = e.keyCode || e.which
    if (keycode == 13) {
        searchfilter()
        limpiarInput()
    }
})


