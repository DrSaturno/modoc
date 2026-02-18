document.addEventListener('DOMContentLoaded', () => {

    // ===== SCROLL REVEAL ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealSelectors = [
        '.service-card',
        '.about-text',
        '.about-visual',
        '.map-info',
        '.map-container',
        '.hero-intro'
    ];

    revealSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('reveal');
            observer.observe(el);
        });
    });

    // ===== HERO SLIDER =====
    const slides = document.querySelectorAll('.hero-slide');
    const carousel = document.querySelector('.hero-carousel');

    if (slides.length > 0) {
        let currentSlide = 0;
        let autoplayTimer = null;
        const SLIDE_INTERVAL = 5000;

        // Crear dots de navegación
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'slider-dots';
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Slide ${i + 1}`);
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });
        carousel.appendChild(dotsContainer);

        function updateDots() {
            document.querySelectorAll('.slider-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });
        }

        function goToSlide(index) {
            slides[currentSlide].classList.remove('active');
            currentSlide = index;
            slides[currentSlide].classList.add('active');
            updateDots();
        }

        function nextSlide() {
            goToSlide((currentSlide + 1) % slides.length);
        }

        function startAutoplay() {
            autoplayTimer = setInterval(nextSlide, SLIDE_INTERVAL);
        }

        function stopAutoplay() {
            clearInterval(autoplayTimer);
        }

        // Pausa al hover
        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);

        // Swipe en mobile
        let touchStartX = 0;
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });

        carousel.addEventListener('touchend', (e) => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    goToSlide((currentSlide + 1) % slides.length);
                } else {
                    goToSlide((currentSlide - 1 + slides.length) % slides.length);
                }
                stopAutoplay();
                startAutoplay();
            }
        }, { passive: true });

        startAutoplay();
    }

    // ===== CONTACT FORM =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = contactForm.querySelector('button');
            const originalText = button.textContent;

            button.textContent = 'Enviando...';
            button.disabled = true;

            setTimeout(() => {
                button.textContent = '¡Mensaje Enviado!';
                button.style.background = '#10b981';
                contactForm.reset();

                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                    button.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // ===== NAV SCROLL EFFECT =====
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('nav-scrolled', window.scrollY > 50);
        }, { passive: true });
    }

    // ===== HAMBURGER MENU =====
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    function openMenu() {
        hamburgerBtn.classList.add('open');
        mobileMenu.classList.add('open');
        menuOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        hamburgerBtn.classList.remove('open');
        mobileMenu.classList.remove('open');
        menuOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.contains('open') ? closeMenu() : openMenu();
        });
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }

    // Cerrar menú al hacer click en cualquier link del menú mobile
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

});
