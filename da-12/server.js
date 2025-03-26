const express = require('express')
const app = express()
const port = 3000

/* function isOld(age){
    return age >= 14 ? true : false;
} */

function isOldMiddleware(req, res, next){
    return age >= 14 ? next() : res.status(411).json({
        msg: "Sorry you are not of age yet"
    });
}

app.use(isOldMiddleware); 

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.get('/ride1', (req, res) => {
    const age = req.query.age;
    /* if(isOld(age)) {
        res.json({
            msg: "You have successfully riden the ride 1"
        })
    } else {
        res.status(411).json({
            msg: "Sorry you are not of age yet"
        })
    } */
    res.json({
        msg: "You have successfully riden the ride 1"
    })
})

app.get('/ride2', (req, res) => {
    const age = req.query.age;
    /* if(isOld(age)) {
        res.json({
            msg: "You have successfully riden the ride 2"
        })
    } else {
        res.status(411).json({
            msg: "Sorry you are not of age yet"
        })
    } */
    res.json({
        msg: "You have successfully riden the ride 2"
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})