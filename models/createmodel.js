const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        required: true
    },
})

const create = mongoose.model('Create', registerSchema);
module.exports = create;