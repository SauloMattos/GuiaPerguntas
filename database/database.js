const Sequelize = require("sequelize");

const connection = new Sequelize("guiaperguntas","root","Xtzj8503b@",{
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;