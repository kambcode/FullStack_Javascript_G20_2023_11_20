# Tarea 9

- **Entendiendo Closures:**

  Descripción: Completa una función simple que demuestre el concepto de closure.
  Instrucciones:

  ```javascript
  // Ejercicio:
  function creaFuncion() {
    let mensaje = "Hola";
    function muestraMensaje() {
      console.log(mensaje);
    }
    return muestraMensaje;
  }

  const miFuncion = creaFuncion();
  miFuncion(); // ¿Qué imprimirá? ¿Por qué?
  ```

- **Uso de Closures en Contextos Prácticos:**

  Descripción: Implementa una función que utilice closures para crear un .
  Instrucciones:

  ```javascript
  // Ejercicio:
  function crearContador() {
    let count = 0;
    return function () {
      // Completa esta función para incrementar 'count' en 1 y devolver su valor
    };
  }

  const contador = crearContador();
  console.log(contador()); // ¿Qué imprimirá? ¿Por qué?
  console.log(contador()); // ¿Qué imprimirá ahora?
  ```

- **Uso Avanzado de Closures:**

  Descripción: Implementa una función que tome un número como argumento y devuelva una función que multiplique su argumento por el número original utilizando un closure.
  Ejercicio:

  ```javascript
  function multiplicador(numero) {
    // Completa esta función para devolver una función que multiplique su argumento por 'numero'
  }
  const duplicar = multiplicador(2);
  console.log(duplicar(5)); // Debería imprimir 10
  ```

- **Callbacks en Manejo de Datos:**

  Descripción: Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar todos los números del arreglo.

  Ejercicio:

  ```javascript
  function sumarArreglo(numeros, callback) {
    // Completa esta función para sumar todos los números del arreglo y llamar al callback con el resultado
  }
  const numeros = [1, 2, 3, 4, 5];
  sumarArreglo(numeros, function (resultado) {
    console.log(resultado); // Debería imprimir 15
  });
  ```

- **Callbacks para Filtrar Elementos de un Arreglo:**

  Descripción: Crea una función que tome un arreglo y un callback de filtro, y devuelva un nuevo arreglo con los elementos que pasan el filtro.
  Ejercicio:

  ```javascript
  function filtrarArreglo(arreglo, callbackFiltro) {
    // Completa esta función para devolver un nuevo arreglo con los elementos que pasan el filtro
  }

  const numeros = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
  });
  console.log(numerosPares); // Debería imprimir [2, 4]
  ```
