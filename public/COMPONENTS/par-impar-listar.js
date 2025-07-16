class ComponenteListar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="areaResultados" class="text-center text-light">
        <p class="mb-0">Ingrese un rango de números para ver si son pares o impares</p>
      </div>
    `;

    this.configurarEventos();
  }

  configurarEventos() {
    window.addEventListener('rango-seleccionado', (evento) => {
      const { inicial, final } = evento.detail;
      this.procesarRango(inicial, final);
    });
  }

  procesarRango(inicial, final) {
    console.log(`Procesando rango de ${inicial} a ${final}`);

    for (let i = inicial; i <= final; i++) {
      const esPar = this.esNumeroPar(i);
      console.log(`${i} es ${esPar ? 'par' : 'impar'}`);
    }
  }

  esNumeroPar(numero) {
    return numero % 2 === 0;
  }
}

customElements.define('par-impar-lista', ComponenteListar);
