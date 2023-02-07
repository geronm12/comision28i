//#region  Datos
const productosVenta = [
  {
    nombre: "Horizon Forbbiden West",
    descripcion: "",
    precio: 20000,
    url: "imagen",
    descuento: false,
    monto_descuento: null,
  },
  {
    nombre: "Fifa 23",
    descripcion: "",
    precio: 15000,
    url: "imagen",
    descuento: true,
    monto_descuento: 30,
  },
  {
    nombre: "Dead Space Remake",
    descripcion: "",
    precio: 18000,
    url: "imagen",
    descuento: false,
    monto_descuento: null,
  },
  {
    nombre: "Elden Ring",
    descripcion: "",
    precio: 10000,
    url: "imagen",
    descuento: true,
    monto_descuento: 20,
  },
  {
    nombre: "Resident Evil 2 Remake",
    descripcion: "",
    precio: 3000,
    url: "imagen",
    descuento: false,
    monto_descuento: null,
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

let htmlTemplate = "<div class='d-flex'>";

productosVenta.map((element) => {
  const { url, nombre, descripcion, precio, descuento, monto_descuento } =
    element;
  htmlTemplate += cardTemplate(
    url,
    nombre,
    descripcion,
    "",
    precio,
    descuento ? monto_descuento : ""
  );
});

htmlTemplate += "</div>";

divApp.innerHTML = htmlTemplate;
