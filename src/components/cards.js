export function renderCards(personagens, container) {
    container.innerHTML = personagens.map(p => `
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
    `).join('');
}