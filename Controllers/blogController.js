const Blog = require("../Models/blogModel.js")
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
        })
        return res.redirect(`/blogs/profile/${req.userData.email}`)
    } catch (err) {
        req.flash('error', 'Internal Server Error')
        return res.redirect(`/blogs/create`)
    }
}

module.exports = {
    handleBlogCreation
}