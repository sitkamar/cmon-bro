var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
    fs.readFile(__dirname + './../leaderboard.txt', { encoding: 'utf-8'}, (err, data) => {
        let writeThis = data.split('\n');
        let sendThis = [];
        writeThis.forEach(el => {
            sendThis.push(el.split('*|*'));
        });
        sendThis.sort(([a, b],[c, d])=> d - b);
        res.send(sendThis);
    })
});

module.exports = router;