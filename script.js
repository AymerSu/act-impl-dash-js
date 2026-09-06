const sidebar = document.querySelector('#sidebar');
const sidebarOverlay = document.querySelector('#sidebarOverlay');
const menuToggle = document.querySelector('#menuToggle');
const sidebarClose = document.querySelector('#sidebarClose');
const toast = document.querySelector('#toast');

function setSidebar(open) {
  sidebar.classList.toggle('open', open);
  sidebarOverlay.classList.toggle('visible', open);
  menuToggle.setAttribute('aria-expanded', String(open));
}

menuToggle.addEventListener('click', () => setSidebar(true));
sidebarClose.addEventListener('click', () => setSidebar(false));
sidebarOverlay.addEventListener('click', () => setSidebar(false));

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
    if (window.innerWidth <= 820) setSidebar(false);
  });
});

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2800);
}

document.querySelector('#exportButton').addEventListener('click', () => showToast('Reporte preparado para descargar.'));
document.querySelector('.notification-button').addEventListener('click', () => showToast('Tienes 3 alertas pendientes de revisar.'));
document.querySelector('.filter-button').addEventListener('click', () => showToast('Filtros de inventario activados.'));

document.querySelectorAll('.page-button, .next-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.page-button').forEach((item) => item.classList.remove('active'));
    if (button.classList.contains('page-button')) button.classList.add('active');
    showToast(`Mostrando página ${button.textContent.trim() || 'siguiente'}.`);
  });
});

document.querySelectorAll('.row-menu').forEach((button) => {
  button.addEventListener('click', () => showToast('Acciones del vehículo disponibles próximamente.'));
});

const searchInput = document.querySelector('#searchInput');
const rows = [...document.querySelectorAll('#vehicleTable tr')];
const resultCount = document.querySelector('#resultCount');
searchInput.addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase().trim();
  let visibleRows = 0;
  rows.forEach((row) => {
    const matches = row.textContent.toLowerCase().includes(query);
    row.hidden = !matches;
    if (matches) visibleRows += 1;
  });
  resultCount.textContent = visibleRows;
});
