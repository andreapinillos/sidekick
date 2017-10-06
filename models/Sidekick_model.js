const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sidekickSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  bio: String,
  email: { type: String, required: true },
  activity: {type: String, required:true },
  zipcode: { type: String, required: true},
  fbid: {type: String, required:true},
  last_login: { type: Date, default: Date.now }
});

const Sidekick_model = mongoose.model("Sidekick_model", sidekickSchema);

module.exports = Sidekick_model;


