
const navLinks = document.querySelectorAll('.nav-buttons a');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    removeActiveClass();
    this.classList.add('active-link');
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

function removeActiveClass() {
  navLinks.forEach(link => {
    link.classList.remove('active-link');
  });
}