// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

// const reverseWord = (date = "") =>
//     !date
//         ? console.warn("debes ingresar texto")
//         : date.split("").reverse().join("");

// console.log(reverseWord("Hola Mundo"));

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contarPalabras = (date = "") => {
    if (!date) {
        arr = date.split(" ");
        arr.flat();
        arr.filter((e, i, a) => a.indexOf(e) !== i);
        arr.map((e, i, a) => ({
            [e]: a.filter((str) => str === e).length + 1,
        }));
    }
};
console.log(contarPalabras("asdasd asdasd asdasd"));

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
