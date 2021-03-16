var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/bagas', function(req, res, next) {
  res.send({
    nama:'bagaskara',
    domisili:'yogyakarta',
  })
});

module.exports = router;
