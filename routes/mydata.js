var express = require('express');
var router = express.Router();

/* GET mydata.js page */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Soujanya Kirni' });
});

module.exports = router;
