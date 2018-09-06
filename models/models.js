var TYPES = require('tedious').TYPES;

const tables = {
    LogCodes : 'dbo.LogCodes',
    ProcessItems : 'dbo.ProcessItems'
}

module.exports.ProcessItemsModel = ProcessItemsModel = {
    sqlInsert: 'INSERT INTO ' + tables.ProcessItems + ' (PCId, LogCode, Message, TimeStamp) VALUES (@PCId, @LogCode, @Message, @TimeStamp)' ,
    params: [
        {
            column: 'PCId',
            type: TYPES.NChar,
            value: ''
        },
        {
            column: 'LogCode',
            type: TYPES.SmallInt,
            value: ''
        },
        {
            column: 'Message',
            type: TYPES.NChar,
            value: ''
        },
        {
            column: 'TimeStamp',
            type: TYPES.SmallDateTime,
            value: ''
        }       
    ]
}



