export const updateDateTime = () => {
    const displayDateTime = document.querySelector('.datetime');

    if (displayDateTime) {
        const now = new Date();
        const mobile = window.innerWidth < 768;

        if (mobile) {
            displayDateTime.textContent = now.toLocaleString('pt-BR').replace(',', ' • ');
        }

        else {
            displayDateTime.textContent = now.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'medium' });
        }
    }
    
}