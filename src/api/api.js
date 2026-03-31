export async function buscarFotos(){
    try{
        const urlApi = await fetch('https://rickandmortyapi.com/api/character')
        const dados = await urlApi.json();
        return dados.results;

    }
    catch(error){
        console.error('Erro ao capturar imagem');
        return [];
    }
}

