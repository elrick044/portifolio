document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA PARA MUDAR O HEADER AO ROLAR A PÁGINA ---
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        // Se a posição de rolagem vertical for maior que 50 pixels
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // --- LÓGICA PARA MARCAR O LINK ATIVO NA NAVEGAÇÃO ---
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Opções para o Intersection Observer
    const observerOptions = {
        root: null, // Observa em relação ao viewport
        rootMargin: '0px',
        threshold: 0.6 // A seção precisa estar 60% visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se a seção está visível na tela
            if (entry.isIntersecting) {
                // Remove a classe 'active' de todos os links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Pega o ID da seção que está visível (ex: 'about')
                const id = entry.target.getAttribute('id');
                // Encontra o link correspondente (ex: a[href="#about"])
                const activeLink = document.querySelector(`.nav-menu a[href="#${id}"]`);
                
                // Adiciona a classe 'active' ao link correspondente
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Manda o observer "observar" cada uma das seções
    sections.forEach(section => {
        observer.observe(section);
    });

});