document.addEventListener("DOMContentLoaded", () => {
    const swiftUpElement = document.querySelector('.swift-up-text');
    
    // Get the text content from the heading
    const text = swiftUpElement.textContent.trim();
    
    // Clear the current text
    swiftUpElement.innerHTML = '';
    
    // Wrap each character in a <span> element for the letter-by-letter animation
    text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        swiftUpElement.appendChild(span);
    });

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
