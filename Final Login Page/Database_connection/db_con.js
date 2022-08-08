const oracledb = require ('oracledb');

var conString="(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS =(PROTOCOL = TCP)(HOST = server1)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = server2)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD = BASIC))))";

const database ={

    user : 'C##SMRDB',
    password : 'orcl',
    tns : conString
}

const options = {

    outFormat : oracledb.OUT_FORMAT_OBJECT
}

module.exports = {database, options};
