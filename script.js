// script.js

// Smooth scrolling to anchor links
const smoothScrollTo = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
};

// Mobile menu toggle
const mobileMenuToggle = () => {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('active');
};

// Event listener for menu toggle button
const menuToggleButton = document.querySelector('.menu-toggle');
if (menuToggleButton) {
    menuToggleButton.addEventListener('click', mobileMenuToggle);
}

// Interactivity for coffee items (example)
const coffeeItems = document.querySelectorAll('.coffee-item');
coffeeItems.forEach(item => {
    item.addEventListener('click', () => {
        alert(`You selected ${item.dataset.coffeeName}`);
    });
});

// Smooth scrolling for internal links
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        smoothScrollTo(this.getAttribute('href'));
    });
});