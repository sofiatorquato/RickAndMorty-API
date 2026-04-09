import { updateDateTime } from './utils/date.js';
import { buscarPersonagens } from './api/api.js';
import { renderCards } from './components/cards.js';
import { buscarFiltros } from './components/filter.js';
import { pesquisaNome } from './components/search.js';
import { limparFiltros } from './components/limparfiltros.js';
import { pagination } from './components/paginacao.js';
import { criarModal } from './components/modal.js';
import { setupMobileMenu } from './components/menu-mobile.js';


let filtrosGlobais = { name: "" };
let listaPersonagens = [];
const mainContent = document.querySelector(".grid-cards");
const paginacao = document.getElementById('container-pagination');


updateDateTime();
setInterval(updateDateTime, 1000);



async function mostrarPersonagens(filtros = {}) {
    paginacao.style.display = 'none';
    mainContent.innerHTML = "";
    mainContent.innerHTML = `<div class="loading-container"><img src="img/loading.png" alt="nave do rick and morty" class="nave">
    <p class="message">Viajando entre dimensões...</p>`

    const personagens = await buscarPersonagens(filtros);
    
    await new Promise(resolve => setTimeout(resolve, 1000)); //estudar

    mainContent.innerHTML = "";

    if (!personagens || !personagens.results || personagens.results.length === 0) {

        mainContent.innerHTML = `<div class="message-error"><img src="img/error.png" alt="rick e morty fugindo por um portal"><span class="error-message">Wubba Lubba Dub Dub! O servidor caiu em outra dimensão.</span></div>`  
        
        console.error("Problema na requisição");
        return;
    }

    listaPersonagens = personagens.results;
    paginacao.style.display = 'flex';
    renderCards(personagens.results, mainContent)
    pagination(personagens.info,filtros,mostrarPersonagens);
    
}
    setupMobileMenu();
    mostrarPersonagens();
    buscarFiltros(mostrarPersonagens, filtrosGlobais);
    

    mainContent.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    
    if (card) {
        const id = card.dataset.id;
        const personagem = listaPersonagens.find(p => p.id == id);

        if (personagem) {
            criarModal(personagem)
        }
    }
});


const pesquisa=document.querySelector('.input-section');

pesquisa.addEventListener("keypress", async (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();

        const nomePesquisar = await pesquisaNome();
        filtrosGlobais.name = nomePesquisar || "";
        limparFiltros(false);

        if (nomePesquisar) {
            await mostrarPersonagens(filtrosGlobais);

        }
    }
   

});

const btnLimpar = document.getElementById('btn-clear');
btnLimpar.addEventListener("click", () => {
    limparFiltros(true);

    filtrosGlobais={name: "", page:1};
    mostrarPersonagens(filtrosGlobais);

});








