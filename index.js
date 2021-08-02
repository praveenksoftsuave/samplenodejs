const config = require("./config");
const mysql = require('mysql');
var os = require("os");
var hostname = os.hostname();

var connection = mysql.createConnection(config.dbConfig.database);
console.log('DB connection triggered');

insertRecord= async () => {
    connection.connect();
    var sql = `INSERT INTO nodeJsTable (name) VALUES ("${hostname}") `;
    await executeQuery(sql, "");
    connection.destroy()
    console.log("Connection ")
}
//connection.destroy();


const executeQuery = (sql, callFrom) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, res) => {
            if(err) throw err;
            resolve(res);
        });
    })
}

insertRecord();