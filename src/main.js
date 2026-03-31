import { updateDateTime } from './utils/date.js';

updateDateTime();

setInterval(updateDateTime, 1000); /*pesquisar*/

import { buscarFotos } from './api/api.js';

const mainContent = document.querySelector(".main-content");

async function renderizarFotos() {
    const personagens = await buscarFotos();

    if (!personagens || personagens.length === 0) {
        console.error("Nenhuma foto encontrada");
        return;
    }


    mainContent.innerHTML = personagens.map(p => `
        <div class="card">
            <img src="${p.image}" class="card-img" alt="${p.name}" loading="lazy">
            <div class="card-body">
                <h2 class="card-title">${p.name}</h2>
                <div class="card-info">
                    <span class="status ${p.status.toLowerCase()}">
                        ${p.status}
                    </span>
                    <span class="species">
                        ${p.species}
                    </span>
                </div>
            </div>
        </div>
    `).join(''); // O .join('') serve para remover as vírgulas entre os itens do array
}

renderizarFotos();
