var express = require('express');
var router = express.Router();

var os = require('os');

var fs = require('fs');
const { match } = require('assert');
const hold = new Array();
/* GET home page. */
router.get('/', function(req, res, next) {
  let tr = fs.readFile('./words.json');
  console.log(tr);
    
  res.render('index', { title: 'Express' });
});


module.exports = router;
