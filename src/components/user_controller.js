module.exports = {
  register: (req, res) => {
    req.app
      .get("db")
      .createUser([req.body.username, req.body.password])
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
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

    dbInstance
      .Select_User([req.body.username, req.body.password])
      .then(answer => {
        if (answer.length > 0) {
          res.status(200).send("Authenticated");
        } else {
          res.status(200).send("Unknown");
        }
      })
      .catch(() => res.status(500).send("Not Valid"));
  },
  logout: (req, res, next) => {
    res.redirect("/");
  },

  getAll: (req, res, next) => {
    const db = req.app.get("db");
    db
      .select_all()
      .then(result => {
        res.status(200).send(result);
      })
      .catch(() => res.status(500).send());
  },

  addProp: (req, res, next) => {
    const db = req.app.get("db");
    const {
      propertyName,
      propertyDescript,
      address,
      city,
      state,
      zip,
      imageUrl,
      loanAmount,
      monthlyMortgage,
      desiredRent
    } = req.body;
    db
      .add_prop([
        propertyName,
        propertyDescript,
        address,
        city,
        state,
        zip,
        imageUrl,
        loanAmount,
        monthlyMortgage,
        desiredRent
      ])
      .then(result => {
        res.status(200).send();
      })
      .catch(() => res.status(500).send());
  }
};
