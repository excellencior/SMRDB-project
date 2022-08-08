const database = require('./db_con');

const oracledb = require('oracledb');

oracledb.autoCommit = true;

async function create (sql,binds){

    let connection, result;

    try{

        connection = await oracledb.getConnection(database.database);
        if (connection) console.log('True connection');

        result = await connection.execute(sql,binds,{});
        if (result) console.log('True result');
    }

    catch(err){

        console.log('Error has been generated. ');


    }
}

module.exports = create;