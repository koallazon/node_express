var express = require('express');
var router = express.Router();
var cors = require('cors');

/* GET users listing. */
router.get('/', cors(), function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
