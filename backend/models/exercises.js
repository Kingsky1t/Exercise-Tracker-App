const mongoose = require("mongoose");

const schema = mongoose.Schema({
     username: {
          type: String,
          required: true,
     },
     description: {
          type: String,
     },
     duration: {
          type: Number,
     },
     date: {
          type: Date,
     },
});

const exercises = mongoose.model("exercises", schema);
module.exports = exercises;
