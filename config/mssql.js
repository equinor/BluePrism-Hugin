const Connection = require('tedious').Connection;

const config = 
    {
        userName: process.env.DB_USER,
        password: process.env.DB_PASS,
        server: process.env.DB_SERVER,
        options: {
            database: process.env.DB_DATABASE,
            encrypt: true,
            rowCollectionOnDone: true
        }
    }

const connection = new Connection(config);

module.exports = connection

connection.on('debug', function(text) {
    console.log(text);
  }
);
