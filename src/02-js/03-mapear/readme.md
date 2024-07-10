# Mapear

Para la siguiente entrada:
```js
// Valor de entrada
const entrada = [
  { first_name: 'Antonio', lastName: "Aparicio", _age: 30, Description_: '' },
  { first_name: 'David', lastName: "Alba", _age: 24, Description_: 'asd' },
  { first_name: 'Fernando', lastName: "Peña", _age: undefined, Description_: 'no tenemos la edad' },
  { first_name: 'Monica', lastName: "Martin", _age: 45, Description_: '45' },
  { first_name: 'Cristina', lastName: "Zerpa", _age: 28, Description_: null },
];
```

Escribir una funcion que mapee la entrada y la devuelva de la siguiente forma:
```js
// Salida
const entrada = [
  { nombre: 'Antonio', apellido: "Aparicio", edad: 30, descripcion: '' },
  { nombre: 'David', apellido: "Alba", edad: 24, descripcion: 'asd' },
  { nombre: 'Fernando', apellido: "Peña", edad: undefined, descripcion: 'no tenemos la edad' },
  { nombre: 'Monica', apellido: "Martin", edad: 45, descripcion: '45' },
  { nombre: 'Cristina', apellido: "Zerpa", edad: 28, descripcion: null },
];
```