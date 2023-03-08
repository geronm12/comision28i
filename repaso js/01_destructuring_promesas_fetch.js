//#region  Destructuring de Objetos
//destructuring: es una forma de acceder a las propiedades de los objetos simplificada
//no necesito el punto "."

const persona = {
  nombre: "geronimo",
  cargo: "mentor",
  monto: {
    total: 1200,
  },
};

console.log(persona.nombre);
console.log(persona.cargo);
console.log(persona.monto.total);

//este código de forma simplificada, obtiene los valores y crea variables con los mismos nombres
//de las propiedades

// const { nombre: a, cargo, monto } = persona;
// const { total } = monto;
// console.log(a);
// console.log(cargo);

//sistema de venta ecommerce
//producto, cliente
const cliente = {
  nombre: "geronimo",
  mail: "gerolpz01@gmail.com",
  rol: {
    nombre: "cliente",
  },
};

const producto = {
  nombre: "monitor 24",
  precio: 2500,
};
//"pseudónimo"
const { nombre: nombreCliente, rol } = cliente;
const { nombre: nombreRol } = rol;
const { nombre: nombreProducto } = producto;

console.log(nombreCliente);
console.log(nombreProducto);
//#endregion

//#region  Operador Condicional Ternario ? : => Es un if
//condición ? que pasa si se cumple la condición : que pasa si no se cumple la condición
const numero = 15;
let esImpar;

if (numero % 2 !== 0) {
  esImpar = "Impar";
} else {
  esImpar = "Par";
}
//acá infiere que esto es un booleano
//condición     ?   que pasa si se cumple la condición  :  que pasa si no se cumple la condición
const condicionalTernario = numero % 2 !== 0 ? "Impar" : "Par";

function EsImpar(numero) {
  return numero % 2 !== 0 ? ProcesaRespuesta("Impar") : "Par";
}

//function
function ProcesaRespuesta(mensaje) {
  switch (mensaje) {
    case "Impar":
      console.log("Impar");
      return true;

    case "Par":
      console.log("Par");
      return false;

    default:
      break;
  }
}
//#endregion

//#region Funciones de flecha
// const ProcesaRespuesta = (mensaje) => {
//   switch (mensaje) {
//     case "Impar":
//       console.log("Impar");
//       return true;

//     case "Par":
//       console.log("Par");
//       return false;

//     default:
//       break;
//   }
// };

//puede recibir n parametros
const EsImparFlecha = (numero) => (numero % 2 !== 0 ? "Impar" : "Par");
const Suma = (a, b) => a + b; //el return está implicito

//#endregion

// function EsImpar(numero) {
//   if (numero % 2 !== 0) {
//     return ProcesaRespuesta("Impar");
//   } else {
//     return "Par";
//   }
// }

// function EsImpar(numero) {
//   return numero % 2 !== 0 ? ProcesaRespuesta("Impar") : "Par";
// }

// const EsImpar = (numero) => (numero % 2 !== 0 ? "Impar" : "Par");

//#region Destructuring Arreglos
const array = [10, 20, 30, 40, 50];
const [a, b, c, d, e] = array;
console.log(e);
console.log(array[3]);
//#endregion

//#region Promesas y fetch/axios async await then catch
//concepto de asincronía
//traigo lista de empleados
const respuesta = fetch("https://rickandmortyapi.com/api/character");
console.log(respuesta);
console.log("Sigo trabajando");

//para crear una promesa necesitamos 2 funciones
//1 - función que se va a ejecutar si la promesa se cumple (resolve)
//2 - función que se va a ejecutar si la promesa falla (reject)
const resolve = () => console.log("resuelto"); //callbacks
const reject = () => console.log("rejected"); //callbacks
const promesaA = new Promise(resolve, reject);
promesaA
  .then((res) => res) //en el then escribimos la lógica que queremos que se ejecute
  //una vez que se resolvió la promesa, es decir se disparó el callback "resolve"
  .catch((err) => {
    return err;
  }); //se ejecuta si la promesa termina en fallo, se dispara el callback "reject"

const app = document.getElementById("app");

fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => {
    const { results } = data;

    let htmlString = "";
    results.forEach((personaje) => {
      htmlString += cardTemplate(
        personaje.image,
        personaje.name,
        personaje.name
      );
    });
    app.innerHTML = htmlString;
  })
  .catch((err) => console.log(err));

const cardTemplate = (urlImg, titulo, nombre) => {
  return `<div class="card" style="width: 18rem;">
        <img src="${urlImg}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${titulo}</h5>
          <p class="card-text">${nombre}</p>
        </div>
      </div>`;
};
//#endregion
