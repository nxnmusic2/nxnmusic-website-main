document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Scroll Animations (Fade In Up)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(element => {
        observer.observe(element);
    });

    // Booking Form Submission (Placeholder)
    const form = document.querySelector('.booking-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real scenario, this would send data to a backend or email service
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Sent!';
            btn.style.borderColor = 'var(--neon-green)';
            btn.style.color = 'var(--neon-green)';
            
            setTimeout(() => {
                alert("Thank you for your inquiry! nxnmusic_ management will be in touch shortly.");
                form.reset();
                btn.innerText = originalText;
                btn.style.borderColor = '';
                btn.style.color = '';
            }, 500);
        });
    }
});
