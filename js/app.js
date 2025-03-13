/**
 * Modern typing animation for header summary with balanced speed
 */

document.addEventListener('DOMContentLoaded', function() {
  // Get the header summary element
  const summaryElement = document.querySelector('.header-summary');
  
  if (summaryElement) {
    // Store the original text and clear the element
    const originalText = summaryElement.textContent;
    summaryElement.textContent = '';
    
    // Create a container for the typed text
    const textContainer = document.createElement('span');
    textContainer.className = 'typed-text';
    
    // Create a span element for the cursor
    const cursorElement = document.createElement('span');
    cursorElement.className = 'typing-cursor';
    cursorElement.textContent = '|';
    
    // Add both elements to the summary
    summaryElement.appendChild(textContainer);
    summaryElement.appendChild(cursorElement);
    
    // Animation settings - slightly slower but still modern
    const baseTypingSpeed = 15; // Slower than before, but still quick
    const speedVariation = 10; // More variation for natural rhythm
    const charsPerBatch = 1; // Process one character at a time for better readability
    let charIndex = 0;
    
    // Function to type the text character by character
    function typeText() {
      if (charIndex < originalText.length) {
        // Determine whether to process multiple characters for spaces
        let charsToProcess = 1;
        if (charIndex + 1 < originalText.length) {
          const nextChar = originalText.charAt(charIndex);
          if (nextChar === ' ') {
            charsToProcess = 2; // Only batch spaces for a more readable effect
          }
        }
        
        // Process the character(s)
        for (let i = 0; i < charsToProcess && charIndex < originalText.length; i++) {
          const charSpan = document.createElement('span');
          charSpan.textContent = originalText.charAt(charIndex);
          charSpan.style.opacity = '0';
          textContainer.appendChild(charSpan);
          
          // Trigger fade-in animation
          setTimeout(() => {
            charSpan.style.transition = 'opacity 70ms';
            charSpan.style.opacity = '1';
          }, 8);
          
          charIndex++;
        }
        
        // Calculate random delay
        let delay = baseTypingSpeed + Math.random() * speedVariation;
        
        // Add pauses for punctuation and flow
        const currentChar = originalText.charAt(charIndex - 1);
        if (['.', '!', '?'].includes(currentChar)) {
          delay += 60; // Longer pause after end punctuation
        } else if ([',', ';', ':'].includes(currentChar)) {
          delay += 30; // Small pause after minor punctuation
        }
        
        setTimeout(typeText, delay);
      } else {
        // Animation complete, make the cursor blink with CSS animation
        cursorElement.classList.add('blink');
        
        // Optional: remove cursor after a delay
        setTimeout(() => {
          cursorElement.style.transition = 'opacity 0.6s';
          cursorElement.style.opacity = '0';
          setTimeout(() => {
            cursorElement.remove();
          }, 600);
        }, 1500);
      }
    }
    
    // Start the typing animation with a short delay
    setTimeout(typeText, 150);
  }
});
