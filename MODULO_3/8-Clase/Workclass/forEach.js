// foreach

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let index = 0; index < numeros.length; index++) {
//   console.log(numeros[index]);
// }

numeros.forEach((numero, index) =>
  console.log(" index: ", index, " value: ", numero)
);
