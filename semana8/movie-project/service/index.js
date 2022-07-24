
//Metodos para poder:
/**
 * Obtener
 */


import { urlMovie, urlMockAPI } from "./config.js";

//Funcion que retrona 100 peliculas:
//para que un arrow funtion sea async debemos ponerlo0
export const getMovies = async () =>{
    try {
        const response = await fetch(urlMovie)
        // alamcenamos la respuesta del serviodor en data
        const { entries } = await response.json()
        //ahora data tiene 2 key
        /**
         * total: 100
         * entries: []
         */
         return entries
    } catch (error) {
        return error
    }
}

//traer peliculad e mockapi
export const getMoviesFromMockApi = async ()=>{
    try {
        const response = await fetch(urlMockAPI)
        const data = response.json()

        return data
    } catch (error) {
        return error
    }
}

/**
 * Esta funcion va ha crear una pelicula en mockapi
 * recordemos que como es para crear usaremos POST
 */
 export const storeMovieMockApi = async (movie) => {
    try {
      // Este objeto sera el que enviemos a mockApi
      const object = {
        title: movie.title,
        programType: movie.programType,
        releaseYear: movie.releaseYear,
        imageUrl: movie.images["Poster Art"].url,
      };
  
      const response = await fetch(urlMockAPI, {
        method: "POST",
        body: JSON.stringify(object),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      return response;
    } catch (error) {
      return error;
    }
  };

