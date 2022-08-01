
const btnGet = document.querySelector('#btn-get')

let urlApiLocalHost = "http://localhost:6002/task"

btnGet.addEventListener('click', ()=>{
    
    console.log(getTask().then)
})


async function getTask (){
    try {
        const response = await fetch(urlApiLocalHost)
        const data = await response.json()
        
        return data
    } catch (error) {
        return error
    }

}


function renderTask(){
    const contenidoLista = document.querySelector('#list')
    contenidoLista.innerHTML +=`
        <ul>

        </ul>
    `
}