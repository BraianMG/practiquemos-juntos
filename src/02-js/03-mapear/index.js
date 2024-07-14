function rename(persons,newKeys) {
    return persons.map(obj => {
        let newObje = {}; //Para cada objeto en el array, crea un nuevo objeto
        for(let key in obj){ //Itera sobre cada clave del objeto original
            let keyRevision = newKeys[key] || key; //Si la clave está en `newKeys`, usa la nueva clave; de lo contrario, usa la clave original
            newObje[keyRevision] = obj[key]; //Asigna el valor del objeto original a la nueva clave en `newObj`
        }
        return newObje;
    });
};

const persons = [
    { first_name: 'Antonio', lastName: "Aparicio", _age: 30, Description_: '' },
    { first_name: 'David', lastName: "Alba", _age: 24, Description_: 'asd' },
    { first_name: 'Fernando', lastName: "Peña", _age: undefined, Description_: 'no tenemos la edad' },
    { first_name: 'Monica', lastName: "Martin", _age: 45, Description_: '45' },
    { first_name: 'Cristina', lastName: "Zerpa", _age: 28, Description_: null },
];

const newKeys = {
    first_name: 'nombre',
    lastName: 'apellido',
    _age: 'edad',
    Description_: 'descripcion'
};

const renamedArray = rename(persons, newKeys);
console.log(renamedArray);