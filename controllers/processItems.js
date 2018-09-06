var dbRequest = require('./dbRequest');
var models = require('../models/models')

function getProcessItemsFromReq(req) {
    const item = {
        PCId: req.query.PCId,
        LogCode: req.query.LogCode,
        Message: req.query.Message,
        TimeStamp: req.query.TimeStamp
    }

    return item;
}

async function post(req, res, next) {
    try {
        let item = getProcessItemsFromReq(req);

        models.ProcessItemsModel.params[0].value = item.PCId;
        models.ProcessItemsModel.params[1].value = item.LogCode;
        models.ProcessItemsModel.params[2].value = item.Message;
        models.ProcessItemsModel.params[3].value = new Date(item.TimeStamp);

        dbRequest.insertSql(models.ProcessItemsModel);

        res.status(201).json(item);
    } catch (err) {
        next(err);
    }
}

module.exports.post = post