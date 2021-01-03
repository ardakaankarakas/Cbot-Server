const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: {
        type: String,
        required: [true, '{PATH} is necessary.'],
    },
    author: {
        type: String,
        required: [true, '{PATH} is necessary.'],
    },
    createdAt: { // otomatik oluşturma tarihini atar
        type: Date,
        default: new Date(),
        required: [true, '{PATH} is necessary.'],
    }
});

module.exports = mongoose.model('Books', BookSchema);