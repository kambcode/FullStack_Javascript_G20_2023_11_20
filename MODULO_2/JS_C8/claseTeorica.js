////Objetos
const miPrimerObjeto = { };
///propiedades
const miSegundoObjeto = { edad: 23, nombre: "German", apellido: "Arciniegas"};
///quiero obtener una propiedad de ese objeto
const nombre = miSegundoObjeto.nombre; //German
const nombre1 = miSegundoObjeto['nombre'] //German

///propiedades nietas
const miSegundoObjeto1 = { edad: {edad1: 21, edad2: 34}, nombre: [[],{}, new Date()], apellido: "Arciniegas"};
const miPropiedad = miSegundoObjeto1.edad.edad2; //34

///como cambio una propiedad

miSegundoObjeto1.edad.edad2 = 90; // 90

///copia de objetos
///referencia
const colombia = {habitantes: '49M', area: '1,2M' }
const argentina = colombia; //copiando referencias //segundo nivel //deep copy 

colombia.habitantes = '30M'

console.log(argentina.habitantes) //30M

////spread operator

const argentina1 = {...colombia, continente: 'suramerica'}

///objeto principal array, imagen, date, mapa de bits, video, dom
///mutacion

const saludo = (usuario) => {
    return "Hola" + usuario.name + " " + usuario.apellido
}

const saludar = saludo(miSegundoObjeto); //"Hola German Arciniegas"