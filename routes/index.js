var express = require('express');
var router = express.Router();

var os = require('os');

var fs = require('fs');
const { match } = require('assert');
const hold = new Array();
/* GET home page. */
router.get('/', function(req, res, next) {
  let main = fs.readFile('./effText.txt',{encoding:'utf8', flag:'r'}, function(err, data){
      //console.log(getLine);
      data.split('/\w$\r/').forEach(line =>{
        hold.push(line);
      });
      
    console.log(hold[4])
    //console.log(hold[0]);
  });
    //console.log(main);

    let phraseCount = 0;
    //let rng = Math.floor(Math.random() * (data.length-1)+1);
    //console.log(data + '-' + data.indexOf(data));
    
    //console.log(data);
  
  res.render('index', { title: 'Express' });
});


module.exports = router;
