var express = require('express');
var router = express.Router();
var cors = require('cors');

/* GET home page. */
router.get('/', function(req, res, next) {
  //next()
  res.render('index', { title: 'Express' });
  //res.redirect('https://www.naver.com')
});
/*
router.get('/user', function(req, res, next) {
  //next()
  res.send('user')
  //res.redirect('https://www.naver.com')
});
*/

module.exports = router;
