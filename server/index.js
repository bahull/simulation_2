const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
require("dotenv").config();
const { secret } = require("./config");
const app = express();

//Controllers
const userController = require("../src/components/user_controller");

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.use(json());
app.use(cors());

app.use(
  session({
    secret,
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 100000 }
  })
);

app.post("/api/login", userController.login);
app.post("/api/signup", userController.register);
app.get("/api/logout", userController.logout);

const port = 3001;

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});
