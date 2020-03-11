// ------------- CLOSURE ---------------------
function scope() {
    var msg = "hi";


    function xy() {
        console.log('xy call : ', msg);
    }
    return xy;
}
var x = scope();
// console.log('value of x : ', x);
x();


// --------------------- OBJECT WRAPPER ----------------
var abc = {
    "name": "Bharti"
};
// console.log('Object length property : ', Object.length);
//---------STRING -----------

var str = "aabcbccaaddz";
var strArray = [];

let result = [];
for (let i = 0; i < str.length; i++) {
    strArray.push(str.charAt(i));
}
strArray = strArray.sort();
// console.log(strArray);
for (let i = 0; i < str.length; i++) {
    let count = 1;
    for (let j = i + 1; j < str.length; j++)
        if (strArray[i] == strArray[j])
            count++;
        // console.log(strArray[i], count);

}
// console.log(result);

arr = [1, 1, 2, 2, 1, 2, 3, 2, 1, 4, 2, 1];
result = [...new Set(arr)];
console.log(result);

function getUnique(array) {
    var uniqueArray = [];
    for (i = 0; i < array.length; i++) {
        // console.log(i, array[i], uniqueArray.indexOf(array[i]));
        if (uniqueArray.indexOf(array[i]) === -1)
            uniqueArray.push(array[i]);
    }
    return uniqueArray;
}
// console.log(getUnique(arr)); 

arr1 = [
    [1001, 10],
    [1002, 20],
    [1001, 20],
    [1003, 20],
    [1001, 40],
    [1002, 10],
    [1004, 10]
];
arr2 = [
    ['a', 10],
    ['a', 20],
    ['b', 20],
    ['c', 20],
    ['d', 40],
    ['b', 10],
    ['c', 10]
];
var a = [];
arr1.forEach(element => {
    a.push(element[0]);
});

var b = [...new Set(a)];
// console.log(b);
for (let i = 0; i < b.length; i++) {
    let count = 0;
    var sum = 0;
    arr1.forEach(element => {
        if (element[0] == b[i]) {
            count++;
            sum = sum + element[1];
        }

    });
    // console.log(b[i], count, sum);
}
// ------------------ PRINT PRIME NO. FROM 1 to N --------------------

n = 10;
i = 1;
result = [];
var prime = function(n) {
    do {
        // console.log('value of i : ', i);
        // if (i == 1)
        //     result.push(1);
        // if (i <= 0)
        //     result.push(0);
        if (i > 1)
            if (n % i != 0)
                result.push(i);
        i++;
    } while (i <= n);
    return result;
};
console.log('Result of Prime Numbers are ', prime(10), " For value of n " + n);