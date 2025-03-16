/* Classes */

class Reactangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area() {
        const area = this.width * this.height;
        return area
    }

    paint() {
        console.log(`Painting with color ${this.color}`);
    }
}

const data = new Reactangle(2, 4, "Red")
console.log(data.area());
data.paint();

/* Date Class */
const now = new Date();
console.log(now.toISOString());

/* Map Class */
const map = new Map();
map.set('name', 'Krish');
map.set('age', 20);
console.log(map.get('name'));

/* Promise Class */
/* IMP Topic */
function logName() {
    console.log("Krish");
}

setTimeout(logName, 3000);

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {
    console.log("3 Seconds have passed");
}

setTimeoutPromisified(3000).then(callback);

/* Questions */
/* Callback hell */
/* 1. logs hi after 1 second */
/* 2. logs hello after 3 second */
/* 3. logs hello there after 5 second */

function logName() {
    console.log("hi");
    function logName() {
        console.log("hello");
        function logName() {
            console.log("hello there");
        }
        setTimeout(logName, 5000);
    }
    setTimeout(logName, 3000);
}
setTimeout(logName, 1000);

/* Promisified version */
function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function logName() {
    console.log("hi");
    function logName() {
        console.log("hello");
        function logName() {
            console.log("hello there");
        }
        setTimeoutPromisified(5000).then(logName);
    }
    setTimeoutPromisified(3000).then(logName);
}
setTimeoutPromisified(1000).then(logName);