const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    source: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    link: {
        type: String,
    }
});

module.exports = newsSchema;