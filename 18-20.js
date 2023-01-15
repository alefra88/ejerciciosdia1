// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const conVocCon = (text = undefined) => {
    if (text === undefined) return console.warn("ingresa una cadena de texto");
    if (typeof text === "number")
        return console.warn("el texto no puede ser numero");
    const conVoc = text.match(/[aeiou]/gi).length;
    const conCon = text.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
    return console.info(
        `el numero de vocales es: ${conVoc} el numero de consonantes es: ${conCon}`
    );
};
conVocCon("ASDAS");
// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const valEma = (email) => {
    const emaReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isvalid = emaReg.test(email);
    return console.info(isvalid);
};
valEma("alan@performance.com");
