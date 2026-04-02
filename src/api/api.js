export async function buscarPersonagens(filtros = {}) {
    const UrlParams = new URLSearchParams(filtros).toString();

    const urlApi = `https://rickandmortyapi.com/api/character/?${UrlParams}`

    const resposta = await fetch(urlApi);
    const dados = await resposta.json();
    return dados;


}