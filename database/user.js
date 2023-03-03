// const connection = require(".");

// function groupUserDrinks(rows) {
//   const users = {};
//   const ids = new Set();
//   rows.forEach(({ id, name, ...drink }) => {
//     if (user[id]) {
//       users[id].drinks.push(drink);
//     } else {
//       users[id] = { id, name, drinks: [drink] };
//     }
//     ids.add(id);
//   });
//   return Array.from(ids).map((id) => users[id]);
// }

// async function getAllUsers() {
//   const [result] = await connection.query("SELECT * from users;");
//   return result;
// }

// async function findUsersById(id, limit = 1) {
//   const [result] = await connection.query(
//     `SELECT u.id , u.name, d.id as drink_id, d.name as drink_name from users as u join drinks as d on d,user_id order by u.id ASC;`
//   );
//   return groupUserDrinks(result);
// }

// async function insertUser(i) {
//   console.log("this req.body insert", i);
//   const [newUser] = await connection.query(
//     "INSERT INTO users(name,email, password, api_key) VALUES(?,?,?,?)",
//     [i.name, i.email, i.password, i.api_key]
//   );
//   console.log(i.password);
//   return newUser;
// }

// async function updateUser(list, id) {
//   const [newData] = await connection.query(
//     `UPDATE user SET name = ?, email = ?, password = ?, api_key = ?`,
//     [list.name, list.email, list.password, list.api_key, id]
//   );
//   console.log(newData);
//   return findUsersById(id);
// }


// async function modifyUser(data, id) {
//     const values = [];
//     const newKeyVal = Object.keys(data)
//       .map((key) => {
//         values.push(data[key]);
//         return `${key} = ?`;
//       })
//       .join(", ");
//     connection.query(`UPDATE users SET ${newKeyVal} WHERE id = ?`, [
//       ...values,
//       id,
//     ]);
//   }
  
// async function deleteUser(id) {
//   const [user] = await connection.query(`DELETE  from users WHERE id = ?;`, [
//     id,
//   ]);
//   return user;
// }

// module.exports = { getAllUsers, findUsersById, insertUser, updateUser, modifyUser, deleteUser};
 

const { DataTypes } = require("sequelize");
const sequelize = require(".");
/* const sequelize = new Sequelize('sqlite::memory:');
 */
const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    emailAdress: {
      type: DataTypes.STRING,
      unique: true,
      // allowNull defaults to true
    },
    phone: {
      type: DataTypes.STRING,
      apiKey: DataTypes.STRING,
      password: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    timestamp: true,
    paranoid: true,
  }
);

module.exports = User;

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
