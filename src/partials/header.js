import './header.css'

function renderHeader(){
//vou criar um elemento html para armazenar o meu header
const header = document.createElement('header')
//agora vou criar uma classe e uma id para esse header
header.id = 'header-container'
header.classList.add('header-container')
//agora eu tenho que ter um resultado do que eu fiz acima fazendo um retorno
return header
}

function hamburguerTemplate (){
    return `
    <ul class="menu">
        <li><a class="menuItem" href="#">Home</a></li>
        <li><a class="menuItem" href="#">Profile</a></li>
        <li><a class="menuItem" href="#">About</a></li>
        <li><a class="menuItem" href="#">Contacts</a></li>
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


function renderHamburguerContainer(){
    //eu tenho que criar um elemento html (elemento sao objetos) para colocar no meu index.html
    const hamburgerContainer = document.createElement('div')
    //vou criar propriedades (props) para essa div.
    hamburgerContainer.id = 'hamburger-container'
    hamburgerContainer.classList.add('hamburguer-container')
    //eu tenho que limbar meu container, antes de desenhar o container novamente
    hamburgerContainer.innerHTML = ''
    //aqui eu nao tenho nada para passar como parametro
    hamburgerContainer.innerHTML += hamburguerTemplate()
    return hamburgerContainer
}

function addEventListenerToHamburguer(){
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menuItem');
    const hamburgerBtn = document.querySelector('.hamburgerBtn');
    const menuIcon = document.querySelector('.menuIcon');
    const closeIcon = document.querySelector('.closeIcon')

    hamburgerBtn.addEventListener('click', function toggleMenu(){
        if (menu.classList.contains('showMenu')){
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






//tenho que mandar o meu header para o meu controler, para ele poder usar
//vou mandar em forma de objeto

const header = {
    render: renderHeader,
    hamburguer: renderHamburguerContainer,
    eventHamburguer: addEventListenerToHamburguer
}

export default header
