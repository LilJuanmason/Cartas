function formatearFecha(fechaISO) {
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];
  const [y, m, d] = fechaISO.split("-");
  return `${parseInt(d)} de ${meses[m - 1]} de ${y}`;
}

fetch('data.json')
  .then(r => r.json())
  .then(textos => {
        // Estadísticas
    const inicioRelacion = new Date("2024-02-11"); // ← cambia a tu fecha real
    const hoy = new Date();
    const dias = Math.floor((hoy - inicioRelacion) / (1000 * 60 * 60 * 24));

    document.querySelector("#dias-juntos p").textContent = dias;

    // Cartas escritas = textos reales (no proximamente)
    document.querySelector("#cartas-escritas p").textContent =
      textos.filter(t => !t.proximamente).length;


    const ultimos = document.getElementById("ultimos");
    ultimos.innerHTML = "";

    textos.forEach(t => {
      const card = document.createElement("div");
      card.className = "tarjeta";

      if (t.proximamente) {
        card.classList.add("proximamente");
        card.textContent = "Próximamente";
      } else {
        card.innerHTML = `
          <h3>${t.titulo}</h3>
          <p class="fecha">${formatearFecha(t.fecha)}</p>
          <a href="${t.archivo}">Leer</a>
        `;
      }

      ultimos.appendChild(card);
    });

    // Archivo completo (solo textos reales)
    const archivo = document.getElementById("archivo");
    archivo.innerHTML = textos
      .filter(t => !t.proximamente)
      .map(t =>
        `<p>${formatearFecha(t.fecha)} — <a href="${t.archivo}">${t.titulo}</a></p>`
      )
      .join("");
  });
const corazones = document.getElementById("corazones");

for (let i = 0; i < 18; i++) {
  const c = document.createElement("div");
  c.className = "corazon";
  c.textContent = "❤";
  c.style.left = Math.random() * 100 + "vw";
  c.style.animationDelay = Math.random() * 14 + "s";
  c.style.fontSize = 12 + Math.random() * 16 + "px";
  corazones.appendChild(c);
}

