const containerMovies = document.querySelector("#container-movies")


function renderCards(movies) {
    containerMovies.innerHTML = "";
    movies.forEach((movie) => {
      //DeEstructuracion de el array movie
      const {title: titulo, programType: tipo, images: imagenes} = movie
      //console.log(movie)
      let img = imagenes["Poster Art"].url
    
     
      containerMovies.innerHTML += `
        <div class="col">
          <div class="card my-3" >
            <div class="card-header">
            <span class="badge text-bg-${
              tipo === "series" ? "success" : "warning"}">${tipo}
            </span>
            </div>

            <img
              src="${imagenes["Poster Art"].url}"
              class="card-img-top"
              onerror="this.onerror=null;this.src='https://i.quotev.com/img/q/u/15/12/25/78a31e5f80-imag.jpg';"
              alt=""
            />

            <div class="card-body">
              <div class="card-title">${titulo}</div>
              <p class="card-text">
               ${movie.description}
              </p>
              <button class="btn btn-success">VER</button>
            </div>
          </div>
        </div>
      `;
    });
  }

const url = "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json"

fetch(url)
.then((response) => response.json())
.then((data) => renderCards(data.entries))


const urlPokemon = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"

fetch(urlPokemon)
.then((res) => res.json())
.then((data)=>console.log(data))


