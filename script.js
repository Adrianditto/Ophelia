// Referencias a elementos del DOM
const botonTema = document.getElementById('cambiar-tema');
const imagen = document.getElementById('imagen-tema');
const form = document.getElementById('form-contacto');

// Cambiar tema claro / oscuro
botonTema.addEventListener('click', () => {
  document.body.classList.toggle('oscuro');

  // Cambiar imagen según el tema
  if (document.body.classList.contains('oscuro')) {
    imagen.src = 'https://artequinvina.cl/wp-content/uploads/2025/05/ophelia.jpg'; // Coloca aquí tu imagen para modo oscuro
  } else {
    imagen.src = 'https://i0.wp.com/www.myddoa.com/wp-content/uploads/2018/08/1889-ophelia-john-william-waterhouse.jpg?resize=1024%2C643&ssl=1'; // Coloca aquí tu imagen para modo claro
  }
});

// Alerta simulada para formulario
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Se a enviado correctamente los datos');
  form.reset();
});
