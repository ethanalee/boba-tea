var csv = require('fast-csv');
var mongoose = require('mongoose');

var {Boba} = require('./models/boba');
 
exports.post = function (req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
     
    var authorFile = req.files.file;
 
    var authors = [];
         
    csv
     .fromString(authorFile.data.toString(), {
         //headers: true,
         ignoreEmpty: true
     })
     .on("data", function(data){
         data['_id'] = new mongoose.Types.ObjectId();
          
         authors.push(data);
     })
     .on("end", function(){
         for (var elements in authors) {
             console.log(elements.name);
         }
         Boba.create(authors, function(err, documents) {
            //if (err) throw err;
            // if (err) {
            //     return console.log(err);
            // }
         });
          
         res.send(authors.length + ' authors have been successfully uploaded.');
     });
};