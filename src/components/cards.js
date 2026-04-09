import { statusPersonagem } from "../utils/legend.js";

export function renderCards(personagens, container) {
    container.innerHTML = personagens.map(p => {
        const imgStatus = statusPersonagem(p.status);

        return `<div class="card" data-id="${p.id}">
            <img src="${p.image}" class="card-img" alt="${p.name}" loading="lazy">
            <div class="card-body">
                <h2 class="card-title">${p.name}</h2>
                <div class="card-info">
                    <span class="species">
                        <img src="${imgStatus}" class="icon-status" alt="${p.status}">
                        ${p.species}
                    </span>
                </div>
            </div>
        </div>`;
    }).join('');
}