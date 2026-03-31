import { updateDateTime } from './utils/date.js';
import { buscarPersonagens } from './api/api.js';
import { renderCards } from './components/cards.js';
import { buscarFiltros } from './components/filter.js';

const mainContent = document.querySelector(".main-content");


updateDateTime();
setInterval(updateDateTime, 1000); /*pesquisar*/



async function mostrarPersonagens(filtros={}) {
    const personagens = await buscarPersonagens(filtros);

    if (!personagens || personagens.length === 0) {
        mainContent.innerHTML =`<span class="error-message">Nenhum personagem encontrado!</span>`
        console.error("Nenhum personagem encontrado!");
        return;
    }

        renderCards(personagens,mainContent)
    
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarPersonagens();
    buscarFiltros(mostrarPersonagens);
})






