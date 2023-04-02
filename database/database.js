const Sequelize = require("sequelize");
const {PROJECTNAME, ADMIN, HOST, DIALECT, PASSWORD} = require("dotenv").config().parsed

const connection = new Sequelize(PROJECTNAME,ADMIN,PASSWORD,{
    host: HOST,
    dialect: DIALECT
})


module.exports = connection;