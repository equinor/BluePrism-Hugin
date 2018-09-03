var TYPES = require('tedious').TYPES;

const tables = {
    LogCodes : 'dbo.LogCodes',
    ProcessItems : 'dbo.ProcessItems',
    ProcessTable : 'dbo.ProcessTable',
    ProcessSchedule: 'dbo.ProcessSchedule'
}

module.exports.Process = Process = {
    sqlInsert: 'INSERT INTO ' + tables.ProcessTable + ' (PCId, ProcessName) VALUES (@PCId, @ProcessName)' ,
    storedProcure: '',
    sqlSelectAll: 'SELECT PCId FROM ' + tables.ProcessTable,
    params: [
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

module.exports.ProcessSchedule = ProcessSchedule = {
    sqlInsert: 'INSERT INTO ' + tables.ProcessSchedule + ' (ScheduleId, Id, Start, Stop, LogCode, Environment) VALUES (@ScheduleId, @Id, @Start, @Stop, @LogCode, @Environment)' ,
    storedProcure: '',
    sqlSelect: 'SELECT Id FROM ' + tables.ProcessTable + ' WHERE PCId = @PCId',
    params: [
        {
            column: 'ScheduleId',
            type: TYPES.NChar,
            value: ''
        },
        {
            column: 'Id',
            type: TYPES.SmallInt,
            value: ''
        },
        {
            column: 'Start',
            type: TYPES.SmallDateTime,
            value: ''
        },
        {
            column: 'Stop',
            type: TYPES.SmallDateTime,
            value: ''
        },
        {
            column: 'LogCode',
            type: TYPES.NChar,
            value: ''
        },
        {
            column: 'Environment',
            type: TYPES.NChar,
            value: ''
        }           
    ]
}

