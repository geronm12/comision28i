const tipos = {
  MAGIA: "magia",
  MAQUINA: "maquina",
  OSCURO: "oscuro",
  HABIL: "hábil",
  MUTANTE: "mutante",
};

const personajes = [
  {
    id: 1,
    nombre_heroe: "Iron Man",
    super_poder: "Inteligencia",
    hp: 2500,
    mp: 2500,
    tipo: tipos.HABIL,
  },
  {
    id: 2,
    nombre_heroe: "Thor",
    super_poder: "Dios del trueno",
    hp: 2000,
    mp: 3000,
    tipo: tipos.MAGIA,
  },
  {
    id: 3,
    nombre_heroe: "Wolverine",
    super_poder: "Garras Inmortalidad",
    hp: 3500,
    mp: 1200,
    tipo: tipos.HABIL,
  },
  {
    id: 4,
    nombre_heroe: "Dead Pool",
    super_poder: "Inmortalidad",
    hp: 4000,
    mp: 0,
    tipo: tipos.HABIL,
  },
];

//simula una petición sin espera -> síncrona
function getDataFromDataBaseSync() {
  return personajes;
}

//setTimeout(//funcion, el tiempo de esperar en milisegundos);

function getDataFromDataBaseWithDelayNoPromise() {
  setTimeout(() => personajes, 2000);
}

//la palabra async indica que se va a ejecutar la funcion de forma asíncrona
async function getDataFromDataBaseAsync() {
  return new Promise(function (resolve, reject) {
    if (personajes.length > 0) {
      setTimeout(
        resolve({
          data: personajes,
          ok: true,
          status: 200,
        }),
        5000
      ); //esto indica que la promesa se cumplió y devuelve la data
    }

    setTimeout(
      reject({
        msg: "El servidor no encontró coincidencias en la búsqueda.",
        status: 400,
        ok: false,
      }), //indica el error
      2000
    );
  });
}

//javascript por defecto pasa los valores dce las funciones x value
// getDataFromDataBaseAsync()
//   .then((personajes) => {
//     console.log(personajes);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//async -> trabajamos con una función que va a requerir esperarse, TODAS las funciones asíncronas
//devuelve promesas
async function getDataFromDataBaseAsyncAwait() {
  try {
    const result = await getDataFromDataBaseAsync(); //la promesa resuelta o el error no controlado
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

// console.log(
//   "%c Data Sincrona, sin tiempo de respuesta",
//   "background: #2f708b; color: #ccff84"
// );
// console.log(getDataFromDataBaseSync());
// console.log(getDataFromDataBaseWithDelayNoPromise());
// console.log(getDataFromDataBaseAsyncAwait());

//Documentos
//Promise -> te prometo que voy a responder
//Variación del tpo de rta:   - La infra (del servidor, la db)
//                            - La carga
//                            - Algoritmos de lectura
//                            [...]

//GET -> leer
//URL -> https://rickandmortyapi.com/api/character  ENDPOINT
//fetch - axios (descargamos librería)

let resp = prompt("por favor ingrese el personaje al que quiere buscar");
const app = document.getElementById("app");

fetch("https://rickandmortyapi.com/api/character/" + resp)
  .then((data) => {
    return data.json();
  })
  .then((res) => {
    let htmlString = "";
    htmlString += `<img src="${res.image}"/>`;
    htmlString += `<span> ${res.name} </span>`;
    app.innerHTML = htmlString;
  })
  .catch((err) => console.log(err));
