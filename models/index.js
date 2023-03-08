const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("drink", "root", undefined, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
