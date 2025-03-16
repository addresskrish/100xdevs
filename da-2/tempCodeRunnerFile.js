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