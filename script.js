// Toggle the navigation menu when the menu icon is clicked
function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');\
}
// Toggle the navigation menu when the menu icon is clicked
function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}
// Animate each letter of the heading text
document.addEventListener("DOMContentLoaded", () => {
  const swiftUpElement = document.querySelector('.swift-up-text');
  
  // Get the text content from the heading
  const text = swiftUpElement.textContent.trim();
  
  // Clear the current text
  swiftUpElement.innerHTML = '';
  
  // Wrap each character in a <span> element for animation
  text.split('').forEach((char) => {
    const span = document.createElement('span');
    span.textContent = char;
    swiftUpElement.appendChild(span);
  });
});
