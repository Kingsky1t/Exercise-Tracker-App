const route = require("express").Router();
const users = require("../models/users");

route.get("/", (req, res) => {
     users.find().then((data) => {
          res.json(data);
     });
});

route.post("/add", (req, res) => {
     const newUser = new users({
          username: req.body.username,
     });
     newUser
          .save(newUser)
          .then(() => {
               res.json("New User Created");
          })
          .catch((err) => {
               console.log(err);
          });
});

module.exports = route;
