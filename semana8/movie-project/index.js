
import { getMovies, storeMovieMockApi } from "./service/index.js";

const btnGetMovies = document.querySelector("#btn-get-movies")
const containerMovies = document.querySelector('#container-movies')
const btnSaveApi = document.querySelector('#btn-save-api')
const inputNumMovies = document.querySelector('#input-num-movies')

const moviesWithImage = []

btnGetMovies.addEventListener('click', async function (){
    const movies = await getMovies()

    containerMovies.innerHTML = ""

    movies
    .sort(()=>0.5 -Math.random())
    //dentro del for each no hereda el async por ende hay que hacer
    //que el foreach sea async
    .forEach( async (movie) => {
        const imageUrl = movie.images['Poster Art'].url
        const response = await fetch(imageUrl)
        //si la peticion falla el response.ok es false
        //si  no response.ok ser a true
        if (response.ok) {
            //si esta ok true lo renderizamos
            renderMovie(movie)
        }
        console.log(response)
    });
})

//segundo boton save api
btnSaveApi.addEventListener('click', function(){
    moviesWithImage.forEach(async (movie) =>{
        console.log('click')
        await storeMovieMockApi(movie)
    })
})


function renderMovie(movie) {
	// va a contar la cantidad elmentos renderizado en nuestro html
	const movies = document.querySelectorAll("#container-movies .col");

	if (movies.length >= 10) return;

	moviesWithImage.push(movie)

	containerMovies.innerHTML += `
    <div class="col">
      <div class="card my-3">
        <div class="into-photo">
          <span class="badge text-bg-${
				movie.programType === "series" ? "success" : "warning"
			}">${movie.programType}</span>
          <img
            src="${movie.images["Poster Art"].url}"
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