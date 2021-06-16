var express = require('express');
var router = express.Router();
var haha = require('./Global.json');
/* GET users listing. */

router.get('/', function(req, res, next) {
    haha.questionNumber = 0;
    res.send({ahoj: "asd"});
});
module.exports = router;