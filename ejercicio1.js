//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const contarChar = (dato) => {
    if (typeof dato === "string") {
        return dato.length;
    }
    if (typeof dato === "number") {
        let numToString = dato.toString();
        return numToString.length;
    }
    //no entiendo porque siempre me da 15 jajajaja
    if (typeof dato === "object") {
        let objToString = dato.toString();
        return objToString.length;
    }
};
// Esta es la forma fàcil
const contarC = (dato) => dato.length;
console.log(contarC("holaxddddd"));

const persona = {
    name: "Alan",
    edad: 24,
    apellido: "ocampo",
};
console.log(contarChar(persona));

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const recorte = (dato, corte) => dato.slice(0, corte);
console.log(recorte("hola mis niños", 4));

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const espletxd = (dato) => dato.split(" ");

console.log(espletxd("hola a todo mundo"));

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repetir = (dato, repeticiones) => dato.repeat(repeticiones);

console.log(repetir("dato a repetir ", 5));
