//#region  Datos
const productosVenta = [
  {
    nombre: "Horizon Forbbiden West",
    descripcion: "",
    precio: 20000,
    url: "imagen",
    descuento: false,
    monto_descuento: null,
    stock: 10,
  },
  {
    nombre: "Fifa 23",
    descripcion: "",
    precio: 15000,
    url: "imagen",
    descuento: true,
    monto_descuento: 30,
    stock: 0,
  },
  {
    nombre: "Dead Space Remake",
    descripcion: "",
    precio: 18000,
    url: "imagen",
    descuento: false,
    monto_descuento: null,
    stock: 10,
  },
  {
    nombre: "Elden Ring",
    descripcion: "",
    precio: 10000,
    url: "imagen",
    descuento: true,
    monto_descuento: 20,
    stock: 10,
  },
  {
    nombre: "Resident Evil 2 Remake",
    descripcion: "",
    precio: 3000,
    url: "imagen",
    descuento: false,
    monto_descuento: null,
    stock: 10,
  },
];
//#endregion

const divApp = document.getElementById("app");

const obtenerDescuento = (precio, descuento) => {
  return precio - descuento;
};

const cardTemplate = (urlImg, titulo, nombre, link, precio, descuento) => {
  return `<div class="card" style="width: 18rem;">
      <img src="${urlImg}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${titulo}</h5>
        <span>${
          descuento !== null ? obtenerDescuento(precio, descuento) : precio
        }</span>
        <p class="card-text">${nombre}</p>
        <a href="${link}" class="btn btn-primary">+</a>
      </div>
    </div>`;
};

var htmlTemplate = "<div class='d-flex'>";

//n veces la cantidad de elementos que hay mi array o vector
productosVenta.map((element) => {
  const {
    url,
    nombre,
    descripcion,
    precio,
    descuento,
    monto_descuento,
    stock,
  } = element;
  console.log(stock);
  if (stock > 0) {
    htmlTemplate += cardTemplate(
      url,
      nombre,
      descripcion,
      "./detalle.html",
      precio,
      descuento ? monto_descuento : ""
    );
  }
});

htmlTemplate += "</div>";

divApp.innerHTML = htmlTemplate;

const carrito = [
  {
    descripcion: "Napolitana",
    precio: 1450,
  },
  { descripcion: "Muza", precio: 1200 },
];

const personas = [
  {
    nombre: "persona1",
    edad: 18,
    esMayor: null,
  },
  {
    nombre: "persona2",
    edad: 15,
    esMayor: null,
  },
  {
    nombre: "persona3",
    edad: 12,
    esMayor: null,
  },
];

personas.forEach((persona) => {
  if (persona.edad >= 18) {
    persona.esMayor = true;
  } else {
    persona.esMayor = false;
  }
});

//Los indices de los arrays van desde 0 hasta n - 1 dónde n es igual a la cantidad de elementos
//que tiene un array (length)
//la longitud de un array está dada por la cantidad de elementos del mismo
for (let index = 0; index < personas.length; index++) {
  const persona = personas[index];
  console.log(persona);
}
