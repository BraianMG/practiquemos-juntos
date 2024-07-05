const entrada = [
    { nombre: 'Antonio', edad: 30, descripcion: '' },
    { nombre: 'David', edad: 24, descripcion: 'asd' },
    { nombre: 'Fernando', edad: undefined, descripcion: 'no tenemos la edad' },
    { nombre: 'Monica', edad: 45, descripcion: '45' },
    { nombre: 'Cristina', edad: 28, descripcion: null },
  ];


function filtroEdad(entrada, menor, mayor){
    return entrada.filter(persona => {
        if (menor){
            return persona.edad > menor;
        } else if (mayor){
            return persona.edad < mayor;
        }
    })
}
console.log(filtroEdad(entrada,0,21));
console.log(filtroEdad(entrada,25));










// function mayores(entrada){
//     if(entrada.edad > 25){
//         console.log('Los mayores de 25 son' + entrada.nombre);
//     }
// }

// let filtro = entrada.filter((entrada) => entrada.edad > 25);
// console.log('Los mayores de 25 son' + filtro);