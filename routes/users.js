var express = require("express");
const { Op, where } = require("sequelize");
const User = require("../database/user");
var router = express.Router();
/* GET users listing. */
router.get("/", async function (req, res) {
  const users = await User.findAll();
  res.send(users);
});
router.get("/:id", async function (req, res) {
  const users = await User.findByPk(req.params.id);
  res.send(users);
});
router.post("/", async function (req, res) {
  const { firstName, lastName, emailAddress, phone, password } = req.body;
  const user = await User.create({
    firstName,
    lastName,
    emailAddress,
    phone,
    password,
    apikey: Date.now(),
  });
  res.send(user);
});
router.put("/:id", async function (req, res) {
  const { firstName, lastName, emailAddress, phone, password } =req.body;
  const user = await User.update({
    firstName,
    lastName,
    emailAddress,
    phone,
    password,
  },{
    where:{
      id:req.params.id
    }
  });
  res.send(user);
});
router.patch("/:id", async function (req, res) {
  const { firstName, lastName, emailAddress, phone, password } =req.body;
  const user = await User.update({
    firstName,
    lastName,
    emailAddress,
    phone,
    password,
  },{
    where:{
      id:req.params.id
    }
  });
  res.send(user);
});

module.exports = router 