const modalPersonagem = document.getElementById('modal-criacao');

//TESTE
export function criarModal(p) {
    modalPersonagem.innerHTML = `  
    <section class="modal-container">
    <div class="modal-header">
        <button class="btn-fechar-modal">x</button>
        <img src="${p.image}" alt="${p.name}" class="modal-img">
        <div class="header-overlay">
            <h2 class="modal-titulo">${p.name}</h2>
            <div class="status-row">
                <span class="status-badge ${p.status.toLowerCase()}">${p.status}</span>
                <span class="subtitle">${p.species} · ${p.gender}</span>
            </div>
        </div>
    </div>
    
    <ul class="modal-lista-info">
        <li><span>Origem</span> <strong>${p.origin.name}</strong></li>
        <li><span>Última localização</span> <strong>${p.location.name}</strong></li>
        <li><span>Espécie</span> <strong>${p.species}</strong></li>
        <li><span>Gênero</span> <strong>${p.gender}</strong></li>
        <li><span class="eps-personagem">Episódios</span> <strong>${p.episode.length} episódios</strong></li>
    </ul>
</section>
`;
    
    if (p.episode.length > 1) {
        const eps = document.querySelector('.eps-personagem');
        eps.textContent=`Aparece em`
    }
    
    modalPersonagem.showModal();

    const btnFechar = modalPersonagem.querySelector('.btn-fechar-modal');

    btnFechar.onclick = () => {
        modalPersonagem.close();
    };

   

}