// Acquiring Express and making 'app' handler function
const express = require("express")
const router = express.Router()

const user = require("../Models/userModel.js")

router.get("/", (req, res) => {
    return res.render("blogs", {
        email: req.userData
    })
})

router.get("/profile/:id",async (req, res) => {
    const profile =await user.findOne({
        email: req.params.id
    })
    return res.render("profile",{
        user: profile
    })
})
module.exports = router
