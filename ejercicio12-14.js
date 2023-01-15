// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const numPrim = (num = undefined) => {
    if (num === undefined) {
        return console.warn("No ingresaste un numero");
    }
    if (typeof num !== "number") {
        return console.warn("El valor ingresado es cadena y debe ser numero");
    }
    if (num < 2) {
        return console.info(`El numero ${num} No es primo`);
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return console.log(`El numero ${num} no es primo`);
        }
    }
    return console.log(`El numero ${num} es primo`);
};
numPrim(5);
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const ParImpar = (num = undefined) => {
    if (num === undefined) {
        return console.warn("No ingresaste un numero");
    }
    if (typeof num !== "number") {
        return console.warn("El valor ingresado es cadena y debe ser numero");
    }
    if (num % 2 === 0) {
        return console.info(`El numero ${num} es Par`);
    } else {
        return console.info(`El numero ${num}  es Impar`);
    }
};
ParImpar(3);
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const convGrad = (num, tipo) => {
    if (tipo === "c" || tipo === "C") {
        return console.log(`${(num * 9) / 5 + 32} grados Celcius`)
    } else if (tipo === "f" || tipo === "F") {
        return console.log(`${((num - 32) * 5) / 9} grados Fahrenheit`);
    } else {
        return console.warn(`Tipo de dato no valido`);
    }
};

convGrad(23, "c");
