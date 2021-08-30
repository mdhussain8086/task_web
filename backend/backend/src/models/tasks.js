const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
    }
}, { timestamps: true});

module.exports = mongoose.model('Task', taskSchema);