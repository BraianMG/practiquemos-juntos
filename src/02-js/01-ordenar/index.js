// CASO 1
function caseOne(){
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
caseOne();

// CASO 2
function caseTwo(){
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
caseTwo();

// CASO 3
function caseThree(){
    console.log("~~ Case 3 ~~");

    function sortByKey(array, key, order) {
        // 1. extraer los null y los undefined
        // 2. ordenar el array sin los null y los undefined
        // 3. al array ordenado agregarle al final los null y los undefined

        const withInvalidValue = [];
        const withValidValue = [];

        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            
            if (element[key] === null || element[key] === undefined) {
                withInvalidValue.push(element);
            } else {
                withValidValue.push(element);
            }
        }

        withValidValue.sort((a, b) => {
            // Manejo de valores nulos, undefined y strings vacíos
            let aValue = a[key];
            let bValue = b[key];

            // Orden ascendente o descendente
            if (order.toLowerCase() === 'asc') {
                if (aValue < bValue) return -1;
                if (aValue > bValue) return 1;
                return 0;
            } else if (order.toLowerCase() === 'desc') {
                if (aValue > bValue) return -1;
                if (aValue < bValue) return 1;
                return 0;
            }
        });

        if (order.toLowerCase() === 'asc'){
            return withValidValue.concat(withInvalidValue);
        } else if (order.toLowerCase() === 'desc'){
            return withInvalidValue.reverse().concat(withValidValue);
        }
    }


    const entry = [
        { name: 'Antonio', age: 30, description: '' },
        { name: 'David', age: 24, description: 'asd' },
        { name: 'Fernando', age: undefined, description: 'no tenemos la edad' },
        { name: 'Monica', age: 45, description: '45' },
        { name: 'Cristina', age: 28, description: null },
        { name: 'Eva', age: 16, description: 'muy alta' },
        { name: 'Juan', age: 10, description: 'se enoja fácilmente' },
        { name: 'Tom', age: 80, description: 'muy amable' },
        { name: 'Ana', age: 36, description: undefined },
        { name: 'Luz', age: 90, description: undefined }
    ];

    const orderByNameAsc = sortByKey(entry, 'name', 'asc');
    const orderByNameDesc = sortByKey(entry, 'name', 'desc');

    const orderByAgeAsc = sortByKey(entry, 'age', 'asc');
    const orderByAgeDesc = sortByKey(entry, 'age', 'desc');

    const orderByDescriptionAsc = sortByKey(entry, 'description', 'asc');
    const orderByDescriptionDesc = sortByKey(entry, 'description', 'desc');

    console.log('entry', entry);
    console.log('orderByNameAsc', orderByNameAsc);
    console.log('orderByNameDesc', orderByNameDesc);
    
    console.log('orderByAgeAsc', orderByAgeAsc);
    console.log('orderByAgeDesc', orderByAgeDesc);
    
    console.log('orderByDescriptionAsc', orderByDescriptionAsc);
    console.log('orderByDescriptionDesc', orderByDescriptionDesc);
}
caseThree();