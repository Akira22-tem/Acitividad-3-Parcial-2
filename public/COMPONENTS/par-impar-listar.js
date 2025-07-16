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
      this.mostrarResultados(inicial, final);
    });
  }

  mostrarResultados(inicial, final) {
    console.log(`Mostrando resultados de ${inicial} a ${final}`);
  }

  esNumeroPar(numero) {
    return numero % 2 === 0;
  }
}

customElements.define('par-impar-lista', ComponenteListar);
