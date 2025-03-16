/* Async JS */

function sum(a, b) {
    return parseInt(a) + parseInt(b); //Typescript
}

console.log(sum("2", 3));

/* Find sum of 1 to a number */

function sumOfNum(a) {
    if (a <= 0) {
        return 0;
    } else {
        return a + sumOfNum(a - 1);
    }
}

console.log(sumOfNum(10));
console.log(sumOfNum(100));
console.log(sumOfNum(1000));

/* I/O heavy operations */
/* 1. Reading Files */
/* 2. HTTP Requests */
/* 3. Starting a Clock */

/* Example */
/*

const fs = require("fs");
const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const data = fs.readFileSync("b.txt", "utf-8");
console.log(data);

*/

/* Example */
function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function doOperation(a, b, op) {
    return op(a, b);
}

console.log(doOperation(1, 2, sum));

/* Example */

const fs = require("fs");

function read(err, data) {
    if (err) {
        console.log("This is Error");
    } else {
    console.log(data);
    }
}
const contents = fs.readFile("a.txt", "utf-8", read);
console.log(contents);

const data = fs.readFile("b.txt", "utf-8", read);
console.log(data);

console.log("Done!");

setTimeout(fs.readFile, 2000);