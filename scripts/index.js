// Control del formulario y renderizado de tarjetas
// Control del formulario y renderizado de tarjetas (SOLO ESTA VERSIÓN)
document.addEventListener('DOMContentLoaded', function () {
  function Herramientas(masAportes, descripcion, enlace) {
    this.masAportes = masAportes;
    this.descripcion = descripcion;
    this.enlace = enlace;
  }

  function Repositorio() {
    this.herramientas = [];
    this.contador = 1;
  }

  Repositorio.prototype.mostrarHerramientas = function () {
    return this.herramientas;
  };

  Repositorio.prototype.crearHerramienta = function (masAportes, descripcion, enlace) {
    var nueva = new Herramientas(masAportes, descripcion, enlace);
    this.herramientas.push(nueva);
    this.contador++;
  };

  var repositorio = new Repositorio();
  var boton = document.getElementById('boton');
  var contenedor = document.getElementById('contenedor');

  function renderizar() {
    if (!contenedor) return;
    contenedor.innerHTML = '';
    var arr = repositorio.mostrarHerramientas();
    for (var i = 0; i < arr.length; i++) {
      var herramienta = arr[i];
      var card = document.createElement('div');
      card.className = 'tarjeta';
      var tit = document.createElement('h2');
      var img = document.createElement('img');
      var p = document.createElement('p');

      tit.textContent = herramienta.masAportes;
      img.src = herramienta.enlace;
      img.alt = herramienta.masAportes;
      img.style.maxWidth = '200px';
      p.textContent = herramienta.descripcion;

      card.appendChild(tit);
      card.appendChild(img);
      card.appendChild(p);
      contenedor.appendChild(card);
    }
  }

  if (!boton) return;

  boton.addEventListener('click', function (e) {
    e.preventDefault();
    var masAportes = (document.getElementById('HERRAMIENTA') || { value: '' }).value.trim();
    var descripcion = (document.getElementById('DESCRIPCION') || { value: '' }).value.trim();
    var enlace = (document.getElementById('ENLACE') || { value: '' }).value.trim();

    if (!masAportes || !descripcion || !enlace) {
      alert('Por favor complete todos los campos');
      return;
    }

    repositorio.crearHerramienta(masAportes, descripcion, enlace);
    renderizar();

    // limpiar inputs
    var h = document.getElementById('HERRAMIENTA');
    var d = document.getElementById('DESCRIPCION');
    var en = document.getElementById('ENLACE');
    if (h) h.value = '';
    if (d) d.value = '';
    if (en) en.value = '';
  });
});
