import './moviepage.css'


function itemTemplate(item) {//seria o movie como parametro? ja que fiz um foreach nos items e agora quero selecionar o especifico
    return `
    <div id="item-container" class="item-container">
    <img width="40px" src="${item.poster}" alt='${item.title}' />
    <div id="info-wrapper" class="info-wrapper">
        <p id="title" class="title">${item.title} title</p>
        <p id="runtime" class="runtime">${item.runtime} title</p>
        <p id="year" class="year">${item.year} title</p>
        <p id="rating" class="rating">${item.rating}</p>
        <p id="synopses" class="synopses">${item.synopsis}</p>
    </div>
</div>
    `
}