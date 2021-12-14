
const { obtenerUsuariosAsync } = require('./usuarios/usuarios');

console.log('Inicio de programa');
console.time('inicio');

obtenerUsuariosAsync(1, (usuario) => {
    console.log('Usuario 1: ', usuario);
});

obtenerUsuariosAsync(2, (usuario) => {
    console.log('Usuario 2: ', usuario);
});

console.log('Fin de programa');
console.timeEnd('inicio');