const express = require("express");
const cors = require("cors");

require("dotenv").config({ path: __dirname + "/.env" });
const userRouter = require("./api/user/user.router");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "got it " });
});
app.use("/user", userRouter);

app.listen(process.env.PORT || 3001, () => {
  console.log("user  server up and running on 3001");
});