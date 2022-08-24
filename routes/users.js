var express = require('express');
var router = express.Router();
const readline = require('readline');
const fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.existsSync('./effText.txt', function(file){
    if(file){
      let fr = fs.readFileSync('./effText.txt', 'utf8');
      console.log(fr);
    }
    else{
      console.log("file not found");
      return false;
    }
  })
  // const files = fs.readFileSync('./effText.txt', 'utf8', function(err, data) {
  //   console.log(data.toString());
  

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
  res.send('respond with a resource');
});

module.exports = router;
