// Acquiring Express and making 'app' handler function
const express = require("express")
const router = express.Router()

const { handleBlogCreation, handleProfile } = require("../Controllers/blogController.js")
const { handleProfileEdit } = require("../Controllers/userContoller.js")
const upload = require("../Services/multer.js")
const blog = require("../Models/blogModel.js")

router.get("/", async (req, res) => {
    const allBlogs = await blog.find()
    return res.render("blogs", {
        loggedInUser: req.userData,
        blogs: allBlogs,
    })
})

router.get("/profile/:id", handleProfile)

router.route("/create")
    .get((req, res) => {
        return res.render("createform")
    })
    .post(upload.single("file-upload"), handleBlogCreation)

router.route("/edit")
    .get((req, res) => {
        return res.render("editform")
    })
    .post(upload.single("file-upload"), handleProfileEdit)
module.exports = router
