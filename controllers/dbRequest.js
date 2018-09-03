var Request = require('tedious').Request;
var models = require('../models/models');
const sqlConnection = require('../config/mssql');


// Function for executing INSERT by SQL query or calling stored procuredure
module.exports.insertSql = function insertSql (req) {

    var request = new Request(req.sqlInsert, function(err) {
        if(err) console.log("Error while executing SQL :" + err);
    });

    req.params.forEach(function(param){
        request.addParameter(param.column, param.type, param.value)
    })

    sqlConnection.execSql(request)

}

// Function for getting data from Sql server
module.exports.getSql = function getSql (req, callback) {    
    var retVal = [];

    var request = new Request(req.sqlSelectAll, function(err, rowCount) {
        if(err) console.log("Error while executing SQL :" + err);

    });

    request.on('row', function(columns) {
        columns.forEach(function(column) {
            retVal.push(column.value.trim());  
        })
    });

    request.on('requestCompleted', function(rowCount, more, rows) {
        callback(retVal);
    });

    sqlConnection.execSql(request);
}


