// importing user model
const user = require("../Models/userModel.js")
const { JWTGeneration } = require("../Services/userAuthentication.js")

async function handleUserSignUp(req, res) {
    const body = req.body
    try {
        const result = await user.create({
            name: {
                firstName: body.first_Name,
                lastName: body.last_Name,
            },
            email: body.email,
            password: body.password,

        })
        const token = JWTGeneration(result.toJSON())
        res.cookie("token", token)
        return res.status(201).redirect("/blogs")
    } catch (error) {
        if (error.code === 11000) { // MongoDB duplicate key error
            req.flash('error', 'Email Already Exists')
            return res.redirect(`/user/signup`)
        }
        console.log(error)
        req.flash('error', 'Internal Server Error')
        return res.redirect(`/user/signup`)
    }
}

async function handleUserSignIn(req, res) {
    const body = req.body
    try {
        const candidate = await user.findOne({
            email: body.email,
        })
        if (!candidate) {
            req.flash('error', 'Wrong Email')
            return res.redirect(`/user/login`)
        }
        const isMatch = await candidate.comparePassword(body.password)
        if (!isMatch) {
            req.flash('error', 'Wrong Password')
            return res.redirect(`/user/login`)
        }
        const token = JWTGeneration(candidate.toJSON())
        res.cookie("token", token)
        return res.redirect(`/blogs`)
    } catch (err) {
        req.flash('error', 'Internal Server Error')
        return res.redirect(`/user/login`)
    }
}

async function handleProfileEdit(req, res) {
    const body = req.body
    const loggedInUser = req.userData
    await user.findOneAndUpdate(
        {
            email: loggedInUser.email
        },
        {
            role: body.role,
            bio: body.bio,
            profileImg: `/Uploads/${req.file.filename}`
        }
    )
    return res.redirect(`/blogs/profile/${loggedInUser.email}`)
}
module.exports = {
    handleUserSignUp,
    handleUserSignIn,
    handleProfileEdit
}