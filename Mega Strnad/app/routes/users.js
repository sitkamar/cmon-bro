var express = require('express');
var router = express.Router();
var global = require('./Global.json');
const fs = require('fs');
const path = require('path');
const DATABASE = {
  History: [],
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(DATABASE.History.length === 0){
  initDatabase();
  global.history = DATABASE.History;
  }
  if(global.questionNumber>25)global.questionNumber=-1;
  let i = Math.round(Math.random()*DATABASE.History.length);
  global.questionNumber = i;
  res.send({ahoj: DATABASE.History[i].otazka});
});
module.exports = router;


function initDatabase() {
    const paths = ['./../Otazky_historie.txt'];
    paths.forEach((el) => {
        el = path.resolve(__dirname + el);
        let data = fs.readFileSync(el, { encoding: 'utf-8' });
        data = data.split('\n');
        let entries = data.filter(elem => !elem.includes('-'));
        let header = '';
        entries[0].slice(0, 1);
        //        entries[0].slice(entries[0].length - 4);
        let temp = entries[0];
        temp = temp.split('|');
        temp = temp.map(elem => elem.trim());
        header = temp;
        header.pop();
        entries.shift();
        let identificator = 'History';
        entries.forEach(elem => {
            elem.slice(0, 1);
            //            elem.slice(elem.length - 4);    
            let eatAss = elem;
            eatAss = eatAss.split('|');
            eatAss = eatAss.map(elemem => elemem.trim());
            let obj = {};
            header.forEach((elemem, i) => {
                if (i > 0) {
                    obj[elemem] = eatAss[i];
                }
            });
            DATABASE[identificator].push(obj);
        });
    });
}