export function limparFiltros(limparNome=true) {
    const status = document.querySelector('select[name="status"]')
    const species = document.querySelector('select[name="species"]')
    const gender = document.querySelector('select[name="gender"]')
    const nameElement = document.getElementById('input-name')

    if (limparNome) {
        nameElement.value = "";

    }
    status.value = "padraostatus";
    species.value = "padraospecies";
    gender.value = "padraogender";

   
}

