var express = require('express');
var router = express.Router();
var dbRequest = require('../controllers/dbRequest');
var models = require('../models/models');


var logObj = {
    Id: '',
    PCId: '',
    logCode: '',
    environment: '',
    scheduleId: '',
    message: '',
    ScheduleStart: Date,
    ScheduleStop: Date,
    EventTime: Date
}

const logCodes = {
    START_SCHEDULE: 100,
    STOP_SCHEDULE: 101,
    FAIL_SCHEDULE: 102,
    ITEM_SUCESS: 200,
    ITEM_FAIL: 201,
    ITEM_MANUAL: 202
}


router.post('/', function(req, res) {
    logObj.PCId = req.query.PCId;
    logObj.logCode = req.query.logCode;
    logObj.enviroment = req.query.environment;
    logObj.scheduleId = req.query.scheduleId;
    logObj.message = req.query.message;

    switch(parseInt(logObj.logCode)) {
        case logCodes.START_SCHEDULE:
            // Check schedule does not exist
            // Find Id of PCId
            // INSERT with timestamp

            break;
        case logCodes.STOP_SCHEDULE:

            break;
        default:
            console.log('Could not log, no logcode')
    }


    res.send('respond with a resource');
});

module.exports = router;