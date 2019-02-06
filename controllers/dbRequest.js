var Request = require('tedious').Request;
const sqlConnection = require('../config/mssql');

// Function for executing INSERT by SQL query or calling stored procuredure
module.exports.insertSql = function insertSql (req) {

    var request = new Request(req.sqlInsert, function(err) {
        if(err) console.log("Error while executing SQL :" + err);
    });

    req.params.forEach(function(param){
        request.addParameter(param.column, param.type, param.value)
    });

    console.log("In insertsql:");
    console.log(req);

    sqlConnection.on('connect', function(err) {
        console.log("SQL connected")
        console.log(sqlConnection);

        if(!err) {
            console.log("Exec sql...");
            sqlConnection.execSql(request);
        } else {
            console.log("Error connecting: " + err);
        }

    })

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

    sqlConnection.on('connect', function(err) {
        if(!err) {
            sqlConnection.execSql(request);
        } else {
            console.log("Error connecting: " + err);
        }

    })

}


