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