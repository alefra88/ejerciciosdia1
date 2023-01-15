// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const convBinDec = (num = undefined, bas = undefined) => {
    if (num === undefined) {
        return console.warn("no ingresaste el numero a convertir");
    }
    if (typeof num !== "number") {
        return console.warn("el valor ingresado no es un numero");
    }
    if (bas === undefined) {
        return console.warn("No ingresaste la base");
    }
    if (typeof bas !== "number") {
        return console.warn("la base ingresada no es la correcta");
    }
    if (bas === 2) {
        return console.info(
            `El numero ${num} base ${bas} = ${parseInt(num, bas)} base 10`
        );
    } else if (bas === 10) {
        return console.info(`${num} base ${bas} = ${num.toString(2)} base 2`);
    }
};
convBinDec(101, 10);
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const numDesc = (num = undefined, desc = undefined) => {
    if (typeof num !== "number" || typeof desc !== "number") {
        return console.warn(`Debes ingresar numeros`);
    }
    let descount = (desc / 100) * num;
    return console.log(
        num - descount + ` aplicando el ${descount}% de descuento`
    );
};
numDesc(100, 100);
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const YeaTra = (date) => {
    let curYea = new Date().getFullYear();
    let givYea = date.getFullYear()
    return console.info(` han pasado ${curYea - givYea} años`)
};

YeaTra(new Date(0666,6,06))