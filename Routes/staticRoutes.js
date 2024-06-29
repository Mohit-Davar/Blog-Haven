// Acquiring Express 
const express = require("express")
const router = express.Router()

const {handleMessage} = require("../Controllers/messageController.js")

router.get("/", (req, res) => {
    return res.render('home')
})
router.post("/contactus", handleMessage)
//Exporting router
module.exports = router