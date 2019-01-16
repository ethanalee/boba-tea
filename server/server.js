//library imports
var express = require('express');
var bodyParser = require('body-parser');
var Fuse = require('fuse.js');
var fileUpload = require('express-fileupload');


//local imports
var {mongoose} = require('./db/mongoose');
var {Boba} = require('./models/boba');
var template = require('./template.js');

var app = express();
const port = process.env.PORT || 5000; // process.env.PORT 

//using middleware - now we can send json to our app
app.use(bodyParser.json());
app.use(fileUpload());

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

app.get('/upload', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.get('/template', template.get);

var upload = require('./upload.js');
app.post('/upload', upload.post);

var path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/search', (req, res) => {
    var search = req.query.q;
    Boba.find({}).then((boba) => {
        // var options = {
        //     keys: ['name'],
        //     id: 'name', // for debugging
            
        //   }
          var options = {
            keys: [{
              name: 'name',
              weight: 1.0
            }],
            threshold: 0.3,
          };
        var fuse = new Fuse(boba, options);
    
        var result = fuse.search(search);
        console.log(result);
       
        res.send(result);
    }, (err) => {
        res.status(400).send(err);
    });
});

module.exports = {app};

