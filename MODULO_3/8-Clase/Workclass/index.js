const productos = [
  {
    nombre: "Camisa",
    precio: 25,
    cantidad: 2,
    categoria: "Ropa",
    color: "Azul",
    talla: "M",
  },
  {
    nombre: "Pantalón",
    precio: 40,
    cantidad: 1,
    categoria: "Ropa",
    color: "Negro",
    talla: "32",
  },
  {
    nombre: "Zapatos",
    precio: 50,
    cantidad: 1,
    categoria: "Calzado",
    color: "Marrón",
    talla: "40",
  },
  {
    nombre: "Bolso",
    precio: 30,
    cantidad: 1,
    categoria: "Accesorios",
    color: "Rojo",
    material: "Cuero",
  },
  {
    nombre: "Gorra",
    precio: 15,
    cantidad: 3,
    categoria: "Accesorios",
    color: "Negro",
    estilo: "Béisbol",
  },
  {
    nombre: "Reloj",
    precio: 80,
    cantidad: 1,
    categoria: "Accesorios",
    color: "Plateado",
    marca: "Casio",
  },
];

const total = productos.reduce(
  (acumulador, producto) => acumulador + producto.precio * producto.cantidad,
  0
);

if (total > 100) {
  console.log("¡Felicitaciones! Tu compra califica para envío gratuito");
} else {
  console.log("Agrega más productos para calificar para envío gratuito");
}
