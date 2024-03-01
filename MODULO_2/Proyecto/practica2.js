
const miFamilia = {
    papa:  {nombre: 'Roberto', edad: 55, hobbie: 'golf', apellido: 'Rodriguez'},
    mama:  {nombre: 'Martha', edad: 55, hobbie: 'shoping', apellido: 'Martinez'},
    abuelo:  {nombre: 'Ezequiel', edad: 80, hobbie: 'ajedrez', apellido: 'Rodriguez'},
    hijo:  {nombre: 'Mateo', edad: 67, hobbie: 'futbol', apellido: 'Rodriguez'},
};

///Cree un algoritmo que reciba el objeto familia, y devuelva el nombre y apellido del familiar 
// mas joven, familiar mas viejo, y que salude al miembro de la familia que le gusta el shopping 
// con un "Hola, <Nombre><Apellido nos fascina que te guste el shopping"

const inicio = () => {
    //Loop
    let familiarEdadMinima = '';
    let edadMinima = 300;
    for(familiar in miFamilia) {
        console.log(familiar, "===>", miFamilia[familiar].edad);
        if(edadMinima > miFamilia[familiar].edad) {
            edadMinima = miFamilia[familiar].edad;
            familiarEdadMinima = familiar;
        }
    }
    console.log("El familiar con edad minima es: " + familiarEdadMinima);
};



console.log('Este programa calcula mi familia');
 ///Ejecuccion funcion
inicio();
