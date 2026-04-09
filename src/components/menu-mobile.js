export function setupMobileMenu() {
    const btnMenu = document.querySelector('.menu');
    const sidebar = document.querySelector('.sidebar-filter');

    if (btnMenu && sidebar) {
        btnMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('active');
        });
        
        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target)){
                sidebar.classList.remove('active');
            }
        });
    }
}