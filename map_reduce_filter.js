// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce 
// refer for reduce only

let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
var result = names.reduce((acc, curValue) => {
    // return acc + ' --- ' + curValue
    if (curValue in acc) {
        acc[curValue]++;
        console.log(name);
    } else {
        acc[curValue] = 1
    }
    return acc;
});

console.log(result);