// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

// const reverseWord = (date = "") =>
//     !date
//         ? console.warn("debes ingresar texto")
//         : date.split("").reverse().join("");

// console.log(reverseWord("Encontraré dinero en la tarde porque tengo buena suerta"));

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

// const contarPalabras = (date = "", text = "") => {
//     if (!date) return console.warn("Debes ingresar texto");

//     if (!text) return console.warn("no ingresaste la palabra");

//     let i = 0,
//         contador = 0;
//     while(i !== -1){
//       i = date.indexOf(text,i);
//       if(i!==-1){
//        i++;
//        contador++;
//       }
//     }
//     return console.info(`La palabra ${text} se repite ${contador}veces`)
// };
// contarPalabras("asdsdsadd21edasdas 222","2");

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// const palindromo = (date = "") => {
//     if (!date) return console.warn("Debes ingresar texto");
//     const re = /[\W_]/g;
//     date = date.toLowerCase().replace(re,"");
//     const reverseDate = date.split("").reverse().join("")
//     console.log(reverseDate)
//     return (date===reverseDate)?
//       console.log(`la palabra ${date} es palindromo`):console.log(`La palabra ${date} no es palindromo`)
// };

// palindromo("anita lava la tina");
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const eliminarChar = (text = "", patron = "") =>
    !text
        ? console.warn("No ingresaste texto")
        : !patron
        ? console.warn("No ingresaste un patròn")
        : console.info(text.replace(new RegExp(patron, "ig"), ""));



        eliminarChar("asdasd","d")
