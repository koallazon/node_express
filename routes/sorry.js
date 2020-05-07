var express = require('express');
var router = express.Router();
var cors = require('cors');
const axios = require('axios');

/* GET users listing. */
router.get('/', cors(), function(req, res, next) {
  axios.get('http://newsapi.org/v2/top-headlines?country=kr&apiKey=3763b3e4dffb41d79e351431946efed0')
    .then(response => {
      res.send(response.data.status)
    }).catch(err => {
      console.log(err)
    })

  
  //res.redirect('https://www.naver.com')
});

module.exports = router;
