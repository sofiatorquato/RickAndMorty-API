export function buscarFiltros(mostrarPersonagens, filtroBase) {
    
    const status=document.querySelector('select[name="status"]')
    const species = document.querySelector('select[name="species"]')
    const gender = document.querySelector('select[name="gender"]')
    const inpuNome=document.querySelector('.input-section')
    
    function aplicarFiltros() {

        filtroBase.name=inpuNome.value;

        if (status.value) filtroBase.status = status.value;
        else delete filtroBase.status;
        if (species.value) filtroBase.species = species.value;
        else delete filtroBase.species;
        if (gender.value) filtroBase.gender = gender.value;
        else delete filtroBase.gender;

        mostrarPersonagens(filtroBase);
    }

    status.addEventListener("change", aplicarFiltros);
    species.addEventListener("change", aplicarFiltros);
    gender.addEventListener("change", aplicarFiltros);
}