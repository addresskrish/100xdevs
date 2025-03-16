/* var name = "Krish";
console.log(name);

const one = document.getElementById("one");
const two = document.getElementById("two"); */

/* 5 main functions */
/* function addTodo() {
    const inputEl = document.querySelector("input");
    const value = inputEl.value;
    two.innerHTML = value;
} */

/* setIntervals */
/* let ctr = 0;
function callBack() {
    one.innerHTML = ctr
    ctr++;
} 

setInterval(callBack, 1000); */

/* Finale Todo app */
function addTodo() {
    const inputEl = document.querySelector("input");
    const value = inputEl.value;

    if(value === "") {
        alert("Please enter some text in input area");
    } else {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `<div id="new"><div>${value}</div><button onclick="deleteTodo()">Delete</button>`;

        document.querySelector("body").appendChild(newDiv);
    }
}

function deleteTodo() {
    const element = document.querySelector("#new");
    const parentElement = element.parentNode;
    parentElement.removeChild(element);
}