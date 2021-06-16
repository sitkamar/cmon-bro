var express = require('express');
var router = express.Router();
var haha = require('./Global.json');
const fs = require('fs');
/* GET users listing. */

router.post('/', function(req, res, next) {
    res.send({cmon: "jea boiiii"});
    console.log("writing");
    fs.readFile(__dirname + './../leaderboard.txt', { encoding: 'utf-8'}, (err, data1) => {
        let writeThis = data1 + `\n${req.body.headers.name}*|*${req.body.headers.score}`;
        fs.writeFile(__dirname + './../leaderboard.txt', writeThis, { encoding: 'utf-8' }, err => {
          if(err) console.error(err);
        })
      })
});
module.exports = router;