const express = require('express')
const dotenv = require("dotenv").config();
const app = express()
const port = 5000

app.use('/api/contacts', require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})