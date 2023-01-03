require ("dotenv").config();
const path = require("path");
const express = require("express");

const app = express();

// app configuration

app.use(express.static(path.join(__dirname,"../public"))); //access public file
app.set('view engine', 'ejs'); 

const homeRoutes = require ('./routes/home');
const servicesRoutes = require('./routes/services');
const portfolioRoutes = require('./routes/portfolio');
const contactRoutes = require('./routes/contact');

app.use ('/' , homeRoutes);
app.use ('/', servicesRoutes);
app.use ('/', portfolioRoutes);
app.use ('/', contactRoutes);


app.listen (process.env.PORT , () => {
    console.log("listening on port " + process.env.PORT)
});

module.exports = app;