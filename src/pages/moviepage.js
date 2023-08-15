import './moviepage.css'
import { dateStrToYear } from '../utils/parser'
import { createElement } from '../utils/dom'

//quando eu importo uma funcao de outro file, eu posso chamar ela direto dentro de outra funcao. nao preciso passar como parametro ou chamar global

//quero me livrar da virgula e nao sei como, tentei replace e nao funcionou, nao sei se usei no lugar errado. tenho que fazer um loop? nao faz sentido
function movieTemplate(movie, credits, recommendedMovies) {
    console.log('movie', movie.genres)
    let cast = ''
    for (let i = 0; i < 4; i++) {
        cast += `
        <figure>
        <img class="cast-cart" src="https://image.tmdb.org/t/p/w500${credits.cast[i].profile_path}" alt='${credits.cast[i].name}' />
        <figcaption class="cast-name">${credits.cast[i].name} as ${credits.cast[i].character}</figcaption>
        </figure>
        `
    }
    // <p class="cast-character"> as ${credits.cast[i].character}</p>
    // essa interacao foi simples, mas pelo fato de eu ter me dado conta que tinha que fazer, quase me fez chorar, nao chegaria a essa conclusao se fosse uns meses atras.

    let recommended = ''
    for (let i= 0; i < 10; i++){
        recommended += `
        <figure class="recommended-cart">
        <img  src="https://image.tmdb.org/t/p/w500${recommendedMovies[i].poster_path}" alt='${recommendedMovies[i].title}' />
        <figcaption id="title" class="title">${recommendedMovies[i].original_title}</figcaption>
        </figure>
        `
    }

    const year = dateStrToYear(movie.release_date)
    return `
    <div id="movie-container" class="movie-container">
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt='${movie.title}' />
    <div id="info-wrapper" class="info-wrapper">
    <p id="title" class="title">${movie.title} title</p>
    <p id="rating" class="rating">Rating: ${movie.vote_average.toFixed(1)}</p>
    <div class="year-time-wrapper">
        <p id="year" class="year"> <i class="fa fa-film" aria-hidden="true"></i>${year}</p>
        <p id="runtime" class="runtime"> <i class="fa fa-clock-o" aria-hidden="true"></i> ${movie.runtime} min</p>    
    </div>
    <div class="genre-container">
        ${movie.genres && movie.genres.map(genre => `<p class="genre">${genre.name}</p>`)}
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
//In my genre container, how can i get rid of the comma i tried replace(), also I tried trim. Im not sure if I add the logic in the right place



//o que esta errado nessa imagem das recomendations
//         <img src="https://image.tmdb.org/t/p/w500${recomendationsResults.poster_path}" alt='${recomendationsResults.title}' />

// nao esquecer de colocar o cast do movie


//essa funcao nao deixa eu passar recommendations.results. Tive que colocar em uma variavel. pq?
function renderMovieContainer(movie, credits, recommendedMovies ) {
    const movieContainer = createElement('section', { 'id': 'movie-container', 'class': 'movie-container' })
    movieContainer.innerHTML = ''
    movieContainer.insertAdjacentHTML('beforeend', movieTemplate(movie, credits, recommendedMovies))

    return movieContainer
}

const moviepage = {
    render: renderMovieContainer
}

export default moviepage