var express = require("express");
const { Op, where } = require("sequelize");
const Ingredient = require("../database/ingredient");
var router = express.Router();

router.get("/ingredients", async function (req, res) {
  const ingredients = await Ingredient.findAll();
  res.send(ingredients);
});
router.get("/ingredients/:id", async function (req, res) {
  const ingredients = await Ingredient.findByPk(req.params.id);
  res.send(ingredients);
});
router.post("/ingredients/", async function (req, res) {
  const { name } = req.body;
  const ingredient = await Ingredient.create({
    name
  });
  res.send(ingredient);
});
router.put("/ingredients/:id", async function (req, res) {
  const { name } = req.body;
  const ingredient = await Ingredient.update({
    name
  },{
    where:{
      id:req.params.id
    }
  });
  res.send(ingredient);
});
router.patch("/ingredients/:id", async function (req, res) {
  const { name } =req.body;
  const ingredient = await Ingredient.update({
    name
  },{
    where:{
      id:req.params.id
    }
  });
  res.send(ingredient);
});