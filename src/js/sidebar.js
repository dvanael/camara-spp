const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const btnMenu = document.getElementById('open-sidebar');

btnMenu.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  overlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.style.display = 'none';
});
