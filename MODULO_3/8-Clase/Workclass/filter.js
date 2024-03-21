// filter

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numerosPares = numeros.filter((numero) => numero % 2 === 0);
// quiero los numeros mayores a 5
// comparar
// un numero mayor a 5
// return

// 1 > 5 // false
// 2 > 5 // false
// 3 > 5 // false
// 5 > 5 // false
// 6 > 5 // true

const numerosMayor5 = numeros.filter((numero) => numero > 5);

console.log(numerosPares);
console.log(numerosMayor5);

const productos = [
  {
    nombre: "Camisa",
    precio: 2500,
    cantidad: 2,
    categoria: "Ropa",
    color: "Azul",
    talla: "M",
  },
  {
    nombre: "Pantalón",
    precio: 4000,
    cantidad: 1,
    categoria: "Ropa",
    color: "Negro",
    talla: "32",
  },
];

// Quiero todos los productos diferentes a camisa
// iterar el array
// comparar
// retornar

// "pantalon" !== "camisa" // true
// "camisa" !== "camisa" // false
//pantalon

function filtrarLista(item) {
  return productos.filter((producto) => producto.nombre !== item);
}

console.log(filtrarLista("Camisa"));
