document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const nav = document.querySelector('.main-nav');
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelectorAll('.main-nav a');
    const sections = document.querySelectorAll('main section');

    // Sticky header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile navigation toggle
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        document.body.classList.toggle('nav-open');
    });

    // Close mobile nav when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
    });

    // Active link highlighting on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6 // 60% of the section must be visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

});
