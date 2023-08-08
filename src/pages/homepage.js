import './homepage.css'


//no retorno dessa funcao eu NAO vou colocar data-set e sim um fetch quando clicar no card. Dessa forma eu envio todas as informacoes que eu tenho no meu API para essa nova pagina.


const movieCardTemplate = function (item) {
    return `
<a href="/movie/${item.id}" id="movie-item-container" class="movie-item-container">
    <div id="movie-card" class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt='${item.title}' />
    <p id="title" class="title">${item.title} title</p>
    <p id="rating" class="rating">${item.vote_average}</p>
    </div>
</a>
`
}

function renderMoviesContainer(movies) {
    //eu criei um elemento html (um obj para o js) e nao uma string. por isso la no main e append e nao innerHTML
    const moviesContainer = document.createElement('div')
    moviesContainer.id = 'movies-container'
    moviesContainer.classList.add('movies-container')

    //tenho que limpar o container antes de desenhar o container novamente
    moviesContainer.innerHTML = ''
    movies.forEach(movie => {
        moviesContainer.innerHTML += movieCardTemplate(movie)
    })

    return moviesContainer
    //Do I need a settimeout here? pq eu tenho que esperar todos os filmes renderizar, certo?
}


//agora eu adiciono um evento para quando clicar no filme ir para pagina

function addEventListenerToMovieCard() {
    const moviesCard = document.querySelectorAll('movie-item-container')
    moviesCard.forEach(movieCard => {
        movieCard.addEventListener('click', () => {
            //aqui eu preciso selecionar um container? para adiconar o dataset?

            //agora aqui eu coloco os data-set que quero enviar para minha pagina nova. Mas para isso eu preciso colocar em um objeto(que eu ainda nao criei)

        })
    })
}


//aqui eu vou exportar pro meu contoler so o que ele vai usar
const homepage = {
    render: renderMoviesContainer
}

export default homepage