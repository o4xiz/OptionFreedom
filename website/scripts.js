// Handle mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.querySelector('ul').classList.toggle('show');
});

// Handle accordion functionality
const accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    // close all accordion items
    accordionButtons.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.setAttribute('aria-expanded', 'false');
        otherBtn.nextElementSibling.style.maxHeight = null;
      }
    });
    // toggle current accordion
    if (expanded) {
      btn.setAttribute('aria-expanded', 'false');
      btn.nextElementSibling.style.maxHeight = null;
    } else {
      btn.setAttribute('aria-expanded', 'true');
      const content = btn.nextElementSibling;
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

// Update footer year dynamically
document.getElementById('year').textContent = new Date().getFullYear();