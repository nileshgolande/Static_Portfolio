// script.js - Nilesh Golande Portfolio

// Animate elements on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

// Observe all .animate elements
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate').forEach(el => observer.observe(el));
});
