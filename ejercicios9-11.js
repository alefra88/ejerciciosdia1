// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// const ranNum = () => console.log(Math.floor(Math.random()*(600-501+1)+501))

// ranNum()
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// const numCap = (num)=> {
//   let numStr=num.toString(),
//       revNumStr=numStr.split("").reverse().join("")
//       if(numStr===revNumStr){
//         return true
//       }
//       else {
//         return false
//       }
// }

// console.log(numCap(3231))
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = (numero = undefined) => {
    if (numero === undefined) {
        return console.warn("No ingresaste un numero");
    }
    if (typeof numero !== "number") {
        return console.warn("El valor ingresado no es numero");
    }
    if (Math.sign(numero) === -1)
        return console.error("El numero no puede ser negativo");
    let total = 1;
    for (i = numero; i >= 1; i--) {
        total *= i;
    }
    return console.log(`El factorial de ${numero} es ${total}`);
};

factorial(1122);
