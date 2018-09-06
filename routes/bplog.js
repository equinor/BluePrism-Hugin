var express = require('express');
var router = express.Router();




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