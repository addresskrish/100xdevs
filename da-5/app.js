function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms) )
}

function logName() {
    console.log("1 second has passed")
}

setTimeoutPromisified(1000).then(logName);

/* Solutions of Examples */
function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms) )
}

setTimeoutPromisified(1000).then(function() {
    console.log("hi");
    setTimeoutPromisified(3000).then(function() {
        console.log("hello");
        setTimeoutPromisified(5000).then(function() {
            console.log("hello there");
        });
    });
});

/* Async await syntax */
function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms) )
}

async function solve() {
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("hello");
    await setTimeoutPromisified(5000);
    console.log("hello there");
}

solve(); 

/* Defening own promise function */
const fs = require("fs");

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function readFileAsync() {
    return new Promise(function(resolve, reject) {
        fs.readFile("a.txt", "utf-8", function(err, data) {
            if (err) {
                reject("File not found");
            } else {
                resolve(data);
            }
        });
    });
}

readFileAsync()
    .then(data => console.log("File content:", data))
    .catch(err => console.error("Error:", err));