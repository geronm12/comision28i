//es un objeto propio del lenguaje de javascript
//instancia
class Tarea {
  tarea_a_realizar;
  fecha;
  validacion;

  constructor(tarea_a_realizar, fecha) {
    this.tarea_a_realizar = tarea_a_realizar;
    this.fecha = fecha;
  }
}

//JSON -> Javascript Object Notation
const tarea = {
  tarea_a_realizar: "",
};

// class Usuario {
//   nombre;
//   constructor(nombre) {
//     this.nombre = nombre;
//   }
// }

// const usuario = new Usuario("glopez");

//falta la fecha

const tareaARealizar = new Tarea("ir al médico", null, () => {});

// tareaARealizar.validacion();

// console.log(tareaARealizar);

//clave o llave/valor
const repetidos = {};

const letras = ["c", "o", "c", "a"];

//1era vuelta
//letra = c   +1
//2da vuelta letra = o +1
//3ra vuelta = c
for (let index = 0; index < letras.length; index++) {
  const letra = letras[index];
  //si repetidos en "c" no existe asignale el valor 0, si
  //si repetidos en "c" existe, sumale uno al valor que ya tenía
  //repetidos["c"] = (repetidos["c"])
  repetidos[letra] = (repetidos[letra] || 0) + 1;
}

console.log(repetidos);

const persona = {
  nombre: "geronimo",
};

console.log(persona["nombre"]);

const empleado = {
  nombre: "",
  empresa: "",
};

empleado.nombre = "geronimo";
empleado.empresa = "mc-donalds";

empleado["nombre"] = "geronimo";
empleado["empresa"] = "mc-donalds";
