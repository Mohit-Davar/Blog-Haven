const Message = require("../Models/messageModel.js")
const handleMessage = async (req, res) => {
    const body = req.body

    await Message.create({
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
    })

    return res.redirect("/")
}

module.exports = {
    handleMessage
}