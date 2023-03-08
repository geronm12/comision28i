const btnMas = document.getElementById("mas");
const btnMenos = document.getElementById("menos");
const h1 = document.getElementById("titulo");

let number = 0;
let contadorPersona = {
  veces: 0,
};
btnMas.addEventListener("click", () => {
  Contador(contadorPersona);
  Refresh();
});

btnMenos.addEventListener("click", () => {
  ContadorResta(contadorPersona);
  Refresh();
});

const Refresh = () => {
  h1.innerText = contadorPersona.veces;
};

function Contador(value) {
  value.veces++;
}

function ContadorResta(value) {
  value.veces--;
}
