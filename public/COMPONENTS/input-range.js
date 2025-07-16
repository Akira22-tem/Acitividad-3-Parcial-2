class ComponenteRango extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="text-center mb-4">
        <h6 class="text-light fw-normal">
          <i class="bi bi-gear text-danger"></i> Defina el rango de números a analizar
        </h6>
      </div>
      
      <div class="row g-4">
        <div class="col-md-6">
          <div class="form-floating">
            <input type="number" class="form-control form-control-lg bg-dark text-light border-light" 
                   id="numeroInicial" placeholder="1" min="1" />
            <label for="numeroInicial" class="text-light">
              <i class="bi bi-arrow-right-circle text-light"></i> Número inicial
            </label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating">
            <input type="number" class="form-control form-control-lg bg-dark text-light border-light" 
                   id="numeroFinal" placeholder="10" min="1" />
            <label for="numeroFinal" class="text-light">
              <i class="bi bi-arrow-left-circle text-light"></i> Número final
            </label>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-4">
        <button type="button" class="btn btn-danger btn-lg px-5 shadow" id="btnGenerar">
          <i class="bi bi-play-circle"></i> Generar Lista
        </button>
      </div>
      
      <div id="contenedorError" class="alert alert-danger alert-dismissible mt-3 shadow-sm" 
           style="display: none;" role="alert">
        <i class="bi bi-exclamation-triangle-fill"></i> 
        <span id="mensajeError"></span>
      </div>
    `;

    this.configurarEventos();
  }

  configurarEventos() {
    const btnGenerar = this.querySelector('#btnGenerar');

    btnGenerar.addEventListener('click', () => {
      console.log('Botón clickeado');
    });
  }
}

customElements.define('input-range', ComponenteRango);
