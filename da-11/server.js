const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const todoList = [
    { id: 1, title: "T1", todo: "Hello T1" },
    { id: 2, title: "T2", todo: "Hello T2" },
    { id: 3, title: "T3", todo: "Hello T3" }
]

app.get('/', (req, res) => {
  res.status(200).send(todoList);
})

app.post('/', (req, res) => {
    const { body } = req
    const newTodo = { id: todoList[todoList[todoList.length - 1] + 1], ...body }
    todoList.push(newTodo);
    return res.status(201).send(newTodo);
})

app.delete('/', (req, res) => {
   const { id } = req.body
   const index = todoList.findIndex(todo => todo.id === id);
   const deletedTodo = todoList.splice(index, 1)[0]; 
   return res.json({ message: "Todo deleted successfully", deletedTodo });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})