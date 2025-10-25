<script>
const form = document.getElementById('boton');
const masAportesInput = document.getElementById('HERRAMIENTA');
const descripcionInput = document.getElementById('DESCRIPCION');
const enlaceInput = document.getElementById('ENLACE');

// Simular entrada de datos
masAportesInput.value = 'Test Herramienta';
descripcionInput.value = 'Esta es una descripción de prueba';
enlaceInput.value = 'https://ejemplo.com/imagen.jpg';

// Simular clic en el botón
form.click();

// Verificar el contenedor
const contenedor = document.getElementById('contenedor');
console.log('Contenido del contenedor:', contenedor.innerHTML);
</script>
