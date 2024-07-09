const entry = [
    { name: 'Antonio', age: 30, description: '' },
    { name: 'David', age: 24, description: 'asd' },
    { name: 'Fernando', age: undefined, description: 'no tenemos la edad' },
    { name: 'Monica', age: 45, description: '45' },
    { name: 'Cristina', age: 28, description: null }
  ];

// - Devolver los menores de 21
function minorAge(persons){
    let minorAge = persons.filter( person => person.age < 21);

    if(minorAge.length > 0){
        console.log('Menores de 21: ',[...minorAge]);
    } else {
        console.log('No hay personas menores de 21 años');
    }
};
minorAge(entry);

// Devolver los mayores de 25
function elderlyAge(persons){
    let elderlyAge = persons.filter( person => person.age > 25);

    if(elderlyAge.length > 0){
        console.log('Mayores de 25: ', elderlyAge);
    } else {
        console.log('No hay personas menores de 25 años');
    }
};
elderlyAge(entry);

// Devolver los que en el nombre contengan la letra "C"
function containNameC(persons){
    return persons.filter( person => person.name.includes('C') || person.name.includes('c'))
};
const personsContainC = containNameC(entry);
console.log('Nombres que contienen la letra "C": ', personsContainC);

// Devolver los nombres de los que tengan la edad definida
function definedAge(persons){
    return persons
        .filter( person => person.age !== undefined)
        .map(person => person.name);
};
const personsAgeDefined = definedAge(entry);
console.log('Nombres con la edad definida: ', personsAgeDefined);

// Devolver los nombres de los que tengan una descripción
function containDescription(persons){
    return persons
        .filter( person => person.description !== null && person.description !== '')
        .map(person => person.name);
};
const personsDescriptionsDefined = containDescription(entry);
console.log('Nombres de los que tengan una descripción: ', personsDescriptionsDefined);
