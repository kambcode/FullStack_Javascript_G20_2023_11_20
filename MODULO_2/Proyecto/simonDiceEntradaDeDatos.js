const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const miAcomuladorDePalabras = [];

const inicio = () => {
    rl.question('Ingrese su palabra: ', (respuesta) => {
      
      if (respuesta) {
        miAcomuladorDePalabras.push(respuesta);
        console.log(miAcomuladorDePalabras);
        inicio();
      } else {
        console.log('Por favor, ingrese una palabra valida');
        inicio(); // Llamada recursiva si la entrada no es un número válido
      }
    });
  };

console.log('Este programa que acumula palabras en un array');
 ///Ejecuccion funcion
inicio();
