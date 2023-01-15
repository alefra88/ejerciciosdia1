// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
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
numDesc("12", "12");
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
