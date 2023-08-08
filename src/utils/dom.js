
//props seriam minhas propriedades da tag: id, class

// Ex: createelent(tagName, props, children)
// createElement(div, {id: 'teste', class: 'teste'})
// retorno:  <div id="teste" class="teste"></div>
//for in loops in an objeto

//in this case the tagName has to be a html element ex: div, header, footer
//eu tenho que avisar minha funcao que caso eu nao passe children seja uma arrray vazia
export function createElement(tagName, props, children = []) {
    if (tagName === undefined) throw new Error('tagName is required')

    if (props && typeof props !== 'object') throw new Error('props must be an object')

    const element = document.createElement(tagName);

    for (let propName in props) {
        // im itireting trhought the key
        //in this case the first prop name will be id and the element
        //in my html el im going to put the id name teste
        // pros[propName] = key[value]
        element.setAttribute(propName, props[propName]);
    }


    children.forEach(child => {
        element.appendChild(child);
    })
    return element; //HTMLElement
}



