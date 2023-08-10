import './moviepage.css'
import { dateStrToYear } from '../utils/parser'
import { createElement } from '../utils/dom'

//quando eu importo uma funcao de outro file, eu posso chamar ela direto dentro de outra funcao. nao preciso passar como parametro ou chamar global


function movieTemplate(movie, credits) {//seria o movie como parametro? ja que fiz um foreach nos items e agora quero selecionar o especifico
    //eu quero so uma parte do cast

    let cast = ''
    for (let i = 0; i < 5; i++) {
        cast += `<p class="cast-name">${credits.cast[i].name}</p>
        <p class="cast-character">as ${credits.cast[i].character}</p>
        <img src="https://image.tmdb.org/t/p/w500${credits.cast[i].profile_path}" alt='${credits.cast[i].name}' />
        `
    }

    const year = dateStrToYear(movie.release_date)
    return `
    <div id="movie-container" class="movie-container">
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt='${movie.title}' />
    <div id="info-wrapper" class="info-wrapper">
        ${movie.genres && movie.genres.map(genre => `<p class="genre">${genre.name}</p>`)}
        <p id="title" class="title">${movie.title} title</p>
        <p id="runtime" class="runtime">${movie.runtime} min</p>
        <p id="year" class="year">${year}</p>
        <p id="rating" class="rating">${movie.vote_average}</p>
        <p id="synopses" class="synopses">${movie.overview}</p>
        <div id="cast-container">${cast}</div>
        </div>
</div>
    `
}

// nao esquecer de colocar o cast do movie


//aqui eu passo o recomendations.results
function renderMovieContainer(movie, credits, ) {
    const movieContainer = createElement('section', { 'id': 'movie-container', 'class': 'movie-container' })
    movieContainer.innerHTML = ''
    movieContainer.insertAdjacentHTML('beforeend', movieTemplate(movie, credits))

    return movieContainer
}

const moviepage = {
    render: renderMovieContainer
}

export default moviepage