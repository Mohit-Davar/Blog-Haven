const Blog = require("../Models/blogModel.js")
const user = require("../Models/userModel.js")

const handleBlogCreation = async (req, res) => {
    const body = req.body
    try {
        const result = await Blog.create({
            title: body.title,
            subject: body.thumbnail,
            text: body.blog,
            category: body.category,
            createdBy: req.userData.email,
            name: `${req.userData.name.firstName} ${req.userData.name.lastName}`,
            img: `/Uploads/${req.file.filename}`
        })
        return res.redirect(`/blogs/profile/${req.userData.email}`)
    } catch (err) {
        req.flash('error', 'Internal Server Error')
        return res.redirect(`/blogs`)
    }
}

const handleProfile = async (req, res) => {
    try {
        const profile = await user.findOne({
            email: req.params.id
        })
        if (!profile) {
            req.flash('error', 'No Such Profile Exsist!')
            return res.redirect(`/blogs`)
        }
        const allBlogs = await Blog.find({
            createdBy: req.params.id
        })
        return res.render("profile", {
            loggedInUser: profile,
            blogs: allBlogs
        })
    } catch (err) {
        req.flash('error', 'Internal Server Error')
        return res.redirect(`/blogs`)
    }

}
module.exports = {
    handleBlogCreation,
    handleProfile
}