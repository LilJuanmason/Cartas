fetch('data.json')
  .then(res => res.json())
  .then(textos => {


    // Últimos textos
    const ultimos = document.getElementById('ultimos');

    ultimos.innerHTML = `
      <div class="tarjeta proximamente">
        <p>Próximamente</p>
      </div>
    `;

    textos.slice(0,1).forEach(t => {
      const card = document.createElement('div');
      card.className = "tarjeta";

      card.innerHTML = `
        <h3>${t.titulo}</h3>
        <p class="fecha">${t.fecha}</p>
        <a href="${t.archivo}">Leer</a>
      `;

      ultimos.appendChild(card);
    });

    // Archivo completo
    document.getElementById('archivo').innerHTML =
      textos.map(t =>
        `<p>${t.fecha} — <a href="${t.archivo}">${t.titulo}</a></p>`
      ).join('');
  });
