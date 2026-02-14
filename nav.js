fetch('../data.json')
  .then(r => r.json())
  .then(textos => {
    const actual = window.location.pathname.split("/").pop();
    const lista = textos.filter(t => !t.proximamente);
    const index = lista.findIndex(t => t.archivo.endsWith(actual));
    if (index === -1) return;

    const nav = document.querySelector(".nav-textos");

    const anterior = lista[index + 1];
    const siguiente = lista[index - 1];

    nav.innerHTML = `
      ${anterior ? `<a href="../${anterior.archivo}">← ${anterior.titulo}</a>` : `<span></span>`}
      ${siguiente ? `<a href="../${siguiente.archivo}">${siguiente.titulo} →</a>` : `<span></span>`}
    `;
  });
