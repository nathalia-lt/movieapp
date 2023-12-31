
//aqui vou colocar minhas requisicoes http
//todos os meus fetchs vem aqui

const options = {
    method: 'GET',
    //headers sao as informacoes que eu mando para algum lugar
    //combinado do que aceitavel na comunicacao
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_API_TOKEN
    }
};

async function authentication() {
    //console.log(options)

    const isAuth = await get('https://api.themoviedb.org/3/authentication')
    console.log(isAuth)
    return isAuth.success


}

async function getTopMovies(page=1) {
    const movies = get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`)
    return movies
}


async function getMovie(movieId) {
    if (!isValidId(movieId)) throw new Error('movieId is required')
    const movie = await get(`https://api.themoviedb.org/3/movie/${movieId}`)
    return movie
}

async function getMovieCredits(movieId) {
    if (!isValidId(movieId)) throw new Error('movieId is required')
    const credits = await get(`https://api.themoviedb.org/3/movie/${movieId}/credits`)
    return credits
}


//tudo que vem depois de ? e query parametro e separara elees pelo &.
async function getPopularMovies(page=1) {
    //if (!isValidId(movieId)) throw new Error('movieId is required')
    const popularMovies = await get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`)
    return popularMovies
}



//preciso de parametros aqui? o que seria?
async function getUpcomingMovies(page=1) {
    //if (!isValidId(movieId)) throw new Error('movieId is required')
    const upcomingMovies = await get(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`)
    return upcomingMovies
}


async function getMovieRecommendations(movieId) {
    if (!isValidId(movieId)) throw new Error('movieId is required')
    const recommendations = await get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US`)
    return recommendations
}



//query e o que eu to buscando
async function search(query) {
    const searchMovie = await get(`
    https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US`)
    return searchMovie
}




function isValidId(id) {
    if (typeof id === 'number' && id >= 0) {
        return true
    }
    return false
}

async function get(url) {

    try {
        // fetch faz um REQUEST e get a response
        const response = await fetch(url, options)
        //sempre depois que eu faco a requisicao eu tenho que transformar em json

        if (response.ok === true) {
            const body = await response.json()
            return body
        } else {
            const err = await response.json()
            throw new Error(`Something went wrong : ${err.status_message}`)
        }
    } catch (error) {
        console.log(error.message);
        return null
    }
}



const http = {
    authentication,
    getTopMovies,
    getMovie,
    getMovieCredits,
    getPopularMovies,
    getUpcomingMovies,
    getMovieRecommendations,
    search
}

export default http