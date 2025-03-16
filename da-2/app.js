// Assignment //

/* Variable */

/* Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log */

let color = 'black';
let height = 6;
let favFood = 'Thepla';

console.log(color);
console.log(height);
console.log(favFood);

/* Data types */

let number = 42;             // Number
let string = "Hello World";  // String
let isActive = false;        // Boolean
let numbers = [1, 2, 3];     // Array

/* Operators */

let sum = 10 + 5;
let isEqual = (10 === 10);
let idTrue = (true && false);

/* Functions */

function fun(name) {
    console.log("My name is " + name);
}

fun('Om')

/* Write a function sum that finds the sum of two numbers. 
Side quest - Try passing in a string instead of a number and see what happens? */

function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3))

/* Write a function called canVote that returns true or false if the age of a user is > 18 */

function canVote(age) {
    if(age > 18) {
        return 1;
    } else {
        return 0;
    }
}

console.log(canVote(19));

/* IF/Else */

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

/* Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd. */

function num(num) {
    if(num % 2 == 0) {
        return console.log("Even");
    } else {
        return console.log("Odd");
    }
}

let no = num(5);

/* Loops */

for(let i = 0; i < 5; i++) {
    console.log(i);
}

let x = 0;
while(x < 5) {
    console.log(x);
    x++;
}

/* Write a function called sum that finds the sum from 1 to a number */

function sum(num) {
    let no = 0;
    for(let i = 0; i <= num; i++) {
        no = no + i;
    }

    return no;
}

console.log(sum(10));

/* Comlex types */

/* Objects */

let user = {
    name: "Om",
    age: "19"
}

console.log("Om age is: " + user.age);

/* Write a function that takes a user as an input and greets them with their name and age */

let user1 = {
    name: "Om",
    age: "19"
}

console.log("Hii my name is " + user1.name + "and" +" my age is " + user1.age );

/* Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21) + Also tell the user if they are legal to vote or not */


function newObz(obz) {
    if(obz.age > 18) {
        console.log("Hii " + obz.greet + " " + obz.name + " , your age is " +  obz.age + " , you are legal to vote");
    } else {
        console.log("Hii " + obz.greet + " " + obz.name + " , your age is " +  obz.age + " , you are not legal to vote");
    }
}

let ob = {
    greet: "Mr",
    name: "Om",
    age: 19
}

newObz(ob);

/* Array */
const eUsers = ["harkirat", "raman", "diljeet"];
const totalUsers = eUsers.length;
const firstUser = eUsers[0];

/* Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS */

function newArr(arr) {
    let even = [];
    let x = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            even[x] = arr[i]
            x++;
        }
    }
    return even;
}

let arr = [1, 2, 3, 4];
console.log(newArr(arr));

/* Array of Objects */

const users = [{
    name: "Om",
    age: 19
},
{
    name: "Adi",
    age: 20
}]

const use = users[0]
console.log(use.name);

/* Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old */

function aUsers(arr) {
    for(let i = 0; i < userss.length; i++) {
        if(arr[i].age > 18) {
            return arr[i];
        }
    }
    return null;
}

const userss = [{
    name: "Om",
    age: 18
},
{
    name: "Adi",
    age: 20
}]

console.log(aUsers(userss));

/* Object of Objects */
const user2 = {
	name: "harkirat",
	age: 19,
	address: {
		city: "Delhi",
		country: "India",
		address: "1122 DLF"
	}
}

const city = user2.address.city;

/* Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male */

function bUsers(arr) {
    for(let i = 0; i < usersss.length; i++) {
        if(arr[i].age > 18 && arr[i].gender == "male") {
            return arr[i];
        }
    }
    return null;
}

const usersss = [{
    name: "Om",
    age: 20,
    gender: "male"
},
{
    name: "Nikita",
    age: 20,
    gender: "female"
}]

console.log(bUsers(usersss));