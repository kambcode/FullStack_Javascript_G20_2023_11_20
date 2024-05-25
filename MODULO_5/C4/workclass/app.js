const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    
    res.writeHead(200, {'Content-Type': 'text/plain' });

    res.end('Hola, Kambcode Backend M5');
});

server.listen(PORT, () => {
    console.log(`Servidor está siendo escuchado ${PORT}`)
})

console.log('Esta es mi aplicación, después de instalar Nodemon');
console.log('Soy estudiante de Kambcode');
console.log('Soy Jose Luis, y soy el profe');

// Spread operator

// Con arrays
const estudiantes = ["Jose", "Darío", "Janeth", "David"];
const temas = ["HTML", "CSS", "JavaScript", "Node.js"];

const estudianteTema = [...estudiantes, ...temas, "Para cada estudiante, un tema, en orden"];

console.log(estudiantes, temas);

console.log(estudianteTema, "Este es mi array transformado");

// Con objetos

let carro = {
    marca: "Renault",
    referencia: "Logan",
    precio: "$45.000.000"
};

let venta = {
    numeroFactura: "COD458934Renault",
    impuesto: "$2.200.000"
};

const carroVenta = {
    ...carro,
    ...venta
};

console.log(carroVenta);