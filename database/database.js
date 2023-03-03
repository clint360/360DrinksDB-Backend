const Sequelize = require('sequelize');

const sequelize = new Sequelize("DRINKS ", "root", "password", {
    dialect: "msql",
    host: "localhost",
})

module.exports = sequelize;