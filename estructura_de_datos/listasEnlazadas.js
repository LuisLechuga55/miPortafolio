'use strict'


const arreglo = ['a', 'b', 'c'];

console.log(arreglo[1]);

const list = {
    head: {
        value: 6,
        next: {
            value: 10,
            next: {
                value: 12,
                next: {
                    value: 3,
                    next: null
                }
            }
        }
    }
}

console.log(list);

const list = {
    usuario1: {},
    usuario2: {},
    usuario3: {
      escuelas: {
        prepa: {
          valorDeLaPrepa: 'PREPA DIEZ'
        }
      }
    },
    usuario4: {
      escuelas: [
        'Kinder',
        'Primaria',
        {
          prepa: [
            'prepa1',
            'prepa2'
          ]
        }
      ]
    },
  }


console.log('Primer prepa ', list.usuario3.escuelas.prepa.valorDeLaPrepa);
console.log('Primer prepa ', list.usuario4.escuelas[2].prepa[1])


/*  C => CREATE
    R => READ
    U => UPDATE
    D => DELETE */