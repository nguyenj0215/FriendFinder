var express = require("express");
var path = require("path");

//Routes for HTML pages
module.exports = function(app){

    app.get("/",function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"))
    })
    app.get("/survey",function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"))
    })
    
}