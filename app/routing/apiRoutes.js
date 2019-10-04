var friends = require("./../data/friends.js")

module.exports = function(app) {

    //Display json data for all friend objects
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    //This should get the new friend information from survey
    app.post("/api/friends", function (req) {
        var newFriend = req.body;
        console.log(newFriend)

        //Loop through the scores array to make strings ints
        //and reassign values in array
        for (var i =0;i>newFriend.scores.length; i++) {
            newFriend.scores[i] = parseInt(newFriend.scores[i])
        }
    })

    //Loop through the friends array to calculate compatibility
    var absDifference = []

    for (var j=0; j<friends.length; j++) {
        
    }
}