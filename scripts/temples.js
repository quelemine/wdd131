const hamburgerMenu = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

document.getElementById("lastModified").textContent = document.lastModified;

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open');
  navMenu.classList.toggle('active');
});