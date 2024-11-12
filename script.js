document.addEventListener("DOMContentLoaded", function() {
  // Define the toggleMenu function after the DOM is loaded
  function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
  }

  // Attach event listener to the menu icon
  const menuIcon = document.querySelector('.menu-icon');
  menuIcon.addEventListener('click', toggleMenu);
});

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
  
  // Trigger swift-up bar animation after the heading animation
  const swiftUpBar = document.querySelector('.swift-up-bar');
  setTimeout(() => {
    swiftUpBar.style.opacity = 1;
  }, 800); // Delay to match the heading animation duration
  
  // After the heading animation ends, move the heading and bar up
  setTimeout(() => {
    swiftUpElement.style.top = '15%'; // Move the heading closer to the top of the screen
    swiftUpBar.style.top = '23%'; // Move the bar just below the heading
  }, 1300); // Delay to make sure the heading animation has finished
});
