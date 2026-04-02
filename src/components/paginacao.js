export function pagination(info,filtros,callback) {
    
    const anterior = document.getElementById('btn-anterior');
    const proxima = document.getElementById('btn-prox');
    const totalPaginas = document.getElementById('total-pages')
    
    if (!info || !filtros) return;

    const paginaAtual = filtros.page || 1;
    totalPaginas.textContent = `Página ${paginaAtual} de ${info.pages}`
    
    anterior.hidden = !info.prev;
    proxima.disabled = !info.next;

    proxima.onclick=()=> {
        filtros.page=paginaAtual+1;
        callback(filtros)
    } 
    anterior.onclick=()=> {
        filtros.page=paginaAtual-1;
        callback(filtros)
    } 
    
}

