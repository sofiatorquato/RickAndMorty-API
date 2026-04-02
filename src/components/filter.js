export function buscarFiltros(mostrarPersonagens, filtroBase) {
    
    const status=document.querySelector('select[name="status"]')
    const species = document.querySelector('select[name="species"]')
    const gender = document.querySelector('select[name="gender"]')
    const inputNome=document.querySelector('.input-section')
    
    function aplicarFiltros() {

        filtroBase.name=inputNome.value;

        if (status.value && status.value !=="padraostatus") filtroBase.status = status.value;
        else delete filtroBase.status;
        if (species.value && species.value !== "padraospecies") filtroBase.species = species.value;
        else delete filtroBase.species;
        if (gender.value && gender.value !== "padraogender") filtroBase.gender = gender.value;
        else delete filtroBase.gender;

        mostrarPersonagens(filtroBase);
    }

    console.log("Filtro alterado: ", filtroBase)
    
    status.addEventListener("change", aplicarFiltros);
    species.addEventListener("change", aplicarFiltros);
    gender.addEventListener("change", aplicarFiltros);
}