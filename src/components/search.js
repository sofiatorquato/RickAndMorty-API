import { buscarPersonagens } from "../api/api.js";
import { renderCards } from "./cards.js";

export async function pesquisaNome(){
    const inputName = document.getElementById('input-name').value;
    const areaPersonagens = document.querySelector('.main-content');

    if(!inputName) return;

    try{
       const dados= await buscarPersonagens({name: inputName});
       
        renderCards(dados,areaPersonagens);
    }

    catch(error){
        areaPersonagens.innerHTML=`<div class="error-container">
        <p>Erro</p>
        </div>`
    }
}