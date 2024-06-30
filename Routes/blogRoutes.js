// Acquiring Express and making 'app' handler function
const express = require("express")
const router = express.Router()

const user = require("../Models/userModel.js")
const blog = require("../Models/blogModel.js")

router.get("/",async (req, res) => {
    const allBlogs = await blog.find()
    return res.render("blogs", {
        loggedInUser: req.userData,
        blogs: allBlogs, 
    })
})

router.get("/profile/:id", async (req, res) => {
    const profile = await user.findOne({
        email: req.params.id
    })
    const allBlogs = await blog.find({
        createdBy: req.params.id
    })
    return res.render("profile", {
        loggedInUser: profile,
        blogs: allBlogs
    })
})
router.get("/create", async (req, res) => {
    return res.render("createform")
})
const { handleBlogCreation } = require('../Controllers/blogController.js')
router.post("/create", handleBlogCreation)
module.exports = router
