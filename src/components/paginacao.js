export function pagination(info,filtros,callback) {
    
    const anterior = document.getElementById('btn-anterior');
    const proxima = document.getElementById('btn-prox');
    const totalPaginas = document.getElementById('total-pages')
    const limitePaginas = [];
    const raio = 1;
    
    if (!info || !filtros) return;

    const paginaAtual = filtros.page || 1;
    const inicioPage = Math.max(1, paginaAtual - raio);
    const fimPage = Math.min(info.pages, paginaAtual + raio);

    for (let i = inicioPage; i <= fimPage;i++) {
        limitePaginas.push(i)
    }

    if (inicioPage > 1) {
        if (inicioPage > 2) {
            limitePaginas.unshift('...')
        }
        limitePaginas.unshift(1);
       
    }

    if (fimPage < info.pages) {
        if (fimPage < info.pages - 1) {
            limitePaginas.push('...');
        }
        limitePaginas.push(info.pages);
    }

    totalPaginas.innerHTML = "";

    limitePaginas.forEach(numberpages => {
        const btn = document.createElement('button');
        btn.textContent = numberpages;

        if (numberpages === paginaAtual) {
            btn.classList.add('active')
        }
        else if (numberpages !== '...') {
            btn.onclick = () => {
                filtros.page = numberpages;
                callback(filtros);
            }
        }
        totalPaginas.appendChild(btn);
    });
    
    anterior.disabled = !info.prev;
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

