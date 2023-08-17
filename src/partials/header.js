import { createElement } from '../utils/dom'
import './header.css'
import http from '../utils/services/http'
import homepage from '../pages/page'

function renderHeader() {
    //vou criar um elemento html para armazenar o meu header
    //aqui no meu create element eu estou colocando meu hamburguer como children
    //estou criando uma array de children, e pra isso coloco na array

    const header = createElement('header', { 'id': 'header-container', 'class': 'header-container' }, [renderHamburgerContainer(), renderSearchBar()])
    // header.appendChild()


    //agora eu tenho que ter um resultado do que eu fiz acima fazendo um retorno
    return header
}

function hamburgerTemplate() {
    return `
    <ul class="menu">
    <h4>Discover</h4>
        <li><a class="menuItem" href="/">Home</a></li>
        <li><a class="menuItem" href="/popular">Popular</a></li>
        <li><a class="menuItem" href="/upcoming">Upcoming</a></li>
    </ul>
    <!-- Hamburger buttons -->
    <button class="hamburgerBtn">
        <svg class="menuIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg class="closeIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
    `
}


function renderHamburgerContainer() {
    //eu tenho que criar um elemento html (elemento sao objetos) para colocar no meu index.html
    const hamburgerContainer = createElement('div', { 'id': 'hamburger-container', 'class': 'hamburger-container' })
    //eu tenho que limbar meu container, antes de desenhar o container novamente
    hamburgerContainer.innerHTML = ''
    hamburgerContainer.insertAdjacentHTML('beforeend', hamburgerTemplate())
    //eu adicono o container e ja adiciono o evento na sequencia
    addEventListenerToHamburguer(hamburgerContainer)
    //aqui eu nao tenho nada para passar como parametro
    // hamburgerContainer.innerHTML += hamburgerTemplate()
    return hamburgerContainer
}
//o eventliestener no container hambugerconatainer que eu criei
function addEventListenerToHamburguer(hamburgerContainer) {
    // console.log("LOADED HAMBURGER EVENT LISTENER")
    const menu = hamburgerContainer.querySelector('.menu');
    const menuItems = hamburgerContainer.querySelectorAll('.menuItem');
    const hamburgerBtn = hamburgerContainer.querySelector('.hamburgerBtn');
    const menuIcon = hamburgerContainer.querySelector('.menuIcon');
    const closeIcon = hamburgerContainer.querySelector('.closeIcon')

    hamburgerBtn.addEventListener('click', function toggleMenu() {
        if (menu.classList.contains('showMenu')) {
            menu.classList.remove('showMenu');
            closeIcon.style.display = 'none';
            menuIcon.style.display = 'block';
        } else {
            menu.classList.add('showMenu');
            closeIcon.style.display = 'block';
            menuIcon.style.display = 'none';
        }
    })
}

//agora eu preciso chamar esse addEventListenerTo Hamburguer, vou passar ele pro meu objeto e depois, colocar ele em algum lugar que eu tenho que figure it out



//tentando um expandable search bar

function searchTemplate() {


    return `
    <div class="input">
        <input type="text" placeholder="search" id="my-search"/>
    </div>
    <div class="closeInput">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </div>
    <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    </div>
    
    
    `
}

function renderSearchBar() {
    const searchBar = createElement('div', { 'id': 'search-container', 'class': 'search-container' })
    searchBar.innerHTML = ''
    searchBar.insertAdjacentHTML('beforeend', searchTemplate())

    //agora logo eu ja adiciono o evento no meu search
    //eu quero que meu evento se faca no elemento que eu criei, por isso eu passo ele como parametro da minha funcao
    addEventListenerToSearchBar(searchBar)
    return searchBar
}


// o botão de lupa abre o input se o input estiver fechado
// se o input estiver aberto, o botão de lupa serve como botão de busca (abre um url /search?query=${texto_digitado_no_input})
// se o texto_digitado_no_input for vazio, não faz nada (ou dá um aviso para o usuário de que é necessário digitar algo)
// quando o input estiver aberto, apareça o botão de x para fechar o input
/**
 * 
 * @param {HTMLDivElement} searchBar
 */


//const url = window.location.pathname
//window, tem o browser e o dom dentro dele

let inputIsOpen = false;
function addEventListenerToSearchBar(searchBar) {
    const icon = searchBar.querySelector('.icon');
    const closeInput = searchBar.querySelector('.closeInput');
    const input = searchBar.querySelector('.input input')

    function changeUrl() {
        const query = input.value
            console.log(query)  
            //aqui eu estou determinando uma nova url para minha pagina       
            // alterar o endereço da página para /search?query=${query}
            window.location.assign(`/search?query=${query}`)
    }


    icon.addEventListener('click',() => {
        if (!inputIsOpen) {
            searchBar.classList.add('active')
            closeInput.style.display = 'block'
            inputIsOpen = true
        } else {
            changeUrl()
            
        }
    })


    input.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            changeUrl()
        }
    })
    

    closeInput.addEventListener('click', () => {
        if (inputIsOpen) {
            searchBar.classList.remove('active')
            closeInput.style.display = 'hidden'
            inputIsOpen = false
        }
    })


}
//para limpar meu search bar seria assim, tenho que fazer um novo eventlistener?
//const input = document.getElementById('my-search').value = ''



//tenho que mandar o meu header para o meu controler, para ele poder usar
//vou mandar em forma de objeto

const header = {
    render: renderHeader,
}

export default header
