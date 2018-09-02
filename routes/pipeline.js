var express = require('express');
var router = express.Router();
var dbRequest = require('../controllers/dbRequest');
var models = require('../models/models');

/* GET users listing. */
router.post('/', function(req, res) {
  var Id = req.params('Id');
  var PCId = req.params('PCId');
  var ProcessName = req.params('ProcessName');

  models.NewProcess.params[0].value = Id;
  models.NewProcess.params[1].value = PCId;
  models.NewProcess.params[2].value = ProcessName;

  dbRequest.execSql(models.NewProcess);
  
  res.send('respond with a resource');
});

module.exports = router;
