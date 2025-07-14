class ComponenteRango extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="text-center mb-4">
        <h6 class="text-light fw-normal">Defina el rango de números</h6>
      </div>
    `;
  }
}

customElements.define('input-range', ComponenteRango);
