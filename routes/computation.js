var express = require('express');
var router = express.Router();

var tang =Math.random()*100;

var l=0;
var m=0;
var n=0;
var o=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  l=Math.acosh(tang);
  m=Math.log1p(tang);
  n=Math.tan(tang);
  o=Math.sqrt(tang);

  res.send(`acosh applied to : ${tang} is ${l} <br> log1p applied to : ${tang} is ${m} <br> tan applied to : ${tang} is ${n} <br> sqrt applied to : ${tang} is ${o}`);
 
});

module.exports = router;
