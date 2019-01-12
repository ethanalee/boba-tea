var mongoose = require('mongoose');

var Boba = mongoose.model('Boba', {
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
        type: Number
    },
    regular: {
        type: Number
    },
    large: {
        type: Number
    }
});

module.exports = {Boba}