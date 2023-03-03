const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("DRINKS", "root", "password", {
  host:  'db4free.net', /*  "localhost" */
  dialect: "mysql",
});

module.exports = sequelize;
