const urlParams = new URLSearchParams(window.location.search);
const paramId = urlParams.get("id");

const ids = [1, 2, 3];

const existeId = ids.filter((x) => x === parseInt(paramId));

console.log(
  "Este es el elemento obtenido del array utilizando query string" +
    " " +
    existeId
);
