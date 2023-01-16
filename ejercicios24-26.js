// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ordAscDes = (arr) => {
    let numAsc = [...arr].sort((a, b) => a - b);
    let numDes = [...arr].sort((a, b) => b - a);
    return console.info({ "asc:": numAsc, "desc:": numDes });
};
ordAscDes(arr);
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const arr2 = [1, 1, 1, true, true, false, 2, false, 3, 3, 44, 44, 44];
const eliDup = (arr) => {
    let noDup = arr.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
    });
    let noDup2 = [...new Set(arr)]; //Esta es la forma optima
    console.info(noDup2);
};
eliDup(arr2);
// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const arr3 = [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5];
const arrAvg = (arr) => {
    let sum = arr.reduce(function (a, b) {
        return a + b;
    }, 0);
    let avg = sum / arr.length;
    return console.info(avg);
};
arrAvg(arr3);
