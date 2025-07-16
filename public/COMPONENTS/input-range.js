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
    const campoInicial = this.querySelector('#numeroInicial');
    const campoFinal = this.querySelector('#numeroFinal');

    btnGenerar.addEventListener('click', () => {
      this.procesarRango();
    });

    campoInicial.addEventListener('keypress', (evento) => {
      if (evento.key === 'Enter') this.procesarRango();
    });

    campoFinal.addEventListener('keypress', (evento) => {
      if (evento.key === 'Enter') this.procesarRango();
    });
  }

  procesarRango() {
    if (this.validarDatos()) {
      this.ocultarError();
      console.log('Datos válidos, procesando...');
    }
  }

  validarDatos() {
    const numeroInicial = parseInt(this.querySelector('#numeroInicial').value);
    const numeroFinal = parseInt(this.querySelector('#numeroFinal').value);

    if (isNaN(numeroInicial) || isNaN(numeroFinal)) {
      this.mostrarError('Por favor, ingrese números válidos en ambos campos.');
      return false;
    }

    if (numeroInicial > numeroFinal) {
      this.mostrarError(
        'El número inicial debe ser menor o igual al número final.'
      );
      return false;
    }

    if (numeroInicial < 1 || numeroFinal < 1) {
      this.mostrarError('Los números deben ser mayores a 0.');
      return false;
    }

    return true;
  }

  mostrarError(mensaje) {
    const divError = this.querySelector('#contenedorError');
    const spanMensaje = this.querySelector('#mensajeError');
    spanMensaje.textContent = mensaje;
    divError.style.display = 'block';
  }

  ocultarError() {
    const divError = this.querySelector('#contenedorError');
    divError.style.display = 'none';
  }
}

customElements.define('input-range', ComponenteRango);
