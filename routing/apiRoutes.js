var path = require('path');
var friend = require(path.join(__dirname, '../app/data/friends'));




module.exports = function(app){
app.get('/api/friends', function(req, res){
    return res.json(friend);
    });

app.post('/api/date',function(req,res){
    var newFriend = req.body;
    console.log(newFriend);
    friend.push(newFriend);
    res.json(newFriend);
});
};




