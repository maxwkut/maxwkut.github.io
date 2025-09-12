/**
 * Modern fade-in animation for header summary
 */

document.addEventListener('DOMContentLoaded', function() {
  // Get the header summary element
  const summaryElement = document.querySelector('.header-summary');
  
  if (summaryElement) {
    // Add modern fade-in animation class
    summaryElement.classList.add('animate-fade-in');
  }
  
  // Profile image animation removed per user request
  
  const projectContainers = document.querySelectorAll('.project-container');
  projectContainers.forEach((container, index) => {
    container.classList.add('animate-slide-up');
    container.style.animationDelay = `${(index + 1) * 0.2}s`;
  });
});