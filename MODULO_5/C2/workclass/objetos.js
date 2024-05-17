let miCarro = {
    color: "Blanco",
    marca: "Chevrolet",
    modelo: "Beat",
};

let computador = {
    marca: "Asus",
    modelo: "TUF",
    procesador: "Core I9 10a Gen.",
    ram: "8GB",
}

let computadorUno = {
    marca: "Asus",
    modelo: "TUF",
    procesador: "Core I9 10a Gen.",
    ram: "8GB",
}

console.log(computador);
console.log(computadorUno);

var persona = {
    nombre: "Juan",
    edad: 30,
    casado: false,
    hijos: ["Ana", "Pedro"],
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};

console.log(persona.nombre);

let personaTres = {
    nombre: "Jose",
    edad: 24,
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    },
    presentarse: function() {
        console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años.");
    }
};

let arrayPaises = arrayPaises.map(function(elemento, indice, array) {
    // código de transformación
    return nuevoElemento;
});

let numeros = [1, 2, 3, 4, 5];
let dobles = numeros.map(function(numero) {
    return numero * 2;
});
console.log(dobles); // [2, 4, 6, 8, 10]

// Ejercicio 1
let personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 25 },
    { nombre: "Carlos", edad: 35 }
];
let nombresPersonas = personas.map(function(persona) {
    return persona.nombre;
});
console.log("Nombres de las personas: " + nombresPersonas);

// Filtrar números mayores que un valor dado
let numbers = [10, 5, 20, 15, 25];
let mayoresQueQuince = numbers.filter(function(number) {
    return number > 15;
});
console.log(mayoresQueQuince); // [20, 25]

// Copiar un array
var array1 = [1, 2, 3];
var array2 = [...array1];
console.log(array2); // [1, 2, 3]

// Combinar arrays
var array3 = [4, 5, 6];
var array4 = [...array1, ...array3];
console.log(array4); // [1, 2, 3, 4, 5, 6]