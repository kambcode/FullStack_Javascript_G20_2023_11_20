// map

console.log("map");

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numerosX10 = numeros.map((value) => value * 10);

console.log(numerosX10);

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

const productosIva = productos.map((producto) => {
  if (producto.categoria === "Ropa") {
    const newPrice = producto.precio * 0.19 + producto.precio;
    return {
      ...producto,
      precio: newPrice,
    };
  }

  return producto;
});

console.log("productos: ", productos);
console.log("productosIva: ", productosIva);
