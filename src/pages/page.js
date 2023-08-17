import './page.css'
import { createElement } from '../utils/dom'


//no retorno dessa funcao eu NAO vou colocar data-set e sim um fetch quando clicar no card. Dessa forma eu envio todas as informacoes que eu tenho no meu API para essa nova pagina.


//Oii
//eu quero que mude o titulo da pagina sempre que eu mudo de pagina
//ex: popular movies, upcoming movies, top-rated movies
//   


function pageTitleTemplate(title) {
    return `
    <h2>${title}</h2>
    <h3>Movies<h3>
    `
}

//title = '', caso nao receba valor aparece vazio e nao da erro
function renderPageTitle(title = '') {
    const pageTitleContainer = createElement('section', { id: 'title-container', class: 'title-container' })
    pageTitleContainer.innerHTML = pageTitleTemplate(title)
    return pageTitleContainer
}


const movieCardTemplate = function (item) {
    return `
    
<a href="/movie/${item.id}" id="movie-item-container" class="movie-item-container">
    <div id="movie-card" class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt='${item.title}' />
    <div class="wrapper">
    <p id="title" class="title-rec">${item.title}</p>
    <p id="rating" class="rating">Rating: ${item.vote_average}</p>
    </div>
    </div>
</a>
`
}


function renderMoviesContainer(movies) {
    //eu criei um elemento html (um obj para o js) e nao uma string. por isso la no main e append e nao innerHTML
    const moviesContainer = createElement('div', { id: 'movies-container', class: 'movies-container' })
    console.log(movies)
    //tenho que limpar o container antes de desenhar o container novamente
    moviesContainer.innerHTML = ''

    for (let i = 0; i < 8; i++) {
        // console.log(movies[i])
        moviesContainer.innerHTML += movieCardTemplate(movies[i])
    }
    return moviesContainer
}


//aqui eu vou exportar pro meu contoler so o que ele vai usar
const page = {
    //tem que devolver um elemento do dom
    render: (movies, title) => {
        const el = createElement('div', {}, [renderPageTitle(title), renderMoviesContainer(movies)])
        return el
    },

}

export default page