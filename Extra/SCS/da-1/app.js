/* Express use for server-side */
/* End of day Express convert the code into HTTP */
/* HTTP use for create server */
/* Routing is simple called URl details */

/* 1. node vs express - node is the main thing express ke code se hum server ka code likh pate and server kaisa react karega wo bhi express ke help se likhre hai */

/* 2. what is express js - pakage, routing */

/* 3. why express js - http is difficult to use, express makes this easier */

/* 4. routing - routes bannne ke process ko hum kahte hai routing 
   ex : /profile
        /home
        /contacts
        /profile
*/

/* 5. middleware - ek aisa function hota hai jo har route se pahle chalta hai, iska matlab saare routes mein koi bhi chale usse pahle middleware chalta hai and usmein likha code phle execute hota hai 

creare app.use()
In use function we create another function with 3 parameters called(req, res, next)

req use the users data { like if i write x.com so it reqest for me x.com data of my account } 

res use the server data { x.com respose my data to me }

next move control next 

*/

/* 6. route parameters - use to create dynamic routes examole username */

/* 7. template engine - ejs is html but with more power 

    setup ejs:

    -ejs install: npm i ejs
    -configure ejs: app.js("view engine", "ejs");
    -create views folder
    -create ejs file
    -send ki jagah render karo
    -render kar te waqt sure app views folder ke andar  waali hi koi file kaa naam likhe, aur ussme ejs file add na kare

    more template engines - pug, handlebars, ejs
    ejs is similar to the html
*/

/* 8. static files - images, staysheets, frotend js

    for setup for static file
    create a folder called public
    create three folder inside it, images, stylesheets, js
    configure the express static
    understand the path
*/

const express = require('express')
const app = express()

app.set("view engine", "ejs");

app.use(express.static('./public'));

/* app.use(function(req, res, next){
    next();
}); */

app.get('/', function (req, res) {
  res.render('index', {age:12});
})

app.get('/about', function (req, res) {
  res.render('about');
})

app.get('/error', function (req, res) {
  throw Error("Somthing went wrong");
})

/* app.get('/profile', function (req, res) {
  res.send('Hello from profile')
}) */

/* username is params */
/* app.get('/profile/:username', function (req, res) {
  res.send(`Hello from ${req.params.username}`)
}) */

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })

app.listen(3000)