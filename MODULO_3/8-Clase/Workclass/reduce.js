// Reduce

const sumaNumeros = numeros.reduce((acumulador, numero) => acumulador + numero);

// const suma = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9;

console.log(sumaNumeros);

const caracteres = ["h", "o", "l", "a"];

const mensaje = caracteres.reduce(
  (acumulador, valorActual) => acumulador + valorActual
);

const caracteres2 = "h" + "o" + "l" + "a";

console.log("primer intento: " + caracteres2);
console.log("el mensaje es: " + mensaje);

const numerosPares3 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// Quiero sumar una serie o lista de numeros pares
// iterar
// almacenar (const resultado = 2;) (resultado = resultado + 4 // 6) (resultado = sumalala + 8 // 14)
// suma

let acumulador = 0;

for (let index = 0; index < numerosPares3.length; index++) {
  acumulador = numerosPares3[index] + acumulador;
}

console.log("acumulador: ", acumulador);

const resultado2 = numerosPares3.reduce(
  (acumulador, numeroPar) => numeroPar + acumulador
);

console.log("acumulador 2: ", resultado2);
