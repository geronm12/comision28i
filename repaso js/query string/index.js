const div = document.getElementById("contenedor");

const ids = [1, 2, 3];

let htmlString = "";

ids.forEach((id) => {
  htmlString += `<a href="./detalle.html?id=${id}">Redireccionar a ${id}</a>`;
});

console.log(htmlString);
div.innerHTML = htmlString;
