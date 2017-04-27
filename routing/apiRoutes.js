var path = require('path');
var friend = require('../app/data/friends');




module.exports = function(app){
app.get('/api/friends', function(req, res){
    return res.json(friend);
    });

app.post('/api/date',function(req,res){
    var newFriend = req.body;
    var diffArry =[];

    for (var i = 0; i < friend.length; i++) {
        var friendScoreArry = friend[i].score;
        var diff = 0;
        for(var j = 0; j<newFriend.score.length; j++){
            var friendScore = parseInt(friendScoreArry[j]);
            var newFriendScore = parseInt(newFriend.score[j]);
                diff += Math.abs(friendScore - newFriendScore);
              // var match = Math.min(diff);
            //if(friendScore === match){
              //     console.log(this.friend);
            //}
        }
        diffArry.push(diff);
    }
    var lowestScore = Math.min.apply(null,diffArry);
    console.log(lowestScore +"hi");
    var indexofFriend = diffArry.indexOf(lowestScore);
   var bestMatch= friend[indexofFriend];
   console.log(bestMatch);
    friend.push(newFriend);
    res.json(bestMatch);

});
};

//var popUp = function() {
  //  for (var i = 0; i < friend.length; i++) {
   // var friendArry = parseInt(friend[i].scores);
    //console.log(friendArry)
      //  var nFriend = parseInt(newFriend.scores);
        //var diff = 0;
       // for(var j=0; j<friendArry.length; j++){


    //    }
    //}

//};




