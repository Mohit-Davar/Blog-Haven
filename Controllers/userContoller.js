// importing user model
const { compare } = require("bcrypt")
const user = require("../Models/userModel.js")

async function handleUserSignUp(req, res) {
    const body = req.body
    if (!body || !body.first_Name || !body.last_Name || !body.email || !body.password) {
        return res.status(400).json({ msg: "All fields are required" })
        // const data = {
        //     message: "All fields are required",
        // };
        // const queryString = new URLSearchParams(data).toString();
        // return res.status(400).redirect(`/user/signup?${queryString}`)
    }
    try {
        await user.create({
            name: {
                firstName: body.first_Name,
                lastName: body.last_Name,
            },
            email: body.email,
            password: body.password
        })
        // return res.status(201).json({ msg: "Succefully Created a User" })
        return res.status(201).redirect("/")
    } catch (error) {
        if (error.code === 11000) { // MongoDB duplicate key error
            return res.status(400).json({ msg: "Email already exists" });
        }
        return res.status(500).json({ msg: "An error occurred" });
    }
}

async function handleUserSignIn(req, res) {
    const body = req.body
    if (!body || !body.email || !body.password) {
        return res.status(400).json({ msg: "All fields are required" })
    }
    try {
        const candidate = await user.findOne({
            email: body.email,
        })
        if (!candidate) {
            return res.status(404).json({ msg: "Wrong email" })
        }
        const isMatch = await candidate.comparePassword(body.password)
        if (!isMatch) {
            return res.status(400).json({ msg: "Wrong password" })
        }
        return res.status(200).json({ msg: "Succesfully LoggedIn" })
    } catch (err) {
        res.json({ msg: `Error Ocuured: ${err}` })
    }

}
module.exports = {
    handleUserSignUp,
    handleUserSignIn
}