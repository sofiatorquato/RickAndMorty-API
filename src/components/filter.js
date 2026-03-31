export function buscarFiltros(mostrarPersonagens) {
    
    const status=document.querySelector('select[name="status"]')
    const species = document.querySelector('select[name="species"]')
    const gender = document.querySelector('select[name="gender"]')
    
    function aplicarFiltros() {
        const filtros = {};

        if (status.value) filtros.status = status.value;
        if (species.value) filtros.species = species.value;
        if (gender.value) filtros.gender = gender.value;

        mostrarPersonagens(filtros);
    }

    console.log(status,species,gender)


    status.addEventListener("change", aplicarFiltros);
    species.addEventListener("change", aplicarFiltros);
    gender.addEventListener("change", aplicarFiltros);
}