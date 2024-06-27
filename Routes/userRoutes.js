// Acquiring Express and making 'app' handler function
const express = require("express")
const router = express.Router()

const { handleUserSignUp, handleUserSignIn } = require("../Controllers/userContoller")
// SignUp Route
router.route("/signup")
    .get((req, res) => {  // GET METHOD
        // const { message } = req.query;
        // res.render("signup", {
        //     msg: message
        // })
        res.status(200).render("signup")
    })
    .post(handleUserSignUp) //POST METHOD


// LoginIn Route
router.route("/login")
    .get((req, res) => {  // GET METHOD
        res.status(200).render("login")
    })
    .post(handleUserSignIn) //POST METHOD


module.exports = router