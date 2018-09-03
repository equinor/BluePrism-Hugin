var express = require('express');
var router = express.Router();
var dbRequest = require('../controllers/dbRequest');
var models = require('../models/models');


router.post('/', function(req, res) {
  var Id = req.query.Id;
  var PCId = req.query.PCId;
  var ProcessName = req.query.ProcessName;

  models.Process.params[0].value = PCId;
  models.Process.params[1].value = ProcessName;

  //dbRequest.execSql(models.NewProcess);

  dbRequest.getSql(models.Process, function(resp) {
    console.log(resp)
  });

  
  res.send('respond with a resource');
});

module.exports = router;
