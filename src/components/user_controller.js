module.exports = {
  register: (req, res) => {
    console.log(req.app);
    req.app
      .get("db")
      .createUser(req.body)
      .then(result => {
        res.json(result);
      });
    // const dbInstance = req.app.get("db");
    // const { username, password } = req.body;
    // const { params } = req;
    // dbInstance
    //   .create_User([username, password])
    //   .then(() => res.status(200).send())
    //   .catch(error => res.status(500).send(error));
  },
  login: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { username, password } = req.body;

    dbInstance
      .select_User([username, password])
      .then(() => res.status(200).send("Authenticated"))
      .catch(() => res.status(500).send("Not Valid"));
  },
  logout: (req, res, next) => {
    res.redirect("/");
  }
};
