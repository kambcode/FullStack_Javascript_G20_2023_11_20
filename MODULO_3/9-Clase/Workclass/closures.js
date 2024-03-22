// Closures

// Function Factory

function crearContador() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const contador = crearContador();

console.log(contador()); // 1
console.log(contador()); // 2
console.log(contador()); // 3
console.log(contador()); // 4
console.log(contador()); // 5
console.log(contador()); // 6

function crearPersona() {
  const nombre = "yaneth";
  const edad = 18;
  const profesion = "desarrolladora";

  function mostrarPersona() {
    console.log(nombre);
    console.log(edad);
    console.log(profesion);
  }

  return mostrarPersona;
}

const usuario = crearPersona();

usuario();

//

const manzana = "manzana";

function exterior() {
  const piña = "piña";
  function interior() {
    const lechuga = "lechuga";
    console.log(lechuga);
    console.log(manzana);
    console.log(piña);
  }

  interior();
}

// console.log(lechuga);

// global scope
// local scope
// enclosing scope

const global = 10;

function sumA(a) {
  // global - a //
  return function (b) {
    // global - a - b
    return function (c) {
      // global - a - b - c
      return function (d) {
        // global - a - b -c -d
        return a + b + c + d + global;
      };
    };
  };
}

const sumB = sumA(1);
const sumC = sumB(1);
const sumD = sumC(1);
const total = sumD(1);

console.log(sumA(1)(1)(1)(1));
console.log(total);
