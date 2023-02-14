const route = require("express").Router();
const exercises = require("../models/exercises");

route.get("/", (req, res) => {
     exercises.find().then((data) => {
          res.json(data);
     });
});

route.get("/:id", (req, res) => {
     exercises
          .findById(req.params.id)
          .then((data) => {
               res.json(data);
          })
          .catch((err) => {
               console.log(err);
          });
});

route.post("/add", (req, res) => {
     const newExercise = new exercises({
          username: req.body.username,
          description: req.body.description,
          duration: req.body.duration,
          date: new Date(req.body.date),
     });
     newExercise
          .save(newExercise)
          .then(() => {
               res.json("New Exercise Created");
          })
          .catch((err) => {
               console.log(err);
          });
});

route.post("/update/:id", (req, res) => {
     const id = req.params.id;
     exercises
          .findByIdAndUpdate(id, {
               username: req.body.username,
               description: req.body.description,
               duration: req.body.duration,
               date: new Date(req.body.date),
          })
          .then(() => {
               res.json("Exercise updated");
          })
          .catch((err) => {
               console.log(err);
          });
});

route.delete("/:id", (req, res) => {
     const id = req.params.id;
     exercises
          .findByIdAndDelete(id)
          .then(() => {
               res.json("Exercise deleted");
          })
          .catch((err) => {
               console.log(err);
          });
});

module.exports = route;
