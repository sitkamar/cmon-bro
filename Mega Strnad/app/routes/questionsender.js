var express = require('express');
var router = express.Router();
var global = require('./Global.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({ahoj: global.history[global.questionNumber].odpoved});
});

module.exports = router;