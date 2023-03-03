const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("drinksdb", "root", undefined, {
  host:  'localhost', /*  "localhost" */
  dialect: "mysql",
});

module.exports = sequelize;
