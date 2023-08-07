import './footer.css'
import '../utils/dom'


//Partials file é onde eu coloco as partes do meu app que vou usar em todas as paginas


function renderFooter(){
//vou criar um elemento html para armazenar o meu header
const footer = createElement('footer', {'id': 'footer-container', 'class': 'footer-container'})
return footer
}


//tenho que mandar o meu footer para o meu controler, para ele poder usar
//vou mandar em forma de objeto

const footer = {
    render: renderFooter
}

export default footer
