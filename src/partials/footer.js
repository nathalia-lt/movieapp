import './footer.css'
import '../utils/dom'


//Partials file é onde eu coloco as partes do meu app que vou usar em todas as paginas



//esse footer template eu copiei de outro projeto mas troquei o footer element por um div element ja que criei o containainer como footer
function footerTemplate(){
    return`
    <div id="footer" class="footer">Find out more
            <a class="social-icon"  href="https://github.com/nathalia-lt/e-commerce" target="_blank"><i class="fa fa-github"></i></a>
            <a class="social-icon" href="https://www.linkedin.com/in/nathaliatroina/" target="_blank"><i class="fa fa-linkedin"></i></a>
        </div>
    `
}

//alguma coisa aqui esta errada 
//sera que nao da para adicionar o template antes de retornar a criacao do elemento? vou testar..
function renderFooter(){
    //vou criar um elemento html para armazenar o meu footer
    const footer = createElement('footer', {'id': 'footer-container', 'class': 'footer-container'})
    //eu tenho que limpar o html antes se nao, nao vai aparecer na minha pagina
    footer.innerHTML = ''
    footer.innerHTML += footerTemplate()
    return footer
    }




//tenho que mandar o meu footer para o meu controler, para ele poder usar
//vou mandar em forma de objeto

const footer = {
    render: renderFooter
}

export default footer
