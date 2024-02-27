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

const rango = (numero1, numero2) => {
    return parseInt(numero1) - parseInt(numero2)
}

const calculoNumeroAleatorioDe0ANumber = (number) => {
    return Math.random() * number
}

const aproximacion = (numeroDecimal) => {
    return Math.round(numeroDecimal);
}

const calculoNumerosAleatoriosPorCantidad = (numerosGerman, numero, inicio) => {
    let index = 0;
    const numerosAleatorios = [];
    while (index < parseInt(numerosGerman)) {
        const numeroAleatorio = calculoNumeroAleatorioDe0ANumber(numero); //0-10
        const aproxNumeroAleatorio = aproximacion(numeroAleatorio);//0-10
        const numeroAleatorioEnRango = aproxNumeroAleatorio + parseInt(inicio); //30-40
        numerosAleatorios.push(numeroAleatorioEnRango);
        index+=1;
    }
    return numerosAleatorios
}


const main =  async() => {
    // Inicio
    const numeroA = await input("Introduzca su primer numero del rango: ");
    const numeroB = await input("Introduzca su segundo numero del rango: ");
    const cuantosNumeros = await input("Cuantos numeros aleatorios: ");
    const rangoCalculado = rango(numeroA, numeroB);
    const misNumeros = calculoNumerosAleatoriosPorCantidad(cuantosNumeros, rangoCalculado, numeroA);
    console.log(misNumeros);
    rli.close();
};
main();
