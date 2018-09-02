var Request = require('tedious').Request;
var models = require('../models/models');
const sqlConnection = require('../config/mssql');


// Function for executing INSERT by SQL query or calling stored procuredure
module.exports.execSql = function execSql (req) {

    var request = new Request(req.sql, function(err) {
        if(err) console.log("Error while executing SQL :" + err);
    });

    req.params.forEach(function(param){
        request.addParameter(param.column, param.type, param.value)
    })

    sqlConnection.execSql(request)

}

// Function for getting data from Sql server
module.exports.getData = function getSql (sql) {
    var request = new Request(sql, function(err, rowCount) {
        if(err) {
            console.log("ee")
        } else {
            console.log(rowCount + ' rows returned');
        }
    })
}


