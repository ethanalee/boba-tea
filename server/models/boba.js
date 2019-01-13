var mongoose = require('mongoose');

var bobaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    },
    shop: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    },
    small: {
        type: String,
        required: true
    },
    regular: {
        type: String,
        required: true
    },
    large: {
        type: String,
        required: true
    },
    created: { 
        type: Date,
        default: Date.now
    }
});

var Boba = mongoose.model('Boba', bobaSchema);

module.exports = {Boba};