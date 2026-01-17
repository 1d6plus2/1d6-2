// ===== MOBILE MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.textContent = nav.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Fermer le menu mobile au clic sur un lien
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                if (mobileToggle) {
                    mobileToggle.textContent = '☰';
                }
            }
        });
    });
});

// ===== ACTIVE NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.card, .game-card, .partner-card, .gallery-item');
    animatedElements.forEach(el => observer.observe(el));
});

// ===== NEWSLETTER FORM =====
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter');
    if (newsletterForm) {
        const button = newsletterForm.querySelector('button');
        const input = newsletterForm.querySelector('input');
        
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const email = input.value.trim();
                
                if (email && validateEmail(email)) {
                    alert('Merci pour votre inscription ! Vous recevrez bientôt nos actualités.');
                    input.value = '';
                } else {
                    alert('Veuillez entrer une adresse email valide.');
                }
            });
        }
    }
});

// ===== CONTACT FORM =====
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => data[key] = value);
            
            // Validation basique
            if (!data.name || !data.email || !data.message) {
                alert('Veuillez remplir tous les champs obligatoires.');
                return;
            }
            
            if (!validateEmail(data.email)) {
                alert('Veuillez entrer une adresse email valide.');
                return;
            }
            
            // Simulation d'envoi (à remplacer par votre logique d'envoi)
            alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
            this.reset();
        });
    }
});

// ===== EMAIL VALIDATION =====
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== GALLERY LIGHTBOX (simple) =====
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                // Simple alert pour démo - à remplacer par une vraie lightbox
                window.open(img.src, '_blank');
            }
        });
    });
});

// ===== HEADER SCROLL EFFECT =====
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===== CONSOLE LOG =====
console.log('%c1d6+2 Association', 'color: #e94b3c; font-size: 20px; font-weight: bold;');
console.log('%cSite web développé avec ❤️', 'color: #666; font-size: 12px;');
