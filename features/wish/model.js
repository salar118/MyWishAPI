const mongoose = require('mongoose');

const wishSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    story: {
        type: String,
        required: true
    }
});

const Wish = mongoose.model('wish', wishSchema);

module.exports = Wish;