import { updateDateTime } from './utils/date.js';
import { buscarPersonagens } from './api/api.js';
import { renderCards } from './components/cards.js';
import { buscarFiltros } from './components/filter.js';
import { pesquisaNome } from './components/search.js';
import { limparFiltros } from './components/limparfiltros.js';
import { pagination } from './components/paginacao.js';
import { criarModal } from './components/modal.js';


let filtrosGlobais = { name: "" };
let listaPersonagens = [];
const mainContent = document.querySelector(".grid-cards");


updateDateTime();
setInterval(updateDateTime, 1000); /*pesquisar*/



async function mostrarPersonagens(filtros={}) {
    const personagens = await buscarPersonagens(filtros);
    listaPersonagens = personagens.results;
    console.log("dados encontrados", personagens)
    
    // mainContent.innerHTML = "";

    if (!personagens || !personagens.results ||  personagens.results.length === 0) {
        mainContent.innerHTML =`<span class="error-message">Nenhum personagem encontrado!</span>`
        console.error("Nenhum personagem encontrado!"); //VERIFICAR
        return;
    }

    renderCards(personagens.results, mainContent)
    pagination(personagens.info,filtros,mostrarPersonagens)
    
}

// document.addEventListener("DOMContentLoaded", () => {
    mostrarPersonagens();
buscarFiltros(mostrarPersonagens, filtrosGlobais);
    
// })

mainContent.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    
    if (card) {
        const id = card.dataset.id;
        const personagem = listaPersonagens.find(p => p.id == id);

        if (personagem);
        criarModal(personagem);
    }
});


const pesquisa=document.querySelector('.input-section');

pesquisa.addEventListener("keypress", async(e)=>{
    if(e.key==='Enter'){
 e.preventDefault();

 const nomePesquisar= await pesquisaNome();
        filtrosGlobais.name = nomePesquisar || "";
        limparFiltros(false);

    if(nomePesquisar){
   await mostrarPersonagens(filtrosGlobais);

 }
    }
   

})

const btnLimpar = document.getElementById('btn-clear');
btnLimpar.addEventListener("click", () => {
    limparFiltros(true);

    filtrosGlobais={name: "", page:1};
    mostrarPersonagens(filtrosGlobais);

});








