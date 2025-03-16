const fs = require("fs");

/* function setTimeoutPromisified(ms) {
    return new Promise(resolve => (resolve, ms));
} */

function readFileAsync() {
    return new Promise(function(resolve, reject) {
        fs.readFile("a.txt", "utf-8", function(err, data) {
            if (err) {
                reject("File not found");
            } else {
                resolve(data);
            }
        })
    })
}