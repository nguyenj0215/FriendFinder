var friends = require("./../data/friends.js")

module.exports = function (app) {

    //Display json data for all friend objects
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    //This should get the new friend information from survey
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;

        //Loop through the scores array to make strings ints
        //and reassign values in array 
        for (var i = 0; i < newFriend.scores.length; i++) {
            newFriend.scores[i] = parseInt(newFriend.scores[i])
        }

        //Loop through the friends array to calculate compatibility

        //Array that will contain difference total values 
        var differenceArray = []
        //Total difference summed at each index
        var differenceTotal = 0;
        //To be used at each index to add to differenceTotal
        var differenceCurrent;

        //For loop through friends array
        for (var j = 0; j < friends.length; j++) {

            //For loop for each friends scores (no need to parseint already int in friends.js)
            for (var k = 0; k < friends[j].scores.length; k++) {

                //Absolute value of current friends score at index - new friend score at same index
                differenceCurrent = Math.abs(friends[j].scores[k] - newFriend.scores[k]);
                differenceTotal += differenceCurrent;
            }
            //Once looped through all the scores for one friend, push into array before moving to next friend
            differenceArray.push(differenceTotal)
        }

        var smallestIndex = 0;
        //Loop through differece Array to see which is smallest
        for (var h = 0; h < differenceArray.length; h++) {
            //Save first number in array as smallest index
            if (h === 0) {
                smallestIndex = h
            }
            //Continue through difference array to find any smaller numbers
            else if (differenceArray[h] < smallestIndex) {
                smallestIndex = h
            }
        }

        //push new friend object into friends array
        friends.push(newFriend)

        //Json response for friend in array that is most compatible
        res.json(friends[smallestIndex])

    })
}