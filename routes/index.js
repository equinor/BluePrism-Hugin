var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'index' });
});

router.get('/deploy', function(req, res, next) {
  res.render('deploy', { page: 'deploy' });
});


module.exports = router;
