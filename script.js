document.addEventListener("DOMContentLoaded", () => {
    // Trigger the text reveal effect on the heading
    const swiftUpElement = document.querySelector('.swift-up-text h1');
    swiftUpElement.classList.add('reveal-text'); // Apply reveal animation
    
    // Hamburger menu toggle functionality
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    // Click event for the hamburger menu icon
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        navbar.classList.toggle('active');
    });
});

// Function to toggle the menu visibility and animation (for HTML onclick use)
function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
}
