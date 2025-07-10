// Contact form handler
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
  });
}

// Hamburger menu toggle with icon switch
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const hamburgerIcon = document.getElementById("hamburger-icon");

if (hamburger && navLinks && hamburgerIcon) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    // Toggle icon ☰ ↔ ✖
    hamburgerIcon.innerHTML = navLinks.classList.contains("show") ? "&times;" : "&#9776;";
  });
}

// SPA-style section navigation
const links = document.querySelectorAll('.nav-links a, .btn[data-target], .contact-btn[data-target]');
const sections = document.querySelectorAll('.page-section');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('data-target');

    if (targetId) {
      // Hide all sections and show the target section
      sections.forEach(section => {
        section.classList.toggle('active', section.id === targetId);
      });

      // Hide mobile menu after click
      navLinks.classList.remove('show');
      hamburgerIcon.innerHTML = "&#9776;";
    }
  });
});
