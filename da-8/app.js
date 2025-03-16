/* function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3));
console.log(__dirname);

const path = require("path");
console.log(path,path.join(__dirname, "app.js")); */

/* Assinment */

/* Create a command line interface that lets the user specify a file path and the nodejs process counts the number of words inside it. */

/* Node is CLI */

const fs = require("fs");

function main(fileName) {
    fs.readFile(fileName, "utf-8", function(err, data) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i] === " ") {
                total++
            }
        }
        console.log(total + 1);
    })
}

main("note.txt")