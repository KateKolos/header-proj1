const burgerIcon = document.querySelector('.burger-icon');
const navLinks = document.querySelector('.nav-links');

burgerIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  burgerIcon.classList.toggle('show');
});
