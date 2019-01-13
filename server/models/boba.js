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
        type: Number,
        required: true
    },
    regular: {
        type: Number,
        required: true
    },
    large: {
        type: Number,
        required: true
    },
    created: { 
        type: Date,
        default: Date.now
    }
});

var Boba = mongoose.model('Boba', bobaSchema);

module.exports = {Boba};