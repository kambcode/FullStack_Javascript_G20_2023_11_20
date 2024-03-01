const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let acumulado = 0;

const sumarNumero = () => {
  rl.question('Ingrese un nuevo número: ', (respuesta) => {
    const numero = parseFloat(respuesta);
    if (!isNaN(numero)) {
        //acumulado += numero;
        acumulado = acumulado + numero;
        console.log(`Acumulado actual: ${acumulado}`);
        sumarNumero(); // Llamada recursiva para continuar sumando números
    } else {
        console.log('Por favor, ingrese un número válido.');
        sumarNumero(); // Llamada recursiva si la entrada no es un número válido
    }
  });
};


const eleccionOperacion = (numero) => {
    rl.question('Ingrese operacion, suma (s), resta(r), division(d), multiplicacion(m) ', (respuesta) => {
        respuesta = respuesta.toLowerCase();
        if(respuesta === 's' || respuesta === 'Suma') {
            acumulado = acumulado + numero;
            console.log(`Acumulado actual: ${acumulado}`);
            inicio();
        } 
    });
  };

const inicio = () => {
    rl.question('Ingrese un nuevo número: ', (respuesta) => {
      const numero = parseFloat(respuesta);
      if (!isNaN(numero)) {
          eleccionOperacion(numero);
      } else {
        console.log('Por favor, ingrese un número válido.');
        inicio(); // Llamada recursiva si la entrada no es un número válido
      }
    });
  };

console.log('Este programa suma, multipla, resta o divide infinitamente los números ingresados.');
 ///Ejecuccion funcion
inicio();






///Np hace parte de proyecto
// const sumarDosNumeros = (numero1, numero2) => {
//     const resultado = numero1 + numero2;
//     return resultado
// }

// sumarDosNumeros(10,10);

const miFuncionPrueba = (edad) => {
    if(edad > 18) {
        return "Es mayor de edad" 
    }

    if(edad <= 18) {
        return "Es menor de edad" 
    }

    return "No se que edad es"
}