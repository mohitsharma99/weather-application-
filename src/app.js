const express = require('express');
const app = express();
const request = require("request");
const hbs = require('hbs');
const path = require('path');

// path
const static_path = path.join(__dirname, "../templates/views")
// console.log("static path "+ static_path)

const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', static_path);

hbs.registerPartials(partials_path);

app.use(express.static(static_path));
app.get('/', (req, res) => {
    res.render("index")
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get("/weather", (req, res) => {
    res.render('weather');
});

app.get("/*", (req, res) => {
    res.render("404error", {
        errorMsg:'Oops! Page not found'
    })
})



app.listen(300, (req,res)=>{
    console.log("running 300");
});