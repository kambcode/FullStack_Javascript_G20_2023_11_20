const { isNumber } = require('util');

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
    const numeroA = await input("Introduzca su primer numero del rango: ");
    const numeroB = await input("Introduzca su segundo numero del rango: ");
    const cuantosNumeros = await input("Cuantos numeros aleatorios ");
    // Validaciones numeroA 15 numeroB 30
    const rango = Rango(rango);
    
    const numeros = aleatoriosSeguncantidad(cuantosNumeros);
    console.log(numeros);
    //const rango = parseInt(numeroB) - parseInt(numeroA);

    console.log(rango);

    //Math.sqrt() raiz cuadrada 
    //Math.random() ///0 => 1
    //Un numero aleatorio entre 0 y 100, Math.random() * 100
    //rango = 10

    let i = 0;
    const numerosAleatorios = [];
    while (i < cuantosNumeros) {
        const numeroAleatorio = calculoNumeroAleatorio(rango);

        const aproxNumeroAleatorio = Math.floor(numeroAleatorio);

        const numeroAleatorioEnRango = aproxNumeroAleatorio + numeroA;
        numerosAleatorios.push(numeroAleatorioEnRango);
        i++;
    }
    console.log(numerosAleatorios);

    rli.close();
};
main();

const calculoNumeroAleatorio = (rango) => {
    return Math.random() * rango
}

const aproximacion = () => {

}

const aleatoriosSeguncantidad = () => {

}

