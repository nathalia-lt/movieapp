import './moviepage.css'
import { dateStrToYear } from '../utils/parser'
import { createElement } from '../utils/dom'
import noImage from '../assets/noimage.png'


function movieTemplate(movie, credits, recommendedMovies,) {
    console.log('movie', movie.genres)
    let cast = ''
    for (let i = 0; i < 4; i++) {
        cast += `
        <figure class="cast-card">
        <img class="cast-image" src="https://image.tmdb.org/t/p/w500${credits.cast[i].profile_path}" alt='${credits.cast[i].name}' />
        <figcaption class="cast-name">${credits.cast[i].name} as ${credits.cast[i].character}</figcaption>
        </figure>
        `
    }


    //tive que fazer essa funcao pq algumas imagens nao apareciam
    function figTemplate(poster_path, title) {
        const image = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : noImage

        return `<img class="img-rec"  src="${image}" alt='${title}' />`
    }


    let recommended = ''
    for (let i = 0; i < 10; i++) {
        recommended += `
        <a href="/movie/${recommendedMovies[i].id}">
        <figure class="recommended-cart">
            ${figTemplate(recommendedMovies[i].poster_path, recommendedMovies[i].title)}
            <figcaption id="title" class="title-rec">${recommendedMovies[i].original_title}</figcaption>
        </figure> 
        </a>
        `
    }

    let genres = ''
    for (let i = 0; i < 2; i++) {
        genres += `<p class="genre">${movie.genres[i].name}</p>`
    }


    const year = dateStrToYear(movie.release_date)
    return `
    <div id="movie-container" class="movie-container">
    <img class="movie-poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt='${movie.title}' />
    <div id="info-wrapper" class="info-wrapper">
    <p id="title" class="title">${movie.title}</p>
    <p id="rating" class="rating">Rating: ${movie.vote_average.toFixed(1)}</p>
    <div class="year-time-wrapper">
        <p id="year" class="year"> <i class="fa fa-film" aria-hidden="true"></i>${year}</p>
        <p id="runtime" class="runtime"> <i class="fa fa-clock-o" aria-hidden="true"></i> ${movie.runtime} min</p>    
    </div>
    <div class="genre-container">
        ${genres}
    </div>    
        <p id="synopses" class="synopses">${movie.overview}</p>
        <h3>Cast:</h3>
        <div id="cast-container" class="cast-container">
            ${cast}
        </div>
        <h3>You might also like...</h3>
        <section id="recommended-container" class="recommended-container">
            ${recommended}
        <section>
    </div>
    </div>
    `
}


function renderMovieContainer(movie, credits, recommendedMovies) {
    const movieContainer = createElement('section', { 'id': 'movie-container', 'class': 'movie-container' })
    movieContainer.innerHTML = ''
    movieContainer.insertAdjacentHTML('beforeend', movieTemplate(movie, credits, recommendedMovies))

    return movieContainer
}

const moviepage = {
    render: renderMovieContainer
}

export default moviepage