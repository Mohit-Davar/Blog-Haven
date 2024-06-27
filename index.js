// Acquiring Express and making 'app' handler function
const express = require("express")
const app = express()
const PORT = 8080
const path = require("path")

//Middleware Pluggins
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'Public')))

//Middlewares
const { createLog } = require("./Middleware/log.js")

// ROUTES
const staticRouter = require('./Routes/staticRoutes.js')
app.use("/", createLog, staticRouter)
const userRouter = require('./Routes/userRoutes.js')
app.use("/user", userRouter)

//connecting MongoDB
const { connectToMongoDB } = require("./connection.js")
connectToMongoDB("mongodb://localhost:27017/Blogging-App")

// Setting Up Templating Engine
app.set("view engine", "ejs")
app.set("views", path.resolve("./Views"))

//Starting Server
app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
    }
    console.log(`Server Started at Port: ${PORT}`)
})
