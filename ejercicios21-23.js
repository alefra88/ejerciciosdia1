// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const arr = [2, 3, 4, 5];
const arrPow = (arr) => console.log((newArr = arr.map((i) => Math.pow(i, 2))));
arrPow(arr);
// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const numTopLow = (arr) => {
    const min = Math.min(...arr),
        max = Math.max(...arr);
    console.info([min, max]);
};
numTopLow(arr);
// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
const arrParImp = (arr)=>{
  let par=[]
  let impar=[]
  for (num of arr){
    if (num%2===0){
      par.push(num)
    }
    if (num%2===1){
      impar.push(num)
    }
  }
  return console.info({par,impar})
}
arrParImp(arr)