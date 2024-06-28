const jwt = require("jsonwebtoken")
const JWTGeneration = (userData) => {
    return jwt.sign(userData, "Blog_Haven")
}
module.exports={
    JWTGeneration
}