// Parallax effect on mouse move
document.addEventListener('mousemove', (e) => {
    const floatingElements = document.querySelectorAll('.floating-element');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 20;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Counter animation
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.textContent.includes('%') ? '%' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.textContent.includes('%') ? '%' : '+');
        }
    }, 20);
};

// Trigger counter animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                animateCounter(stat, number);
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    observer.observe(statsSection);
}

// Glitch effect on title
const title = document.querySelector('.hero-title');
setInterval(() => {
    if (Math.random() > 0.95) {
        title.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        setTimeout(() => {
            title.style.transform = 'translate(0, 0)';
        }, 100);
    }
}, 2000);

// Fade in animation on scroll
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .timeline-item, .portfolio-item, .tech-item, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s, transform 0.6s';
    fadeObserver.observe(el);
});

// Staggered animation for timeline
document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.2}s`;
});

// Staggered animation for tech items
document.querySelectorAll('.tech-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

// Portfolio hover effect with tilt
document.querySelectorAll('.portfolio-item').forEach(item => {
    const portfolioImage = item.querySelector('.portfolio-image');
    
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        // Effet tilt 3D
        portfolioImage.style.transform = 
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        
        // Position pour l'effet de lumière
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        portfolioImage.style.setProperty('--mouse-x', percentX + '%');
        portfolioImage.style.setProperty('--mouse-y', percentY + '%');
    });
    
    item.addEventListener('mouseleave', () => {
        portfolioImage.style.transform = 
            'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Cursor trail effect
const cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// Random glitch on cards
setInterval(() => {
    const cards = document.querySelectorAll('.feature-card, .testimonial-card');
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    if (randomCard && Math.random() > 0.9) {
        randomCard.style.transform = 'translateY(-10px) translateX(2px)';
        setTimeout(() => {
            randomCard.style.transform = 'translateY(-10px)';
        }, 50);
    }
}, 3000);
