let arti = document.getElementById('post')

let post = [
    {
        title: "Articulo de Prueba 1",
        date: "30/12/2025",
        parrafo: "lorem ipsum dolor"
    }, 
    {
        title: "Articulo de Prueba 2",
        date: "30/12/2026",
        parrafo: "lorem ipsum dolor awo"
    }
]

post.forEach(article => {
    const titulo = document.createElement('h2');
    titulo.textContent = article.title

    const parrafo = document.createElement('p');
    parrafo.textContent = article.parrafo

    const anio = document.createElement('span');
    anio.textContent = article.date

    arti.appendChild(titulo)
    arti.appendChild(parrafo)
    arti.appendChild(anio)
});