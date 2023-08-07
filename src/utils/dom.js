
//props seriam minhas propriedades da tag: id, class

// Ex: createelent(tagName, props, children)
// createElement(div, {id: 'teste', class: 'teste'})
// retorno:  <div id="teste" class="teste"></div>
//for in loops in an objeto


export function createElement(tagName, props, children) {
    if (tagName===undefined) throw new Error('tagName is required')
    
    if (props && typeof props !== 'object') throw new Error('props must be an object')

    const element = document.createElement(tagName);

    for (let propName in props) {
        element.setAttribute(propName, props[propName]);
    }

    element.append(children);
    return element; //HTMLElement
}



