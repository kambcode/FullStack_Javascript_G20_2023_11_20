////Arrays
const marcasCelular = ["Apple", "Nokia", "Samsung", "OnePlus"]; 
///Push
marcasCelular.push("Xiaomi"); // ["Apple", "Nokia", "Samsung", "OnePlus", "Xiaomi"];
//Pop
marcasCelular.pop();// ["Apple", "Nokia", "Samsung", "OnePlus"];
//unshift
marcasCelular.unshift("BB");// ["BB", "Apple", "Nokia", "Samsung", "OnePlus"];
//shift
marcasCelular.shift();// ["Apple", "Nokia", "Samsung", "OnePlus"];

///Quiero el elemento en posicion 2
const elemento = marcasCelular[2]; // "Samsung"


///Quiero el elemento en posicion 0
const element1 = marcasCelular[0]; // "Apple"

///Quiero el elemento ultimo
const element2 = marcasCelular[marcasCelular.length-1]; // "OnePlus"

///Redefinir un elemento cambiar Apple por Sony

marcasCelular[0] = "Sony";// ["Sony", "Nokia", "Samsung", "OnePlus"];

///Slice

const nuevoArray = marcasCelular.slice(2);// ["Samsung", "OnePlus"]
const nuevoArray1 = marcasCelular.slice(1,2);// ["Nokia","Samsung", "OnePlus"]

///Join
marcasCelular.join(); // "SonyNokiaSamsungOnePlus"
marcasCelular.join(","); // "Sony,Nokia,Samsung,OnePlus"

///contact

[1,2,3].concat([4,5,6]) //[1,2,3,4,5,6]

///reverse

const numbers = [1,2,3,4,5,6];
const numbersReverse = numbers.reverse(); //[6,5,4,3,2,1];

//Splice

numbers.splice(3,0,"$", "%"); //[1,2,3,"$","%", 4,5,6]

//Includes

numbers.includes(5) //boolean true

// indexOf 

numbers.indexOf(5) //number 4

//References
const german = ["guapo", "alto", "buenRostro", "atletico"];
const dicaprio = german;

german[1] = "Bajo";
console.log(german);// ["guapo", "bajo", "buenRostro", "atletico"];
console.log(dicaprio); // ["guapo", "bajo", "buenRostro", "atletico"];

const dicaprio2 = [...german];
german[3] = "Gordo";
console.log(dicaprio2); // ["guapo", "bajo", "buenRostro", "atletico"];

///Funciones
///Sintaxis
/// definicion
///principio solid
function miPrimerFuncionSuma(entrada1, entrada2) {
    /// contenido mi funcion
    return entrada1 + entrada2 //salida
}
///correr
const miSuma = miPrimerFuncionSuma(1, 2);
const miSuma2 = miPrimerFuncionSuma(1, 3);

// posibles funciones
// anonima
// sin salida
// sin entradas

//Arrow function //Privadas
const calculaArea = (alto, ancho) => {
    return alto * ancho
};

const calcularAreaCuadrado = calculaArea(2, 4); //8

///Clases
class GeometricForm {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width
    }

    perimetro() {
        return this.height * 2 + this.width *2
    }
}

const figura = new GeometricForm (10, 10);
const area = figura.area();
const perimetro = figura.perimetro();