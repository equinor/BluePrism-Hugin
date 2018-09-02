var TYPES = require('tedious').TYPES;

const tables = {
    LogCodes : 'dbo.LogCodes',
    ProcessItems : 'dbo.ProcessItems',
    ProcessTable : 'dbo.ProcessTable',
    ProcessSchedule: 'dbo.ProcessSchedule'
}

module.exports.NewProcess = newProcess = {
    sql: 'INSERT INTO ' + tables.ProcessTable + ' (Id, PCId, ProcessName) VALUES (@Id, @PCId, @ProcessName)' ,
    storedProcure: '',
    params: [
        {
            column: 'Id',
            type: TYPES.SmallInt,
            value: ''
        },
        {
            column: 'PCId',
            type: TYPES.NChar,
            value: ''
        },
        {
            column: 'ProcessName',
            type: TYPES.NChar,
            value: ''
        }       
    ]
}