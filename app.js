fetch('data.json')
  .then(res => res.json())
  .then(textos => {

    // 🔹 Últimos (tarjetas)
    const ultimos = document.getElementById('ultimos');
    ultimos.innerHTML = "";

    textos.slice(0, 2).forEach(t => {
      const div = document.createElement('div');
      div.className = "tarjeta";

      if (t.proximamente) {
        div.classList.add("proximamente");
        div.textContent = "Próximamente";
      } else {
        div.innerHTML = `
          <h3>${t.titulo}</h3>
          <p class="fecha">${t.fecha}</p>
          <a href="${t.archivo}">Leer</a>
        `;
      }

      ultimos.appendChild(div);
    });

    // 🔹 Archivo completo
    const archivo = document.getElementById('archivo');
    archivo.innerHTML = textos.map(t =>
      `<p>${t.fecha} — <a href="${t.archivo}">${t.titulo}</a></p>`
    ).join('');
  });
