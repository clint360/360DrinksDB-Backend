const { DataTypes } = require("sequelize");
const sequelize = require(".");
/* const sequelize = new Sequelize('sqlite::memory:');
 */
const Category = sequelize.define(
  "Category",
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

module.exports = Category;