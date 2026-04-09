export async function buscarPersonagens(filtros = {}) {
    const UrlParams = new URLSearchParams(filtros).toString(); 

    const urlApi = `https://rickandmortyapi.com/api/character/?${UrlParams}`

    try {
        const resposta = await fetch(urlApi);

        if (!resposta.ok) {
            throw new Error("Erro na requisição");
        }

        const dados = await resposta.json();
        return dados;  
    }

    catch (error) {
        console.error("Erro ao buscar dados");
        
        
    }
    


}