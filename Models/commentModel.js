const mongoose = require("mongoose")
//Schema
const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "blogs"
    }
}, { timestamps: true })
const comment = mongoose.model("comments", commentSchema)
module.exports = comment