//library imports
var express = require('express');
var bodyParser = require('body-parser');

//local imports
var {mongoose} = require('./db/mongoose');
var {Boba} = require('./models/boba');

var app = express();
const port = 5000; // process.env.PORT 

//using middleware - now we can send json to our app
app.use(bodyParser.json());

// for resource creation
app.post('/boba', (req, res) => {
    var boba = new Boba({
        name: req.body.name,
        shop: req.body.shop,
        small: req.body.small,
        regular: req.body.regular,
        large: req.body.large
    });
    
    boba.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/boba', (req, res) => {
    Boba.find().then((boba) => {
        res.send({boba}); //send object back rather than an array
    }, (err) => {
        res.status(400).send(err);
    })
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

module.exports = {app};

