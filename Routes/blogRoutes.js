// Acquiring Express and making 'app' handler function
const express = require("express")
const router = express.Router()

const { handleBlogCreation, handleProfile, handleAllBlogs, handleBlog } = require("../Controllers/blogController.js")
const { handleProfileEdit } = require("../Controllers/userContoller.js")
const upload = require("../Services/multer.js")

router.get("/", handleAllBlogs)

router.get("/profile/:id", handleProfile)

router.get("/blog/:id", handleBlog)

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
