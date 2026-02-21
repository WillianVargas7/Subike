// Variables
const modal = document.getElementById('subscribeModal');
const openModalBtn = document.getElementById('subscribeBtn');
const closeModalBtn = document.getElementById('closeModal');
const form = document.getElementById('subscribeForm');

// Abrir el modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Cerrar el modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera de él
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
