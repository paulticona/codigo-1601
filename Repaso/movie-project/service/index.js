import { urlMovie, urlMockAPI } from "./config.js";

export const getMovies = async()=>{
    try {

        const response = await fetch(urlMovie)
        //deestructuramos data
        //const data = await response.json()
        const {entries} = await response.json()
        return entries

    } catch (error) {
        return error
    }
}

export const setMoviesMockApi = async (movie) =>{
    try {
        const object = {
            title: movie.title,
            programType: movie.programType,
            releaseYear: movie.releaseYear,
            imageUrl: movie.images['Poster Art'].url,
        }
        const response = await fetch(urlMockAPI, {
            method: 'POST',
            body: JSON.stringify(object),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response
    } catch (error) {
        return error
    }
}

export const getMoviesMockApi = async()=>{
    try {
        const response = await fetch(urlMockAPI)
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}
