function calcOne(){
    const entryNumbers = [456, 234, 78, 2, 8, 90, -12, 4, -23, 0, -100, 50];

    let sum = entryNumbers.reduce((total, num) => total + num);
    let average = sum / entryNumbers.length;

    console.log('La sumatoria de todos los valores es de',sum, 'y su pormedio es de', average);
}
calcOne();

function calcTwo(){
    const entryStrings = ['asd', '123', '0a24', '1', '!', '_hola', '-6d', 'ASD', "??"];

    let concatenation = entryStrings.reduce((total, word) => total + word);
    let elements = entryStrings.length;

    console.log(`Concatenación de todos los elementos: ${concatenation}, cantidad de elementos que posee el array:`, elements);
}
calcTwo();