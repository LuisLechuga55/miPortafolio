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

var num = 0;

for (let index = 0; index < 16; index++) {
    num += 1;
}

console.log(num);

function division() {

    for (let index = 1; index < 17; index++) {
       
        //OPERADOR DE MODULO
        if(index % 3 === 0 && index % 5 === 0) console.log('Fizz Buzz')
        else if (index % 5 === 0) console.log('Buzz')
        //else if (index % 15 === 0) {
        else if (index % 3 === 0) console.log('fizz')
        else console.log(index)

    }
}

division()

let resultado;

for (let index = 1; index <= 16; index++) {
    
    if (index%3 == 0 && index%5 == 0) {
        resultado = "FizzBuzz";
    } else {
        if (index%3 == 0) {
            resultado = "Fizz";
        }
        else if (index%5 == 0) {
            resultado = "Buzz";
        } else {
            resultado = index;
        }
    }
    
    document.write(index, " = ", resultado, "</br>");
}

function fizzFuzz() {
    let listNumbers =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];


    for(let i = 0; i < listNumbers.length; i++) {

        let isFizz = listNumbers[i] % 3 === 0;
        let isBuzz = listNumbers[i] % 5 === 0;

        if(isFizz && isBuzz) {
            console.log(listNumbers[i],'FizzBuzz');
        } else if(isFizz) {
            console.log(listNumbers[i],'Fizz');
        } else if(isBuzz){
            console.log(listNumbers[i],'Buzz');
        }
    }
}
fizzFuzz ();
