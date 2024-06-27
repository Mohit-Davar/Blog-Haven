const fs = require("fs")

function createLog(req, res, next) {
    fs.appendFile(
        "./log.txt",
        `${new Date().toLocaleString()}\n`,
        (err) => {

        }
    )
    next()
}
module.exports = {
    createLog
}