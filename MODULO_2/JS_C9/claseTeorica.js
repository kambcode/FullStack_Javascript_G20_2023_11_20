///Objetos
///Cual array escoge el usuario carrosMarca (2), o aerolineas (1)
/// Todas las variables
const carrosMarcas = ["Mercedes", "Bmw", "Honda", "Toyota", "Mazda"];
const aerolineas = ["Avianca", "Latam", "Emirates", "KML", "Copa"];
//const marcaCarro = carrosMarcas[4]
const store = {
    eleccion: Math.floor(Math.random()*2)+1,
    elementosSimonDice: [],
    elementosUsuario: [], 
    eleccionArray: [],
    puntaje: 0,
};

//const miPuntaje = store['puntaje']

// Todas las funciones
const agregarElementoNuevoAlArraySimon = () => {
    const index = Math.floor(Math.random() * store.eleccionArray.length)
    store.elementosSimonDice.push(store.eleccionArray[index])
};

const agregarElementoUsuario = (nuevoElemento) => {
    store.elementosUsuario.push(nuevoElemento)
}

const compararSimonUsuario = () => {
    let siEsIgual = true;
    store.elementosSimonDice.forEach((elemento, index)=> {
        if(elemento.toLowerCase() !== store.elementosUsuario[index].toLowerCase() ) {
            siEsIgual = false
        }
    })
    return siEsIgual
}
//Logica

if(store.eleccion === 2) {
    store.eleccionArray = carrosMarcas;
} else {
    store.eleccionArray = aerolineas;
}

agregarElementoNuevoAlArraySimon();
agregarElementoNuevoAlArraySimon();
agregarElementoUsuario("TOYOTA");
agregarElementoUsuario("Mazda");
const comparacion = compararSimonUsuario();

console.log("Elementos Simon Dice Memorizalos", store.elementosSimonDice,store.elementosUsuario,comparacion);



