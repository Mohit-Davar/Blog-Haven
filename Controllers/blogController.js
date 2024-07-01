const Blog = require("../Models/blogModel.js")
const user = require("../Models/userModel.js")

// function to create new blog
const handleBlogCreation = async (req, res) => {
    const body = req.body
    try {
        const result = await Blog.create({
            title: body.title,
            previewText: body.thumbnail,
            category: body.category,
            body: body.blog,
            thumbnailImage: `/Uploads/${req.file.filename}`,
            createdBy: req.userData.id
        })
        return res.redirect(`/blogs/profile/${req.userData.email}`)
    } catch (err) {
        console.log(err)
        req.flash('error', 'Internal Server Error')
        return res.redirect(`/blogs`)
    }
}
// function to display required profile
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
            createdBy: profile._id
        })
        return res.render("profile", {
            ProfileUser: profile,
            blogs: allBlogs
        })
    } catch (err) {
        req.flash('error', 'Internal Server Error')
        return res.redirect(`/blogs`)
    }
}
// function to display all blogs on blog page
const handleAllBlogs = async (req, res) => {
    const query = req.query.query
    let allBlogs = null
    if (!query) {
        allBlogs = await Blog.find().populate("createdBy")
    } else {
        allBlogs = await Blog.find({ $text: { $search: `${query}` } }).populate("createdBy")
    }
    return res.render("blogs", {
        loggedInUser: req.userData,
        blogs: allBlogs,
    })
}
//function to open blog
const handleBlog = async (req, res) => {
    const blogId = req.params.id
    try {
        const blog = await Blog.findOne({
            _id: blogId
        }).populate("createdBy")
        if(!blog){
            req.flash('error', 'No Such Profile Exsist!')
            return res.redirect(`/blogs`)
        }
        return res.render("blog", {
            Viewblog: blog
        })
    } catch (err) {
        req.flash('error', 'Internal Server Error')
        return res.redirect(`/blogs`)
    }

}
module.exports = {
    handleBlogCreation,
    handleProfile,
    handleAllBlogs,
    handleBlog
}