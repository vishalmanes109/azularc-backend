
const { pool } = require("../../utility/connection")
module.exports = {

  createUser: async (userData) => {
    try {
      let result = await pool.query(
        `insert into Employee(id, name,age,email,dob,address,photo) values($1,$2,$3,$4,$5,$6,$7)`,
        [
          userData.id,
          userData.name,
          userData.age,
          userData.email,
          userData.dob,
          userData.address,
          userData.photo,
        ]
      );
      console.log(result);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  deleteUser: async (userId) => {
    try {
      let result = await pool.query(`delete from Employee where id=$1`, [userId]);
      // console.log(result);
      return result;
    } catch (err) {
      // console.log(err);
      return err;
    }
  },
  updateUser: async (userData) => {
    try {
      let result;
      if (userData.attribute === "age") {
        result = await pool.query(
          `update Employee set age= $1 where id=$2`,
          [userData.age, userData.id]
        );
      } else if (userData.attribute === "name") {
        result = await pool.query(`update  Employee set name= $1 where id= $2`, [
          userData.name,
          userData.id,
        ]);
      } else if (userData.attribute === "email") {
        result = await pool.query(`update  Employee set email= $1 where id= $2`, [
          userData.email,
          userData.id,
        ]);
      } else if (userData.attribute === "dob") {
        result = await pool.query(
          ` update  Employee set dob = $1 where id=$2`,
          [userData.dob, userData.id]
        );
      } else if (userData.attribute === "address") {
        result = await pool.query(
          ` update  Employee set address = $1 where id=$2`,
          [userData.address, userData.id]
        );
      } else if (userData.attribute === "photo") {
        result = await pool.query(
          ` update  Employee set photo = $1 where id=$2`,
          [userData.photo, userData.id]
        );
      } else result = {};

      // console.log(result);
      return result;
    } catch (err) {
      // console.log(err);
      return err;
    }
  },
  getUser: async () => {
    try {
      console.log("lol");
      let result = await pool.query(`select *  from Employee`);
      // console.log(result);
      return result;
    } catch (err) {
      // console.log(err);
      return err;
    }
  },
  getUserById: async (userId) => {
    try {
      let result = await pool.query(`select * from Employee where id=$1`, [
        userId,
      ]);
      return result;
    } catch (err) {
      return err;
    }
  }
};
