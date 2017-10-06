const db = require("../models");

var toinsert =   {
    "name": "Ickis",
    "image": "http://static.tvtropes.org/pmwiki/pub/images/ickis.png",
    "bio": "Ahhhh! A Real Monster! Under a city dump",
    "activity": "rock climbing",
    "zipcode": "20009",
    "fbid": "3211",
    "email" : "ickis@gmail.com"    
  }

// Defining methods for the sidekickController
module.exports = {
  findAll: function(req, res) {
    db.Sidekick_model
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Sidekick_model
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByFBid: function(req, res) {
    db.Sidekick_model
      .findOne({fbid: req.params.fbid})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("the type is" + typeof req.body + "and name is " + req.body.name)    
    db.Sidekick_model
      .create(req.body)
      .then(console.log("the body " + JSON.stringify(req.body)))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Sidekick_model
      .update({ fbid: req.params.fbid }, req.body)
      .then(console.log(JSON.stringify(req.body)))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Sidekick_model
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};