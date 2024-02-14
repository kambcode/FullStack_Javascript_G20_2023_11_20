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


const main = async () => {
    const amount = await input("Introduzca la cantidad: ");
    console.log(amount);
    const name = await input("EIntroduzca su nombre: ");
    console.log(name);
    rli.close();
};

main();