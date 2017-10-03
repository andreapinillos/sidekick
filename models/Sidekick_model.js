const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sidekickSchema = new Schema({
  username: { type: String, required: true },
  picture: { type: String, required: true },
  bio: String,
  email: { type: String, required: true },
  activity: {type: String, required:true },
  zipcode: { type: Number, required: true, min: 5, max: 5 },
  last_login: { type: Date, default: Date.now }
});

const Sidekick_model = mongoose.model("Sidekick", sidekickSchema);

module.exports = Sidekick_model;
