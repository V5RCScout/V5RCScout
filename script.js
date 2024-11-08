document.addEventListener("DOMContentLoaded", () => {
	const swiftUpElement = document.querySelector('.swift-up-text');
	
	// Get the text content from the heading
	const text = swiftUpElement.textContent.trim();
	
	// Clear the current text
	swiftUpElement.innerHTML = '';
	
	// Wrap each character in a <span> element
	text.split('').forEach((char) => {
	  const span = document.createElement('span');
	  span.textContent = char;
	  swiftUpElement.appendChild(span);
	});
  });
