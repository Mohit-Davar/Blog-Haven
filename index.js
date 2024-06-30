// Acquiring Express and making 'app' handler function
const express = require("express")
const app = express()
require('dotenv').config()
const PORT = process.env.PORT;


// Acquiring Additional Packages
const path = require("path")
const cookieParser = require('cookie-parser')
const session = require("express-session")
const flash = require("connect-flash")

//Middleware Pluggins
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'Public')))
// Set up session middleware
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));
// Set up flash middleware
app.use(flash());
// Make flash messages available in templates
app.use((req, res, next) => {
    res.locals.error = req.flash('error');
    next();
});


//Middlewares
const { createLog } = require("./Middleware/log.js")
const { JWTMiddleware } = require("./Middleware/checkAuth.js")

// ROUTES
const staticRouter = require('./Routes/staticRoutes.js')
app.use("/", staticRouter)
const userRouter = require('./Routes/userRoutes.js')
app.use("/user", userRouter)
const blogRouter = require("./Routes/blogRoutes.js")
app.use("/blogs", JWTMiddleware, createLog, blogRouter)

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
