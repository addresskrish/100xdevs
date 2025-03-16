const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs")

app.use(express.static('./'));

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})