const mongoose = require('mongoose');
// Schema
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    previewText: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    thumbnailImage: {
        type: String,
        default: "https://advisorretire.com/wp-content/plugins/pl-platform/engine/ui/images/default-landscape.png"
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    views: [{
        person: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    }]
}, { timestamps: true });
const Blog = mongoose.model("blogs", blogSchema)
module.exports = Blog