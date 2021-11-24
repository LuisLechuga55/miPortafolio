'use strict'

console.log('Hola mundo, desde el portfolio');

/* 

MULTIPLICAR 2 NUMEROS, SIN USAR EL SIMBOLO 

multiply (2, 6)
OUTPUT = 12

*/

console.log("-----------------");


const multi = (a, b) => {
    let result = 0
    while (b > 0) {
        result += a
        b--
    }
    return result
}

console.log(multi(4,4));


console.log("-----------------");


function multiplicacion(n1,n2){
    let suma= 0;
    for (let i=1; i<= n2; i++){
        suma += n1 ;
    }
    return `La respuesta es ${suma}`
}
console.log(multiplicacion(5, 7));


console.log("-----------------");
