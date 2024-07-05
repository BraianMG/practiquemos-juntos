// CASO 1
/*function caseOne(){
    console.log("~~ Case 1 ~~");

    // Con order="ASC" hago que el argumento order sea opcional y en el caso que no se indique por defecto será "ASC"
    function customSort(input, order="ASC"){

        function ascending (a,b) { return a-b};
        const descending = (a,b) => { return b-a};

        let result;

        // La función sort muta la variable y devuelve una referencia a la variable original.
        if (order === "ASC"){
            // [...input]: creo un nuevo array con los elementos que contiene el array input
            result = [...input].sort(ascending);
        } else if (order === "DESC"){
            result = [...input].sort(descending);
        } else{
            result = 'Invalid order. It can be "ASC" or "DESC"';
        }
        return result;
    }

    const input = [456, 234, 78, 2, 8, 90, -12, 4, -23, 0, -100, 50];

    const outputAsc = customSort(input);
    const outputDesc = customSort(input, "DESC"); // Se pone el segundo parámetro porque quiero que sea "DESC" y por defecto será "ASC"


    console.log('input', input);
    console.log('outputAsc', outputAsc);
    console.log('outputDesc', outputDesc);
}
caseOne();*/

// CASO 2
/*function caseTwo(){
    console.log("~~ Case 2 ~~");

    function customSort(entry, order="ASC"){
        let result;

        if(order === "ASC"){
            result = [...entry].sort();
        } else if(order === "DESC"){
            result = [...entry].sort().reverse();
        } else {
            result = 'Invalid order. It can be "ASC" or "DESC"';
        }
        return result;
    }

    const entry = ['asd', '123', '0a24', '1', '!', '_hola', '-6d', 'ASD', '??', 'algo', '?', 'algo más', 'papá', 'piso', 'papa', 'pelota'];

    const orderAscending = customSort(entry);
    const orderDescending = customSort(entry, "DESC");

    console.log('entry', entry);
    console.log('orderAscending', orderAscending);
    console.log('orderDescending', orderDescending);
};
caseTwo();*/





// CASO 3
/*const entryObj = [
    { name: 'Antonio', age: 30, description: '' },
    { name: 'David', age: 24, description: 'asd' },
    { name: 'Fernando', age: undefined, description: 'no tenemos la edad' },
    { name: 'Monica', age: 45, description: '45' },
    { name: 'Cristina', age: 28, description: null },
];*/

/*function forName(a,b){
    if (a.name > b.name){
        return 1;
    }
    if (a.name < b.name){
        return -1;
    }
    return 0;
}

console.log("Name",entryObj);
console.log("Name Asc",entryObj.sort(forName));
console.log("Name Des",entryObj.sort(forName).reverse());*/


/*function forAge (a, b) {
    if (a.age > b.age){
        return 1;
    }
    if (a.age < b.age){
        return -1;
    }
    return 0;
} ;

console.log('entryObj', entryObj);
console.log("Asc",entryObj.sort(forAge));
console.log("Des",entryObj.sort(forAge).reverse());*/


/*function forDescription (a, b) {
    if (a.description > b.description){
        return 1;
    }
    if (a.description < b.description){
        return -1;
    }
    return 0;
} ;
console.log("Description",entryObj.sort(forDescription));*/


function sortByKey(array, key, order) {
    return array.sort((a, b) => {
        // Manejo de valores nulos, undefined y strings vacíos
        let aValue = a[key];
        let bValue = b[key];

        // Tratamiento de valores nulos, undefined y strings vacíos
        if (aValue === null || aValue === undefined || aValue === '') {
            aValue = Infinity; // Colocar al final en orden ascendente
        }
        if (bValue === null || bValue === undefined || bValue === '') {
            bValue = Infinity; // Colocar al final en orden ascendente
        }

        // Orden ascendente o descendente
        if (order === 'asc') {
            if (aValue < bValue) return -1;
            if (aValue > bValue) return 1;
            return 0;
        } else if (order === 'desc') {
            if (aValue > bValue) return -1;
            if (aValue < bValue) return 1;
            return 0;
        }
    });
}

// Ejemplo de uso:
let people = [
    { name: 'Antonio', age: 30, description: '' },
    { name: 'David', age: 24, description: 'asd' },
    { name: 'Fernando', age: undefined, description: 'no tenemos la edad' },
    { name: 'Monica', age: 45, description: '45' },
    { name: 'Cristina', age: 28, description: null },
];

console.log("Asc Age", sortByKey(people, 'age', 'asc'));
console.log("Desc Age", sortByKey(people, 'age', 'desc'));

console.log("Asc Description", sortByKey(people, 'description', 'asc'));
console.log("Desc Description", sortByKey(people, 'description', 'desc'));