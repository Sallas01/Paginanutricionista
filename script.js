document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.profile-pic');
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('nav ul');
    const body = document.body;
    
   
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    images.forEach(image => {
        observer.observe(image);
    });

    
    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
        body.classList.toggle('menu-open'); 
    });
});
