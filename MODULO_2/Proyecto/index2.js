////Atom Design
////SOLID

////Trabajar en la nasa

// 1. Alimentarse
// 2. Educacion
// 3. Deporte
// 4. Salud
// 5. Recursos
// 6. Primaria
// 7. Ingles
// 8. 
// 100. Estudiar ingenieria aeroespacil
// 101. Aplicar a la Nasa

///PALINDROME ?   ANANA === ANANA
//a. convierta a array
const palabraInicial = "Ana ana";
const miArrayInicial = palabraInicial.replaceAll(" ", "").split(""); // ["a", "n", "a"]
//b. convertir el array al reves
const revesArray = miArrayInicial.reverse(); // ["a", "n", "a"]
//1. Escribir la palabra al reves
const reverseString = revesArray.join("");
//1.a. Convertir la primera palabra a string
//2. Comparo la primera letra de mi palabra inicual con la palabra el reves, 
//hacer sucesivamente con todas las letras, comparo como palabra

//"perrosYgATOS" === "perrosYgATOS"
//['a', 'b', 'c'] === ['a', 'b', 'c'] //false
console.log(palabraInicial, reverseString)
if(palabraInicial.toLowerCase() === reverseString.toLowerCase()) {
    console.log("Es un palindrome");
} else {
    console.log("No es un palindrome");
}