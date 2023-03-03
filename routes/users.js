var express = require("express");
const { getAllUsers, findUsersById, insertUser, updateUser, modifyUser, deleteUser } = require("../database/users");
var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res) {
  const users = await getAllUsers()
  res.send(users);
});

router.post("/", async function (req, res) {
  console.log('this req.body', req.body)
  const newUsers = await insertUser(req.body)
  res.send(newUsers);
});

router.get("/:id", async function (req, res) {
  const users = await findUsersById(req.params.id);
  res.send(users);
});

router.patch("/:id",async function (req, res, next) {
  const replaceUserValues = await modifyUser(req.params.id, req.body)
  res.send(replaceUserValues);
});

router.put("/:id", async function (req, res,) {
  const updater = await updateUser(req.params.id,);
  console.log(updater);
  res.send(updater);
});

router.delete("/:id", async function (req, res, next) {
  const dropUser = await deleteUser(req.params.id);
  res.send(dropUser);
});

module.exports = router;
