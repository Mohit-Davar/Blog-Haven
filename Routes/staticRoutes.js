// Acquiring Express and making 'app' handler function
const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})
router.get("/contact",(req,res)=>{
    res.send("<h1>Contact Us Page</h1></h1>")
})
router.get("/aboutUs",(req,res)=>{
    res.send("<h1>About Us</h1>")
})
//Exporting router
module.exports = router