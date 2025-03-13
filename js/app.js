/**
 * Typing animation for header summary
 */

document.addEventListener('DOMContentLoaded', function() {
  // Get the header summary element
  const summaryElement = document.querySelector('.header-summary');
  
  if (summaryElement) {
    // Store the original text and clear the element
    const originalText = summaryElement.textContent;
    summaryElement.textContent = '';
    
    // Create a span element for the cursor
    const cursorElement = document.createElement('span');
    cursorElement.className = 'typing-cursor';
    cursorElement.textContent = '|';
    summaryElement.appendChild(cursorElement);
    
    // Animation settings
    const typingSpeed = 40; // milliseconds per character
    let charIndex = 0;
    
    // Function to type the text character by character
    function typeText() {
      if (charIndex < originalText.length) {
        // Add the next character before the cursor
        cursorElement.insertAdjacentText('beforebegin', originalText.charAt(charIndex));
        charIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        // Animation complete, make the cursor blink
        cursorElement.classList.add('blink');
        
        // Optional: remove cursor after a delay
        setTimeout(() => {
          cursorElement.remove();
        }, 3000);
      }
    }
    
    // Start the typing animation after a short delay
    setTimeout(typeText, 500);
  }
});
