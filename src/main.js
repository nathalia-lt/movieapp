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
else if (url === '/about') {
    // renderizar a página about
}
// todos esses url === '/XXXXX, é como eu faco o roteamento das paginas, o caminho que sera chamado a minha aplicacao. em outros projetos podemos ter ajuda de biblioteca como express.js ou next.js
else if (url === '/contact') {
    // renderizar a página contact
}

else if (url === '/popular') {
    // const options = {
    //     method: 'GET',
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGY5ZmE2ZTFlMDdlZWU1YzgyZDg4M2MyN2E0ZmNiOSIsInN1YiI6IjY0Yzk1OGE1MDAxYmJkMDE0NTI1ZDRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zX-w7Hf-qQwiH11tVdQ6O2bmetWhbvJ_yIpyhCzl-Wg'
    //     }
    //   };

    //   fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', options)
    //     .then(response => response.json())
    //     .then(response => { return response.results })
    //     .catch(err => console.error(err));    
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
        console.log(recommendations)
        const credits = await http.getMovieCredits(movieId)
        const el_html = moviepage.render(movie, credits, recommendations.results)
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


