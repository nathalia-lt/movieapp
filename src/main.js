import './style.css'
import header from './partials/header'
import homepage from './pages/homepage'
import moviepage from './pages/moviepage'
import footer from './partials/footer'
import http from './utils/services/http'


//isso url e um rotiador mais if 
const url = window.location.pathname
console.log('here is the url', url)


//para eu usar o meu header em todas as paginas eu coloco aqui, no meu scope global
//estou aqui desenhando o meu HTML
const app = document.getElementById('app')

//aqui estou adicionando (desenhando)o meu header no meu index.html
const el_html_header = header.render() // HTMLElement -> Objeto
//hamburguer esta dentro do header entao ja deve renderizar junto. eu renderizei o hamburguer na minha function header, ja que ele faz parte do header


app.appendChild(el_html_header)



if (url === '/') {
    //minha entrada pro js.
    //aqui vai ser meu controler


    const isAuthenticated = await http.authentication()


    const movies = isAuthenticated ? await http.getTopMovies() : []
    
    //vai me devolver um html sring

    //eu so quero os resultados
    const el_html = homepage.render(movies.results)

    app.appendChild(el_html)
    //e um objeto e nao string por isso append
}
// todos esses url === '/XXXXX, é como eu faco o roteamento das paginas, o caminho que sera chamado a minha aplicacao. em outros projetos podemos ter ajuda de biblioteca como express.js ou next.js
else if (url === '/upcoming') {
    // renderizando a pagina upcoming
    const upcoming = await http.getUpcomingMovies()
    console.log('upcoming', upcoming)
    const el_html = homepage.render(upcoming.results)
    app.appendChild(el_html)

}

else if (url === '/popular') {
    const popular = await http.getPopularMovies()
    //console.log('popular', popular)
    const el_html = homepage.render(popular.results)
    app.appendChild(el_html)
}
//busca estatica
else if (url ==='/search') {
    // /search?query=batman
    console.log(window.location.search)
    const params = new URLSearchParams(window.location.search)
    console.log(params)
    params.forEach((value, key) => {
        console.log(key, value)
    })
    const query = params.get('query') || ''
    const search = await http.search(query)
    console.log(search)
    if (search.results) {
        const el_html = homepage.render(search.results)
        app.appendChild(el_html)
    }
    
}

else {
    const parts = url.split('/')

    if (parts[1] === 'movie') {
        //meu id era string e transformei em numero
        const movieId = Number(parts[2])
        //fazer o fetch para pegar as informações do filme daquele id
        //aqui eu chamo o meu fecth que fiz no http file
        //tenho que fazer um await para nao dar promisse
        const movie = await http.getMovie(movieId)

        const recommendations = await http.getMovieRecommendations(movieId)
        const recommendedMovies = recommendations.results
        console.log(recommendedMovies)
        const credits = await http.getMovieCredits(movieId)
        const el_html = moviepage.render(movie, credits, recommendedMovies)
        app.appendChild(el_html)

    } else {
        const el_html = `<h1 style='margin-top: 5rem'>404</h1>` // Template Literal -> string

        app.insertAdjacentHTML('beforeend', el_html)
    }


}


//adiciono o footer no final

// const el_html_footer = footer.render()
// console.log('aqui esta o footer', el_html_footer)
// app.appendChild(el_html_footer)


