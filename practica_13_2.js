//4 - Declare un Array de 5 elementos de tipo cadena (string),
//  recorra el mismo en ciclo iterativo e imprima en consola diferentes
// combinaciones de oraciones que se pueden realizar con el mismo
// (no importa si la oración no tiene sentido).
//2
//                  0       n - 1 = 1  longitud = cantidad de elementos que tiene ese vector
const palabras = ["buenos", "días"]; //tipo de dato complejo
const objeto = {
  nombre: "geronimo",
  apellido: "lopez",
  edad: 28,
  nombreCompleto: () => {
    return nombre + " " + apellido;
  },
};

// for (let index = 0; index < palabras.length; index++) {
//   let indiceRandom = Math.random() * (palabras.length); //puede ser con coma = 1,8
//   let resultado = Math.floor(indiceRandom); // redondea  a =  2
//   palabras[resultado]; //undefined
// }
//mundo hola
//días buenos
// console.log(palabras[1] + " " + palabras[0]);

// palabras.forEach((element) => {
//   console.log(element);
// });

// 5 - Utilizando el array de strings, recorra cada elemento
// (ciclo for anidado) e imprima en consola la letra que se repite más
// veces en cada palabra, en caso de que la palabra no posea letras repetidas
//  imprimir en consola (“No posee letras repetidas”)

//string = array de caracteres

const letrasRepetidas = ["coca-cola", "sábado"];
const arrayNumeros = [2, 1];
const char = ["c", "o", "c", "a", "-", "c", "o", "l", "a"];
//acá
const palabra = letrasRepetidas[0]; // string
const letra = palabra[0];
//
const numero = arrayNumeros[0]; //2 -> number

// console.log("esta letra la obtuve sólo con el indice" + " " + letrasRepetidas[0][0])

for (let index = 0; index < letrasRepetidas.length; index++) {
  const palabra = letrasRepetidas[index]; //0 = coca-cola

  for (let jdex = 0; jdex < palabra.length; jdex++) {
    console.log(palabra[jdex]);
  }
}

let cadenaE = "hola mi cadena";  //array de chars
 