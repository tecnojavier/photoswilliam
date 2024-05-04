/*INTERACCION DEL DROPDOWN EN EL MENU DEL HEADER*/

const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', function () {
  this.classList.toggle('active');
});