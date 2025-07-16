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
    const areaResultados = this.querySelector('#areaResultados');
    areaResultados.innerHTML = '';

    // Título
    const titulo = document.createElement('h5');
    titulo.className = 'text-light mb-3';
    titulo.textContent = `Números del ${inicial} al ${final}:`;
    areaResultados.appendChild(titulo);

    // Lista simple
    const lista = document.createElement('ul');
    lista.className = 'list-group';

    for (let i = inicial; i <= final; i++) {
      const esPar = this.esNumeroPar(i);
      const tipoNumero = esPar ? 'Par' : 'Impar';

      const elemento = document.createElement('li');
      elemento.className =
        'list-group-item d-flex justify-content-between bg-dark text-light border-secondary';
      elemento.innerHTML = `
        <span class="text-light">${i}</span>
        <span class="badge bg-${
          esPar ? 'light text-dark' : 'danger'
        }">${tipoNumero}</span>
      `;
      lista.appendChild(elemento);
    }

    areaResultados.appendChild(lista);
  }

  esNumeroPar(numero) {
    return numero % 2 === 0;
  }
}

customElements.define('par-impar-lista', ComponenteListar);
