const modalPersonagem = document.getElementById('modal-criacao');


export function criarModal(p) {
    modalPersonagem.innerHTML = `  
    <section class="modal">
    <button class="btn-fechar-modal">&#x2715
</button>
    <div class="modal-img">
    <img src="${p.image}" alt="Foto do personagem ${p.name}" class="img-personagem">
</div>
    <div class="nome-filtros">
    <h2 class="titulo-nome-personagem">${p.name}</h2>
    <button class="btn-status" id="btn-status">${p.status}</button>
    <span class="filtros">${p.species} - ${p.gender}</span>
</div>
    <div class="infos-personagem">
    <p class="origem-personagem">Visto pela primeira vez em ${p.origin.name}</p>
    <hr>
    <p class="local-personagem">Visto pela última vez em ${p.location.name}</p>
    <hr>
    <p class="eps-personagem">Aparece em ${p.episode.length} episódio</p>
</div>
</section>`;
    
    if (p.episode.length > 1) {
        const eps = document.querySelector('.eps-personagem');
        eps.textContent=`Aparece em ${p.episode.length} episódios`
    }
    
    modalPersonagem.showModal();

    const btnFechar = modalPersonagem.querySelector('.btn-fechar-modal');

    btnFechar.onclick = () => {
        modalPersonagem.close();
    };

   

}