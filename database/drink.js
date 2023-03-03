
const { DataTypes } = require("sequelize");
const sequelize = require(".");
/* const sequelize = new Sequelize('sqlite::memory:');
 */
const Drink = sequelize.define(
  "Drink",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, ingredient: {
        type: DataTypes.STRING,
        allowNull: false,
      },
   
  },
  {
    timestamp: true,
    paranoid: true,
  }
);

module.exports = Drink;
