var express = require("express");
var path = require("path");

var friends = require("./../data/friends.js")

module.exports = function(app){

    //Display json data for all friend objects
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
      });

}