// Acquiring Express and making 'app' handler function
const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    return res.send("<h1>Blogs Page</h1>")
})

module.exports = router