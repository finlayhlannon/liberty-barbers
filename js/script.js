// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Scroll event for header
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        
        // Change icon based on menu state
        const icon = menuToggle.querySelector('i');
        if (nav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            
            // Animate the icon
            const icon = this.querySelector('.service-icon');
            icon.style.transform = 'scale(1.1)';
            icon.style.backgroundColor = '#e74c3c';
            icon.style.color = '#fff';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
            
            // Reset the icon
            const icon = this.querySelector('.service-icon');
            icon.style.transform = 'scale(1)';
            icon.style.backgroundColor = '#ecf0f1';
            icon.style.color = '#2c3e50';
        });
    });
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.section-header, .service-card, .about-graphic, .gallery-item, .contact-info');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    document.querySelectorAll('.section-header, .service-card, .about-graphic, .gallery-item, .contact-info').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run animation on initial load
    animateOnScroll();
    
    // Animated barber pole stripes
    const poleStripes = document.querySelector('.pole-stripes');
    if (poleStripes) {
        poleStripes.style.animation = 'moveStripes 8s linear infinite';
    }
    
    // Create a dynamic pattern for the hero section
    const createPattern = () => {
        const heroPattern = document.querySelector('.hero-pattern');
        if (!heroPattern) return;
        
        // Add some random circles for a more dynamic pattern
        for (let i = 0; i < 20; i++) {
            const circle = document.createElement('div');
            circle.classList.add('pattern-circle');
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 50 + 10;
            
            // Random color
            const colors = ['#e74c3c', '#f39c12', '#3498db', '#1abc9c'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            // Set styles
            circle.style.position = 'absolute';
            circle.style.left = `${posX}%`;
            circle.style.top = `${posY}%`;
            circle.style.width = `${size}px`;
            circle.style.height = `${size}px`;
            circle.style.backgroundColor = color;
            circle.style.borderRadius = '50%';
            circle.style.opacity = '0.1';
            
            heroPattern.appendChild(circle);
        }
    };
    
    // Call the function to create the pattern
    createPattern();
});