const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "'Name' field cannot be blank"]
    }
})

module.exports = mongoose.model('person', PersonSchema)
