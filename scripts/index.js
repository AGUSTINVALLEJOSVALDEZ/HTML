document.addEventListener('DOMContentLoaded', () => {
    class Herramientas {
        constructor(masAportes, descripcion, enlace) {
            this.masAportes = masAportes;
            this.descripcion = descripcion;
            this.enlace = enlace;
        }
    }

    class Repositorio {
        constructor() {
            this.herramientas = [];
            this.contador = 1;
        }

        mostrarHerramientas() {
            return this.herramientas;
        }

        crearHerramienta(masAportes, descripcion, enlace) {
            const nuevaHerramienta = new Herramientas(masAportes, descripcion, enlace);
            this.herramientas.push(nuevaHerramienta);
            this.contador++;
        }
    }

   
    const repositorio = new Repositorio();
    const boton = document.getElementById('boton');

    if (!boton) return;

    boton.addEventListener('click', function (event) {
        event.preventDefault();

            const masAportes = document.getElementById('HERRAMIENTA')?.value.trim() || '';
            const descripcion = document.getElementById('DESCRIPCION')?.value.trim() || '';
            const enlace = document.getElementById('ENLACE')?.value.trim() || '';

            if (!masAportes || !descripcion || !enlace) {
                alert('Por favor complete todos los campos');
                return;
            }

            repositorio.crearHerramienta(masAportes, descripcion, enlace);

            const contenedor = document.getElementById('contenedor');
            if (!contenedor) return;

          /////////////////////////
            contenedor.innerHTML = '';

            const tarjetas = repositorio.mostrarHerramientas().map((herramienta) => {
                const div = document.createElement('div');
                div.className = 'tarjeta';
                const tit = document.createElement('h2');
                const img = document.createElement('img');
                const urlimg = document.createElement('p');

                tit.textContent = herramienta.masAportes;
                img.src = herramienta.enlace;
                img.alt = herramienta.masAportes;
                img.style.maxWidth = '200px';
                urlimg.textContent = herramienta.descripcion;

                div.appendChild(tit);
                div.appendChild(img);
                div.appendChild(urlimg);

                return div;
            });

        tarjetas.forEach((div) => contenedor.appendChild(div));
    });
});
document.addEventListener('DOMContentLoaded', () => {
    class Herramientas {
        constructor(masAportes, descripcion, enlace) {
            this.masAportes = masAportes;
            this.descripcion = descripcion;
            this.enlace = enlace;
        }
    }

            class Repositorio {
                constructor() {
                    this.herramientas = [];
                    this.contador = 1;
                }

                mostrarHerramientas() {
                    return this.herramientas;
                }

                crearHerramienta(masAportes, descripcion, enlace) {
                    const nuevaHerramienta = new Herramientas(masAportes, descripcion, enlace);
                    this.herramientas.push(nuevaHerramienta);
                    this.contador++;
                }
            }

            /////////////////////////////////////////
            const repositorio = new Repositorio();
            const boton = document.getElementById('boton');

            if (!boton) return;

            boton.addEventListener('click', function (event) {
                event.preventDefault();

            const masAportes = (document.getElementById('HERRAMIENTA')|| {value:""}).value.trim();
            const descripcion = (document.getElementById('DESCRIPCION')||{value:""}).value.trim();
            const enlace = (document.getElementById('ENLACE') || {value:""}).value.trim();

                if (!masAportes || !descripcion || !enlace) {
                    alert('Por favor complete todos los campos');
                    return;
                }

                repositorio.crearHerramienta(masAportes, descripcion, enlace);

                const contenedor = document.getElementById('contenedor');
                if (!contenedor) return;
////////////////////////////

                contenedor.innerHTML = '';

                const tarjetas = repositorio.mostrarHerramientas().map((herramienta) => {
                    const div = document.createElement('div');
                    div.className = 'tarjeta';
                    const tit = document.createElement('h2');
                    const img = document.createElement('img');
                    const urlimg = document.createElement('p');

                    tit.textContent = herramienta.masAportes;
                    img.src = herramienta.enlace;
                    img.alt = herramienta.masAportes;
                    img.style.maxWidth = '200px';
                    urlimg.textContent = herramienta.descripcion;

                    div.appendChild(tit);
                    div.appendChild(img);
                    div.appendChild(urlimg);

                    return div;
                });

            tarjetas.forEach((div) => contenedor.appendChild(div));
        });
    });

