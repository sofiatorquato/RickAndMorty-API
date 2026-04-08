export async function buscarPersonagens(filtros = {}) {
    const UrlParams = new URLSearchParams(filtros).toString(); //transformar um objeto em string

    const urlApi = `https://rickandmortyapi.com/api/character/?${UrlParams}`

    try {
        const resposta = await fetch(urlApi);

        if (!resposta.ok) {
            throw new Error ("Erro na conexão com a API")
        }
        const dados = await resposta.json();
        return dados;   
    }

    catch (error) {
        console.error("Erro ao buscar dados");
        
        
    }
    


}