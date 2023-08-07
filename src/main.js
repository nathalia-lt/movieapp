import './style.css'
import homepage from './pages/homepage'
import header from './partials/header'
import footer from './partials/footer'


//isso url e um rotiador mais if 
const url = window.location.pathname
console.log(url)

//para eu usar o meu header em todas as paginas eu coloco aqui, no meu scope global
//estou aqui desenhando o meu HTML
const app = document.getElementById('app')
//aqui estou adicionando (desenhando)o meu header no meu index.html
const el_html_header = header.render() // HTMLElement -> Objeto

//aqui estou tentando display meu hamburguer na tela

const el_html_hamburguer = header.hamburguer() //aqui estou colocando o meu html elemento

//UHUUUUU apareceu
app.appendChild(el_html_hamburguer)

app.appendChild(el_html_header)

if (url === '/') {
    //minha entrada pro js.
    //aqui vai ser meu controler

    async function authentication() {
        const options = {
            method: 'GET',
            //headers sao as informacoes que eu mando para algum lugar
            //combinado do que aceitavel na comunicacao
            headers: {
                accept: 'application/json',
                Authorization: import.meta.env.VITE_API_TOKEN
            }
        };

        //console.log(options)

        const resp = fetch('https://api.themoviedb.org/3/authentication', options)
            .then(response => response.json())
            .then(response => {
                return response.success
            })
            .catch(err => console.error(err));

        return resp
    }

    const isAuthenticated = await authentication()


    async function getTopMovies() {
        const options = {
            method: 'GET',
            //headers sao as informacoes que eu mando para algum lugar
            //combinado do que aceitavel na comunicacao
            headers: {
                accept: 'application/json',
                Authorization: import.meta.env.VITE_API_TOKEN
            }
        };

        const result = fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => { return response.results })
            .catch(err => console.error(err));

        return result
    }



    const movies = isAuthenticated ? await getTopMovies() : []

    //vai me devolver um html sring

    const el_html = homepage.render(movies)
    
    app.appendChild(el_html)
    //e um objeto e nao string por isso append
} else {
    const el_html = `<h1>404</h1>` // Template Literal -> string
    
    app.innerHTML += el_html //+= adicionar ao final
}

//adiciono o footer no final
app.appendChild(el_html_footer)


