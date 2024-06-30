const mongoose = require('mongoose');

// Schema
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: "https://advisorretire.com/wp-content/plugins/pl-platform/engine/ui/images/default-landscape.png"
    },
    createdBy: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, { timestamps: true });
const Blog = mongoose.model("blogs", blogSchema)
module.exports = Blog