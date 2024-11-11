document.addEventListener("DOMContentLoaded", () => {
    // Animate each letter in the heading (staggered animation)
    const swiftUpElement = document.querySelector('.swift-up-text');
    const text = swiftUpElement.textContent.trim();
    swiftUpElement.innerHTML = ''; // Clear the current text

    text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        swiftUpElement.appendChild(span);
    });

    // Typewriter effect for paragraphs
    const paragraphs = document.querySelectorAll('.typewriter');
    paragraphs.forEach(paragraph => {
        const text = paragraph.textContent;
        paragraph.textContent = ''; // Clear the text content
        const span = document.createElement('span');
        span.classList.add('typing');
        span.textContent = text;
        paragraph.appendChild(span);
    });

    // Hamburger menu toggle functionality
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        navbar.classList.toggle('active');
    });
});

// Function to toggle the menu visibility and animation
function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
}
