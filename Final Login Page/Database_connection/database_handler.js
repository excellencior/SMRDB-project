const oracledb = require('oracledb');

var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS =(PROTOCOL = TCP)(HOST = server1)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD = BASIC))))";

const database ={
    user : 'C##SMRDB',
    password : 'orcl',
    tns : conString
}

oracledb.autoCommit = true;

async function execute (sql, binds, options) {
    let connection, result;
    try{

        connection = await oracledb.getConnection(database);
        if (connection) console.log('True connection');

        result = await connection.execute(sql, binds, options);
        if (result) console.log('True result');
    }

    catch(err){
        console.log('Error has been generated. ');
    }
    finally {
        if (connection) {
            try {
                await connection.close();
            } catch(err) {
                console.log('Error... Closing Connection', err);
            }
        }
    }

    return result; // fetching data from database
}

const options = {
    outFormat : oracledb.OUT_FORMAT_OBJECT
}

module.exports = {execute, options}; // exporting as an object