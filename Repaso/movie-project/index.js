import { getMovies, getMoviesMockApi, setMoviesMockApi  } from "./service/index.js";


const btnGetMovies = document.querySelector('#btn-get-movies')
const btnSaveApi = document.querySelector('#btn-save-api')
const btnGetMoviesFromMockApi = document.querySelector('#btn-get-movies-mock-api')
const inputNumeroDePelis = document.querySelector('#input-text-num-numero-pelis')
const containerMovies = document.querySelector('#container-movies')
const resultados = document.querySelector('#result')
const tbodyContainer = document.querySelector('#tbody-container')
console.log(tbodyContainer)

const moviesConImages = []

btnGetMovies.addEventListener('click', async()=>{
    const movies = await getMovies()
    containerMovies.innerHTML = ""

    movies
    .sort(()=>0.5 -Math.random())
    .forEach( async(movie) => {
        const imageUrl = movie.images['Poster Art'].url
        const response = await fetch(imageUrl)
        if (response.ok) {
            renderMovie(movie)
        }
    });
})

btnSaveApi.addEventListener('click', ()=>{
    moviesConImages.forEach(async (movie)=> {
        await setMoviesMockApi(movie)
    })
})

btnGetMoviesFromMockApi.addEventListener('click', async ()=>{
    const movies = await getMoviesMockApi()
    containerMovies.innerHTML = ""
    movies
    .sort(()=>0.5 -Math.random())
    .forEach(async (movie) => {
        const imageUrl = movie.imageUrl
        const response = await fetch(imageUrl)
        if (response.ok) {
            renderMovie(movie)
        }
    });

    resultados.innerHTML = movies.length
    movies
    .forEach((movie)=> {
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <th scope="row" class="">${movie.id}</th>
        <td>${movie.title}</td>
        <td>${movie.programType}</td>
        <td>${movie.releaseYear}</td>
        `
        tbodyContainer.appendChild(tr)
    })

})

function renderMovie(movie) {
    // va a contar la cantidad elmentos renderizado en nuestro html
    const movies = document.querySelectorAll('#container-movies .col')

    let value = inputNumeroDePelis.value
    if (movies.length >=value) return

    moviesConImages.push(movie)
    
	containerMovies.innerHTML += `
    <div class="col">
      <div class="card my-3">
        <div class="into-photo">
          <span class="badge text-bg-${
				movie.programType === "series" ? "success" : "warning"
			}">${movie.programType}</span>
          <img
            src="${movie.imageUrl||movie.images['Poster Art'].url}"
            class="card-img-top"
            alt=""
          />
        </div>
        <div class="card-body">
          <div class="card-title">${movie.title}</div>
        </div>
      </div>
    </div>
  `;
}




