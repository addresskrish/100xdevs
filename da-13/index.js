const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const port = 3000
const JWT_SECRET = "USER_APP";

app.use(express.json());

function generateToken() {
  let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let token = "";
  for(let i = 0; i < 32; i++){
    token += options[Math.floor(Math.random() * options.length)];
  }
  return token;
}

const users = []

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password

    users.push({
      username,
      password
    })
    res.send({
      message: "You have signed up"
    })
})

app.post('/signin', (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const user = users.find(user => user.username === username && user.password === password);

    if(user){
      /* const token = generateToken();
      user.token = token;
      res.send({
        token
      }) */
      const token = jwt.sign({
        username: user.username
      }, JWT_SECRET);
      user.token = token;
      res.send({
        token
      })
      console.log(users);
    } else{
      res.status(403).send({
        message: "Invalid username or password"
      })
    }
})

app.post('/me', (req, res) => {
  const token = req.headers.authorization;
  const userDetails = jwt.verify(token, JWT_SECRET);

  user = users.find(user => user.token === token)

  if(user){
    res.send({
      username: user.username
    })
  } else {
    res.status(403).send({
      message: "Unauthorized"
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})