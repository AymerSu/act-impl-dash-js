const toast = document.querySelector('#toast');

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2800);
}

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
