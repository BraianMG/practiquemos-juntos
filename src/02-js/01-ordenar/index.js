// CASO 1
/*const entrada = [456, 234, 78, 2, 8, 90, -12, 4, -23, 0, -100, 50];
function ordenarMen(a,b){ return a-b; }
console.log(entrada.sort(ordenarMen));

function ordenarMay(a,b){ return b-a; }
console.log(entrada.sort(ordenarMay));*/


// CASO 2
/*const entrada = ['asd', '123', '0a24', '1', '!', '_hola', '-6d', 'ASD', "??"];
console.log(entrada.sort());
console.log(entrada.reverse());*/


// CASO 3
/*const entrada = [
    { nombre: 'Antonio', edad: 30, descripcion: '' },
    { nombre: 'David', edad: 24, descripcion: 'asd' },
    { nombre: 'Fernando', edad: undefined, descripcion: 'no tenemos la edad' },
    { nombre: 'Monica', edad: 45, descripcion: '45' },
    { nombre: 'Cristina', edad: 28, descripcion: null },
];

function porNombre(a,b){
    if (a.nombre > b.nombre){
        return 1;
    }
    if (a.nombre < b.nombre){
        return -1;
    }
    return 0;
}
console.log(entrada.sort(porNombre));


function porEdad (a, b) {
    if (a.edad > b.edad){
        return 1;
    }
    if (a.edad < b.edad){
        return -1;
    }
    return 0;
} ;
console.log(entrada.sort(porEdad));*/

// No estoy segura
/*function porDes (a, b) {
    if (a.descripcion > b.descripcion){
        return 1;
    }
    if (a.descripcion < b.descripcion){
        return -1;
    }
    return 0;
} ;
console.log(entrada.sort(porDes));*/