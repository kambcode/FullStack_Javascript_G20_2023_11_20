const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const miAcomuladorDePalabras = [];

///Haga un ejercicio que recibe un array de numeros y este da el resultado de la suma de los pares y la suma
/// de los impares, la persona debe llenar el array con limite de 10
let sumaPar = 0;
let sumaImpar = 0;

const inicio = () => {
    rl.question('Ingrese su numero: ', (respuesta) => {
        
        if (!isNaN(respuesta)) {
            const numero = parseFloat(respuesta);
            miAcomuladorDePalabras.push(numero);
            console.log(miAcomuladorDePalabras);
            if(numero%2 === 0) {
                sumaPar += numero 
            } else {
                sumaImpar+= numero;
            }

            if(miAcomuladorDePalabras.length === 10) {
               //const resultado =  sumarArray(miAcomuladorDePalabras);
               console.log("La suma par es: "+ sumaPar);
               console.log("La suma impar es: "+ sumaImpar);
            } else {
                inicio();
            }
        } else {
            console.log('Por favor, ingrese un numero valida');
            inicio(); // Llamada recursiva si la entrada no es un número válido
        }
    });
  };

// const sumarArray = (miAcomuladorDeNumeros) => {
//     let sumaPar = 0;
//     let sumaImpar = 0;
//     for(numero of miAcomuladorDeNumeros) {
//         if(numero%2 === 0) {
//             sumaPar += numero 
//         } else {
//             sumaImpar+= numero;
//         }
//     }
//     return [sumaPar, sumaImpar]
// }

console.log('Este programa que calcula la suma de los numeros pares e impares de un array de 10');
 ///Ejecuccion funcion
inicio();
