const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Carname: {
        type: String,
        required: true

    },
    Modeltype: {
        type: String,
        required: true
    },
    Modelyear: {
        type: Number,
        required: true
    },
    Lastservice: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('User', UserSchema)