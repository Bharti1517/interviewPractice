var x = 5;
let y = 6;
const z = 7;

function fun() {
    x = 15;
    y = 16;
}

function fun1(x, y) {
    x = 15;
    y = 16;
}
fun(19, 20);

console.log(x, y, z);