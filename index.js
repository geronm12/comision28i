import { Contador, ContadorResta } from "./contador.js";
import { btnMas, btnMenos, h1 } from "./elements_html.js";
import { contador } from "./objetos.js";

//pasa los parametros de las funcines por value
let hola = "hola"; //scope global

btnMas.addEventListener("click", () => {
  Contador(contador);
  Refresh();
});

btnMenos.addEventListener("click", () => {
  ContadorResta(contador);
  Refresh();
});

const Refresh = () => {
  h1.innerText = contador.veces;
};
