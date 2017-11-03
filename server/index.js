const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");

const { secret } = require("./config");
const app = express();

//Controllers
const user_controller = require("../src/components/user_controller");

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

app.get("/api/login", user_controller.login);
app.post("/api/signup", user_controller.register);
app.get("/api/logout", user_controller.logout);

const port = 3001;

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});
