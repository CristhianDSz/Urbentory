const myConnection = require('express-myconnection')
const mysql = require('mysql')
const configParams = require('./config')

const connection = myConnection(mysql,{
    host: configParams.host,
    user: configParams.user,
    password: configParams.password,
    port: configParams.port,
    database: configParams.database
}, 'single')

module.exports = connection