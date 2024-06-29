// Acquiring Express
const express = require("express")
const router = express.Router()

const { handleUserSignUp, handleUserSignIn } = require("../Controllers/userContoller")
// SignUp Route
router.route("/signup")
    .get((req, res) => {  // GET METHOD
        return res.status(200).render("signup")
    })
    .post(handleUserSignUp) //POST METHOD


// LoginIn Route
router.route("/login")
    .get((req, res) => {  // GET METHOD
        return res.status(200).render("login")
    })
    .post(handleUserSignIn) //POST METHOD


module.exports = router