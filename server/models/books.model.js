const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    bookTitle: { type: String },
    bookAuthor: { type: String },
    genre: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('Books', BookSchema);

