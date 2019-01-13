var mongoose = require('mongoose');
const nconf = require('nconf');

nconf.argv()
.env()
.file({ file: 'keys.json' });

const user = nconf.get('mongoUser'); 
const pass = nconf.get('mongoPass'); 

// let uri = `mongodb://${user}:${pass}@${host}:${port}`; 
// if (nconf.get('mongoDatabase')) { 
//     uri = `${uri}/${nconf.get('mongoDatabase')}`; 
// } 
console.log(`mongodb://${user}:${pass}@ds155714.mlab.com:55714/boba`);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://boba:chungus1@ds155714.mlab.com:55714/boba', (err, db) => {
    if (err) { throw err;}
});

module.exports = {mongoose};