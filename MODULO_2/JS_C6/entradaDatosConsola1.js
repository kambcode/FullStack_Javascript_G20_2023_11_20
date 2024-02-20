
const rli = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(prompt) {
    return new Promise((callbackFn, errorFn) => {
        rli.question(prompt, (uinput)=> {
            callbackFn(uinput);
        }, ()=> {
            errorFn();
        });
    });
}


const main =  async() => {
    // Inicio
    //const amount = await input("Introduzca la cantidad: ");
    //console.log(amount);

    ///Scope Alcance
    ///Hoisting => Concepto que indica definir las variables al inicio
    //// var variable publica, no se debe
    var miPrimerVariable = "mi primer texto";

    // let, const variable privada
    let miVariableLet = "mi segundo texto";

    //Loops => Bucle
    console.log(1);
    console.log(2);
    console.log(3);

    //while => Mientras
    /// SINTAXIS
    let index = 0;
    while (index < 10) {
        console.log(Math.floor((100 * Math.random())));
        // index = index + 1;
        index ++;
    }
    // for => para

    for (let i = 0 ; i < 10 ; i++ ) {
        console.log(Math.floor((100 * Math.random())), "******");
    }

    /// for of
    /// for in
    /// Array => Arreglo, Lista => Tipo de dato de js, primitivo es un objeto
    
    const miPrimerArray = ["Uva", "Banana", "Coco", "Pera", "Manzano"];
    let existeLaManzana = false;

    for (fruta of miPrimerArray) {
        console.log(fruta);
        if(fruta === "Manzana") {
            existeLaManzana = true;
        }
    }

    for (let i = 0; i < miPrimerArray.length; i++) {
        console.log(miPrimerArray[i]);
    }

    for (fruta in miPrimerArray) {
        console.log(fruta, "<===Index");
    }

    console.log(existeLaManzana ? "Existe la manzana" : "No existe la manzana");

    ///+, -, /, *
    // let velocimetro = 0;
    // velocimetro = velocimetro + 1;
    // velocimetro = 2;

    const miSegundoArray = ["Amarillo", "Azul", "Blanco", "Verde", "Negro"];

    //loop map, forEach, filter, find, some, reducer

    const nuevoArray = miSegundoArray.map((color) => { 
        return color + "=)";
    })

    console.log(nuevoArray);
    miSegundoArray.forEach((color) => { 
        console.log(color + "=)");
    })
    
    //Final
    rli.close();
};
main();

