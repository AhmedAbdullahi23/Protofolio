// Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Toggle Navigation
    navLinks.classList.toggle('active');
    
    // Animate Links
    links.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Hamburger Animation
    hamburger.classList.toggle('toggle');
});

// Typing Animation
const typedTextSpan = document.querySelector('.typed-text');
const texts = ['MERN Stack Developer', 'Frontend Developer', 'Web Designer'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(type, typingSpeed);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    type();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Animation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if(sectionTop < windowHeight * 0.75) {
            section.classList.add('animate');
        }
    });
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', () => {
    // Animate skill progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const animateProgress = () => {
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            const fill = bar.querySelector('.progress-fill');
            fill.style.width = progress;
        });
    };

    // Trigger animation when scrolled into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgress();
            }
        });
    });

    progressBars.forEach(bar => observer.observe(bar));
});

// Add this to your existing script.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Here you can add code to handle the form submission
    // For example, sending an email or saving to a database
    
    // Clear form
    this.reset();
    
    // Show success message
    alert('Message sent successfully!');
});

// Scroll Progress Indicator
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    const scrollToTop = document.querySelector('.scroll-to-top');
    
    // Calculate scroll progress
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / scrollTotal) * 100;
    
    // Update progress bar
    scrollProgress.style.width = `${scrolled}%`;
    
    // Show/hide scroll to top button
    if (window.scrollY > 500) {
        scrollToTop.classList.add('active');
    } else {
        scrollToTop.classList.remove('active');
    }
});

// Scroll to Top functionality
document.querySelector('.scroll-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll reveal animations
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}); 