

document.addEventListener('DOMContentLoaded', () => {
    class Herramientas {
        constructor(masAportes, descripcion, enlace ) {
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
    /////////////////////////////////////

    const boton = document.getElementById("boton");
    const repositorio = new Repositorio();

    if (boton) {
        boton.addEventListener("click", function(event)) {
            event.preventDefault();

            const masAportes = document.getElementById("HERRAMIENTA").value;
            const descripcion = document.getElementById("DESCRIPCION").value;
            const enlace = document.getElementById("ENLACE").value;

        if (masAportes === "" || descripcion === "" || enlace === "") {
            alert ("Por favor complete todos los campos");
            return;
    
    
        }
        
        repositorio.crearHerramienta(masAportes, descripcion, enlace);
    

        const contenedor = document.getElementById("contenedor");
        contenedor.innerHTML = "";

    const tarjetas = repositorio.mostrarHerramientas().map((herramienta) => {
        const div = document.createElement("div");
        const tit = document.createElement("h2");
        const img = document.createElement("img");
        const urlimg = document.createElement("p");

        tit.innerHTML = herramienta.masAportes;
        img.src = herramienta.enlace;
        urlimg.innerHTML = herramienta.descripcion;



        
        div.appendChild (tit);
        div.appendChild (img);
        div.appendChild (urlimg);

        return div;

    })

            tarjetas.forEach(function(div) {
                contenedor.appendChild(div);
            });
        }
    })

