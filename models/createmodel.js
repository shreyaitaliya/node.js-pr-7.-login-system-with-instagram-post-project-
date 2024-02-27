const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'register'
    },
    image: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        required: true
    },
    likes: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'register' }
    ],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'register'
    }
})

const create = mongoose.model('Create', registerSchema);
module.exports = create;