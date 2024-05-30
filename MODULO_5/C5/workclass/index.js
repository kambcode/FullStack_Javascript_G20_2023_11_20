const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('¡Bienvenido al servidor básico de Node.js!\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// // Mi primer promesa en JS
// const myPromise = new Promise((reject, resolve) => {
//   // Contenido de ejecución de nuestra promesa
//   setTimeout(() => {
//     const numberRandom = Math.random();
//     if (numberRandom > 0.5) {
//       resolve(numberRandom);
//     }
//     else {
//       reject(new Error(`Error, el número es menor o igual a 0.5`));
//     }
//   }, 100)
// })

// // Manejo de la promesa resuelta
// myPromise.then((result) => {
//   console.log('La promesa se resolvió', result);
// }).catch((error) => {
//   console.log('La promesa fue rechazada', result);
// })

// const miPromise = new Promise((resolve, reject) => {
//   // Operación asíncrona
//   let success = true;
//   if (success) {
//     resolve('¡Éxito!');
//   } else {
//     reject('Error');
//   }
// });

// async function resolvePromiseBasic() {
//   const result = await miPromise();
//   console.log(result);
// }

// async function resolvePromCatch() {
//   try {
//     const result = await miPromise();
//   } catch (error) {
//     // Manejo del error
//   }
// }

// Filesystem
// 1. Lectura y escritura de archivos.
// 2. Manipulación de directorios.
// 3. Manipulación de archivos.
// 4. Operaciones sincronas o asincrónicas

fs.writeFile('ejemplo.txt', 'Hola Kambcode', (err) => {
  if(err) {
    console.error('Error al escribir archivo');
    return;
  }
  console.log('Archivo fue creado con éxito');
});

fs.readFile('ejemplo.txt', 'utf8', (err, data) => {
  if(err) {
    console.log('Error al leer archivo', err);
    return;
  }
  console.log('Lectura de mi archivo->Contenido del archivo:', data);
});