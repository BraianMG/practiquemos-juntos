function caseOne(){
    const entryNumbers = [5, -12, 4, -23, 0, -100, 50, 456, 234, 78, 2, 8, 90];

    const result = entryNumbers.find((num) => num > 100);

    console.log('El primer valor mayor a 100 es:',result);
}
caseOne();

function caseTwo(){
    const entryString = ['asd', '123', '0a24', '1', '!', '_hola', '-6d', 'ASD', "??"];

    const result = entryString.find((element) => element.length > 3);

    console.log('El primer valor de longitud superior a 3 es:',result);
}
caseTwo();