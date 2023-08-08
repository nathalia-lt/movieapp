import './moviepage.css'
import { dateStrToYear } from '../utils/parser'

//quando eu importo uma funcao de outro file, eu posso chamar ela direto dentro de outra funcao. nao preciso passar como parametro ou chamar global


function itemTemplate(item) {//seria o movie como parametro? ja que fiz um foreach nos items e agora quero selecionar o especifico
    const year = dateStrToYear(item.year)

    return `
    <div id="item-container" class="item-container">
    <img width="40px" src="${item.poster}" alt='${item.title}' />
    <div id="info-wrapper" class="info-wrapper">
        <p id="title" class="title">${item.title} title</p>
        <p id="runtime" class="runtime">${item.runtime} title</p>
        <p id="year" class="year">${year}</p>
        <p id="rating" class="rating">${item.rating}</p>
        <p id="synopses" class="synopses">${item.synopsis}</p>
    </div>
</div>
    `
}