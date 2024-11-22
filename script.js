// Agrega funcionalidad a los botones y formularios
const btnComienza = document.querySelector('button');
btnComienza.addEventListener('click', () => {
	alert('¡Comienza tu jornada hacia una mejor salud mental!');
});

const formContacto = document.querySelector('form');
formContacto.addEventListener('submit', (e) => {
	e.preventDefault();
	const nombre = document.querySelector('input[name="nombre"]').value;
	const correo = document.querySelector('input[name="correo"]').value;
	const mensaje = document.querySelector('textarea[name="mensaje"]').value;
	alert(`Gracias por contactarnos, ${nombre}!`);
});