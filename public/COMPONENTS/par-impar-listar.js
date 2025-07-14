class ComponenteListar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="areaResultados" class="text-center text-light">
        <p class="mb-0">Esperando datos...</p>
      </div>
    `;
  }
}

customElements.define('par-impar-lista', ComponenteListar);
