export const statusPersonagem = (status) =>{

    let imagem = '';
    
    if (status === "Alive") {
        imagem = 'img/alive.png';
        
    }

    else if (status === "Dead") {
        imagem = 'img/dead.png';
    }

    else if (status === "unknown") {
        imagem = 'img/unknown.png';
    }

    return imagem;

}