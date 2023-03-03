const Drink = require("./drink");
const user = require("./users");
const Category = require("./category");
const Ingredient = require("./ingredient");

function relate() {
  user.hasmany(Drink);
  Drink.belongsTo(user);

  Drink.belongsToMany(Category, { through: "drinks_categories" });
  Category.belongsToMany(Drink, { through: "drinks_categories" });

  Drink.belongsToMany(Ingredient, { through: "drinks_ingredients" });
  Ingredient.belongsToMany(Drink, { through: "drinks_ingredients" });
}
