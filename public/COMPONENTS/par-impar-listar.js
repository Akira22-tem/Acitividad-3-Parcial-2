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
      console.log('Evento rango-seleccionado recibido:', evento.detail);
    });
  }
}

customElements.define('par-impar-lista', ComponenteListar);
